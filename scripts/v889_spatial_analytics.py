#!/usr/bin/env python3
"""
V889: Spatial Analytics & Heat Mapping Engine
Analyzes spatial data from AR/VR/IoT sensors to generate heat maps,
traffic flow analysis, dwell time metrics, and spatial optimization recommendations.
"""

import json
import hashlib
import time
import math
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from collections import defaultdict

class SpatialAnalyticsEngine:
    def __init__(self):
        self.spaces = {}
        self.sensor_data = defaultdict(list)
        self.heat_maps = {}
        self.traffic_flows = defaultdict(list)
        self.dwell_data = defaultdict(list)
        self.analytics_results = {}
        
    def define_space(self, space_id: str, name: str, dimensions: Dict, 
                     zones: List[Dict] = None) -> Dict:
        """Define a physical or virtual space for analytics"""
        space = {
            'space_id': space_id,
            'name': name,
            'dimensions': dimensions,  # {width, height, depth} in meters
            'zones': zones or [],
            'grid_resolution': 0.5,  # meters per cell
            'grid_width': int(dimensions.get('width', 10) / 0.5),
            'grid_depth': int(dimensions.get('depth', 10) / 0.5),
            'created_at': datetime.now().isoformat(),
            'sensor_count': 0
        }
        self.spaces[space_id] = space
        return {'success': True, 'space_id': space_id, 'grid': f'{space["grid_width"]}x{space["grid_depth"]}'}
    
    def add_zone(self, space_id: str, zone: Dict) -> Dict:
        """Add an analytics zone to a space"""
        if space_id not in self.spaces:
            return {'success': False, 'error': 'Space not found'}
        
        zone_entry = {
            'zone_id': f"zone_{len(self.spaces[space_id]['zones']) + 1}",
            'name': zone.get('name', 'Unnamed Zone'),
            'type': zone.get('type', 'general'),  # entrance, display, checkout, seating, etc.
            'bounds': zone.get('bounds', {}),  # {x1, y1, x2, y2}
            'capacity': zone.get('capacity', 0),
            'priority': zone.get('priority', 'normal')
        }
        
        self.spaces[space_id]['zones'].append(zone_entry)
        return {'success': True, 'zone': zone_entry}
    
    def record_position(self, space_id: str, entity_id: str, position: Dict, 
                        timestamp: str = None) -> Dict:
        """Record an entity's position in the space"""
        if space_id not in self.spaces:
            return {'success': False, 'error': 'Space not found'}
        
        entry = {
            'entity_id': entity_id,
            'position': position,  # {x, y, z}
            'timestamp': timestamp or datetime.now().isoformat(),
            'grid_x': int(position.get('x', 0) / self.spaces[space_id]['grid_resolution']),
            'grid_z': int(position.get('z', 0) / self.spaces[space_id]['grid_resolution'])
        }
        
        self.sensor_data[space_id].append(entry)
        self.traffic_flows[space_id].append(entry)
        
        return {'success': True, 'entity_id': entity_id, 'grid_position': f'{entry["grid_x"]},{entry["grid_z"]}'}
    
    def batch_record_positions(self, space_id: str, positions: List[Dict]) -> Dict:
        """Batch record multiple position updates"""
        results = []
        for pos in positions:
            result = self.record_position(space_id, pos['entity_id'], pos['position'], pos.get('timestamp'))
            results.append(result)
        
        successful = sum(1 for r in results if r.get('success'))
        return {'success': True, 'total': len(positions), 'recorded': successful}
    
    def generate_heat_map(self, space_id: str, time_range_hours: float = 24) -> Dict:
        """Generate a heat map from spatial data"""
        if space_id not in self.spaces:
            return {'success': False, 'error': 'Space not found'}
        
        space = self.spaces[space_id]
        grid = [[0] * space['grid_width'] for _ in range(space['grid_depth'])]
        
        # Filter data by time range
        cutoff = datetime.now() - timedelta(hours=time_range_hours)
        recent_data = [d for d in self.sensor_data[space_id] 
                      if datetime.fromisoformat(d['timestamp']) >= cutoff]
        
        # Populate grid
        for entry in recent_data:
            gx = min(entry['grid_x'], space['grid_width'] - 1)
            gz = min(entry['grid_z'], space['grid_depth'] - 1)
            if 0 <= gx < space['grid_width'] and 0 <= gz < space['grid_depth']:
                grid[gz][gx] += 1
        
        # Find hotspots
        max_val = max(max(row) for row in grid) if any(any(cell > 0 for cell in row) for row in grid) else 1
        hotspots = []
        
        for z in range(space['grid_depth']):
            for x in range(space['grid_width']):
                if grid[z][x] > max_val * 0.7:  # Top 30% intensity
                    hotspots.append({
                        'grid_x': x,
                        'grid_z': z,
                        'intensity': grid[z][x],
                        'normalized': round(grid[z][x] / max_val, 2),
                        'world_x': round(x * space['grid_resolution'], 1),
                        'world_z': round(z * space['grid_resolution'], 1)
                    })
        
        heat_map = {
            'space_id': space_id,
            'grid': grid,
            'grid_size': f'{space["grid_width"]}x{space["grid_depth"]}',
            'max_intensity': max_val,
            'hotspots': sorted(hotspots, key=lambda h: h['intensity'], reverse=True)[:20],
            'data_points': len(recent_data),
            'time_range_hours': time_range_hours,
            'generated_at': datetime.now().isoformat()
        }
        
        self.heat_maps[space_id] = heat_map
        
        return {
            'success': True,
            'space_id': space_id,
            'hotspots_count': len(hotspots),
            'top_hotspot': hotspots[0] if hotspots else None,
            'data_points': len(recent_data),
            'coverage_pct': round(sum(1 for row in grid for cell in row if cell > 0) / (space['grid_width'] * space['grid_depth']) * 100, 1)
        }
    
    def analyze_traffic_flow(self, space_id: str) -> Dict:
        """Analyze traffic flow patterns in the space"""
        if space_id not in self.spaces:
            return {'success': False, 'error': 'Space not found'}
        
        flows = self.traffic_flows[space_id]
        if len(flows) < 2:
            return {'success': True, 'message': 'Insufficient data for flow analysis'}
        
        # Track entity paths
        entity_paths = defaultdict(list)
        for entry in flows:
            entity_paths[entry['entity_id']].append(entry)
        
        # Analyze flow patterns
        flow_directions = defaultdict(int)
        avg_speed = 0
        path_count = 0
        
        for entity_id, path in entity_paths.items():
            if len(path) >= 2:
                path_count += 1
                for i in range(1, len(path)):
                    dx = path[i]['position'].get('x', 0) - path[i-1]['position'].get('x', 0)
                    dz = path[i]['position'].get('z', 0) - path[i-1]['position'].get('z', 0)
                    
                    angle = math.degrees(math.atan2(dz, dx))
                    if -45 <= angle < 45:
                        flow_directions['east'] += 1
                    elif 45 <= angle < 135:
                        flow_directions['north'] += 1
                    elif -135 <= angle < -45:
                        flow_directions['south'] += 1
                    else:
                        flow_directions['west'] += 1
                    
                    distance = math.sqrt(dx**2 + dz**2)
                    avg_speed += distance
        
        if path_count > 0:
            avg_speed = avg_speed / path_count
        
        dominant_direction = max(flow_directions.keys(), key=lambda k: flow_directions[k]) if flow_directions else 'none'
        
        return {
            'success': True,
            'space_id': space_id,
            'unique_entities': len(entity_paths),
            'total_movements': len(flows),
            'flow_directions': dict(flow_directions),
            'dominant_direction': dominant_direction,
            'avg_movement_distance': round(avg_speed, 2)
        }
    
    def analyze_dwell_time(self, space_id: str) -> Dict:
        """Analyze how long entities spend in different zones"""
        if space_id not in self.spaces:
            return {'success': False, 'error': 'Space not found'}
        
        space = self.spaces[space_id]
        zones = space.get('zones', [])
        
        entity_paths = defaultdict(list)
        for entry in self.sensor_data[space_id]:
            entity_paths[entry['entity_id']].append(entry)
        
        zone_dwell = defaultdict(lambda: {'total_time_sec': 0, 'visits': 0, 'entities': set()})
        
        for entity_id, path in entity_paths.items():
            for i in range(len(path) - 1):
                pos = path[i]['position']
                for zone in zones:
                    bounds = zone.get('bounds', {})
                    if (bounds.get('x1', 0) <= pos.get('x', 0) <= bounds.get('x2', 999) and
                        bounds.get('z1', 0) <= pos.get('z', 0) <= bounds.get('z2', 999)):
                        
                        try:
                            t1 = datetime.fromisoformat(path[i]['timestamp'])
                            t2 = datetime.fromisoformat(path[i+1]['timestamp'])
                            dwell_sec = (t2 - t1).total_seconds()
                        except:
                            dwell_sec = 60  # Default 1 minute
                        
                        zone_name = zone.get('name', zone.get('zone_id', 'unknown'))
                        zone_dwell[zone_name]['total_time_sec'] += dwell_sec
                        zone_dwell[zone_name]['visits'] += 1
                        zone_dwell[zone_name]['entities'].add(entity_id)
        
        # Convert sets to counts
        result = {}
        for zone_name, data in zone_dwell.items():
            result[zone_name] = {
                'total_time_min': round(data['total_time_sec'] / 60, 1),
                'avg_dwell_min': round(data['total_time_sec'] / max(data['visits'], 1) / 60, 1),
                'total_visits': data['visits'],
                'unique_visitors': len(data['entities'])
            }
        
        return {
            'success': True,
            'space_id': space_id,
            'zone_analytics': result,
            'zones_analyzed': len(result)
        }
    
    def recommend_optimizations(self, space_id: str) -> Dict:
        """Generate spatial optimization recommendations"""
        if space_id not in self.spaces:
            return {'success': False, 'error': 'Space not found'}
        
        heat_map = self.heat_maps.get(space_id)
        traffic = self.analyze_traffic_flow(space_id)
        dwell = self.analyze_dwell_time(space_id)
        
        recommendations = []
        
        # Check for congestion
        if heat_map and heat_map.get('hotspots_count', 0) > 5:
            recommendations.append({
                'type': 'congestion',
                'severity': 'high',
                'message': f'High congestion detected in {heat_map["hotspots_count"]} areas',
                'action': 'Consider widening pathways or redirecting traffic flow'
            })
        
        # Check for underutilized zones
        if dwell.get('zone_analytics'):
            for zone, data in dwell['zone_analytics'].items():
                if data['unique_visitors'] < 5:
                    recommendations.append({
                        'type': 'underutilization',
                        'severity': 'medium',
                        'message': f'Zone "{zone}" has low visitor engagement ({data["unique_visitors"]} visitors)',
                        'action': f'Consider repositioning content or improving signage for "{zone}"'
                    })
                elif data['avg_dwell_min'] < 1:
                    recommendations.append({
                        'type': 'engagement',
                        'severity': 'medium',
                        'message': f'Zone "{zone}" has very short dwell time ({data["avg_dwell_min"]} min avg)',
                        'action': 'Add interactive elements or improve visual appeal'
                    })
        
        # Flow optimization
        if traffic.get('dominant_direction') != 'none':
            recommendations.append({
                'type': 'flow',
                'severity': 'low',
                'message': f'Dominant traffic flow: {traffic["dominant_direction"]}',
                'action': f'Optimize layout for {traffic["dominant_direction"]} flow patterns'
            })
        
        return {
            'success': True,
            'space_id': space_id,
            'recommendations': recommendations,
            'total_recommendations': len(recommendations)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive spatial analytics report"""
        report = f"""
📍 SPATIAL ANALYTICS REPORT (V889)
{'='*60}

MONITORED SPACES: {len(self.spaces)}
DATA POINTS: {sum(len(d) for d in self.sensor_data.values()):,}
HEAT MAPS: {len(self.heat_maps)}

"""
        for space_id, space in self.spaces.items():
            heat = self.heat_maps.get(space_id, {})
            traffic = self.analyze_traffic_flow(space_id)
            dwell = self.analyze_dwell_time(space_id)
            opts = self.recommend_optimizations(space_id)
            
            report += f"""
🏢 Space: {space['name']} ({space_id})
  Dimensions: {space['dimensions'].get('width', '?')}m x {space['dimensions'].get('depth', '?')}m
  Grid: {space['grid_width']}x{space['grid_depth']}
  Zones: {len(space['zones'])}
  Heat Map Hotspots: {heat.get('hotspots_count', 0)}
  Dominant Flow: {traffic.get('dominant_direction', 'N/A')}
  Recommendations: {opts['total_recommendations']}
"""
            for rec in opts['recommendations'][:3]:
                report += f"    [{rec['severity'].upper()}] {rec['message']}\n"
        
        report += f"""
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for spatial analytics requests"""
    spatial_keywords = ['spatial analytics', 'heat map', 'traffic flow', 'dwell time', 'foot traffic', 'occupancy']
    optimize_keywords = ['optimize', 'improve', 'layout', 'recommendation', 'analysis']
    
    has_spatial = any(kw in email_text.lower() for kw in spatial_keywords)
    has_optimize = any(kw in email_text.lower() for kw in optimize_keywords)
    
    analysis = {
        'email_type': 'spatial_analytics',
        'spatial_request': has_spatial,
        'optimization_requested': has_optimize,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_spatial and has_optimize:
        analysis['priority'] = 'high'
        analysis['action'] = 'analyze_and_optimize_space'
    
    return analysis


if __name__ == '__main__':
    import random
    
    engine = SpatialAnalyticsEngine()
    
    # Define space
    engine.define_space('STORE-001', 'Retail Store Floor', {'width': 20, 'height': 3, 'depth': 15})
    
    # Add zones
    engine.add_zone('STORE-001', {'name': 'Entrance', 'type': 'entrance', 'bounds': {'x1': 0, 'x2': 5, 'z1': 0, 'z2': 3}})
    engine.add_zone('STORE-001', {'name': 'Electronics', 'type': 'display', 'bounds': {'x1': 5, 'x2': 15, 'z1': 3, 'z2': 8}})
    engine.add_zone('STORE-001', {'name': 'Checkout', 'type': 'checkout', 'bounds': {'x1': 15, 'x2': 20, 'z1': 10, 'z2': 15}})
    
    # Simulate position data
    for i in range(200):
        entity = f'customer_{random.randint(1, 30)}'
        x = random.uniform(0, 20)
        z = random.uniform(0, 15)
        ts = (datetime.now() - timedelta(minutes=random.randint(0, 1440))).isoformat()
        engine.record_position('STORE-001', entity, {'x': x, 'y': 0, 'z': z}, ts)
    
    # Generate heat map
    heat = engine.generate_heat_map('STORE-001')
    
    # Analyze
    traffic = engine.analyze_traffic_flow('STORE-001')
    dwell = engine.analyze_dwell_time('STORE-001')
    opts = engine.recommend_optimizations('STORE-001')
    
    print(engine.generate_report())
    
    test_email = "Analyze foot traffic patterns in our retail store and generate heat maps with optimization recommendations"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
