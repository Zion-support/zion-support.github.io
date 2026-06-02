#!/usr/bin/env python3
"""
V886: AR Workspace Assistant Engine
Manages augmented reality workspace configurations, spatial anchors, virtual displays,
and productivity optimization for remote and hybrid workers.
"""

import json
import hashlib
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict
import math

class ARWorkspaceEngine:
    def __init__(self):
        self.workspaces = {}
        self.spatial_anchors = defaultdict(list)
        self.virtual_displays = defaultdict(list)
        self.productivity_metrics = defaultdict(list)
        self.session_history = []
        
    def create_workspace(self, workspace_id: str, user_id: str, room_dimensions: Dict, 
                         device_type: str = 'hololens') -> Dict:
        """Create an AR workspace configuration"""
        workspace = {
            'workspace_id': workspace_id,
            'user_id': user_id,
            'room_dimensions': room_dimensions,  # {width, height, depth} in meters
            'device_type': device_type,
            'created_at': datetime.now().isoformat(),
            'status': 'active',
            'virtual_displays': [],
            'spatial_anchors': [],
            'lighting_profile': 'auto',
            'ergonomic_score': 0,
            'productivity_score': 0
        }
        self.workspaces[workspace_id] = workspace
        return {'success': True, 'workspace_id': workspace_id, 'message': f'AR workspace {workspace_id} created'}
    
    def add_virtual_display(self, workspace_id: str, display_config: Dict) -> Dict:
        """Add a virtual display to the AR workspace"""
        if workspace_id not in self.workspaces:
            return {'success': False, 'error': 'Workspace not found'}
        
        display = {
            'display_id': f"disp_{len(self.virtual_displays[workspace_id]) + 1}",
            'position': display_config.get('position', {'x': 0, 'y': 1.2, 'z': -1.0}),
            'rotation': display_config.get('rotation', {'pitch': 0, 'yaw': 0, 'roll': 0}),
            'size': display_config.get('size', {'width': 0.8, 'height': 0.5}),
            'resolution': display_config.get('resolution', '4K'),
            'content_type': display_config.get('content_type', 'desktop'),
            'opacity': display_config.get('opacity', 1.0),
            'curvature': display_config.get('curvature', 0)
        }
        
        self.virtual_displays[workspace_id].append(display)
        self.workspaces[workspace_id]['virtual_displays'].append(display['display_id'])
        
        return {
            'success': True,
            'display': display,
            'total_displays': len(self.virtual_displays[workspace_id])
        }
    
    def place_spatial_anchor(self, workspace_id: str, anchor_type: str, position: Dict, 
                             metadata: Dict = None) -> Dict:
        """Place a spatial anchor in the AR workspace"""
        if workspace_id not in self.workspaces:
            return {'success': False, 'error': 'Workspace not found'}
        
        anchor = {
            'anchor_id': hashlib.md5(f"{workspace_id}{position}{time.time()}".encode()).hexdigest()[:12],
            'type': anchor_type,  # 'pin', 'note', 'model', 'widget', 'bookmark'
            'position': position,
            'metadata': metadata or {},
            'created_at': datetime.now().isoformat(),
            'visibility': 'private'
        }
        
        self.spatial_anchors[workspace_id].append(anchor)
        self.workspaces[workspace_id]['spatial_anchors'].append(anchor['anchor_id'])
        
        return {'success': True, 'anchor': anchor}
    
    def calculate_ergonomic_score(self, workspace_id: str) -> Dict:
        """Calculate ergonomic score based on display placement and user posture"""
        if workspace_id not in self.workspaces:
            return {'success': False, 'error': 'Workspace not found'}
        
        displays = self.virtual_displays.get(workspace_id, [])
        if not displays:
            return {'success': True, 'ergonomic_score': 50, 'recommendations': ['Add virtual displays for proper assessment']}
        
        score = 100
        recommendations = []
        
        for display in displays:
            pos = display['position']
            
            # Check vertical position (ideal: eye level ±15°)
            if pos['y'] < 0.9:
                score -= 10
                recommendations.append(f'Display {display["display_id"]} too low - raise to eye level')
            elif pos['y'] > 1.5:
                score -= 10
                recommendations.append(f'Display {display["display_id"]} too high - lower to eye level')
            
            # Check distance (ideal: 0.5-1.5m)
            distance = math.sqrt(pos['x']**2 + pos['z']**2)
            if distance < 0.4:
                score -= 15
                recommendations.append(f'Display {display["display_id"]} too close - move to arm\'s length')
            elif distance > 2.0:
                score -= 10
                recommendations.append(f'Display {display["display_id"]} too far - bring closer')
            
            # Check display size
            size = display['size']
            if size['width'] < 0.3:
                score -= 5
                recommendations.append(f'Display {display["display_id"]} too small for comfortable reading')
        
        score = max(0, score)
        self.workspaces[workspace_id]['ergonomic_score'] = score
        
        return {
            'success': True,
            'ergonomic_score': score,
            'recommendations': recommendations,
            'displays_assessed': len(displays)
        }
    
    def track_productivity(self, workspace_id: str, session_data: Dict) -> Dict:
        """Track productivity metrics for AR workspace sessions"""
        if workspace_id not in self.workspaces:
            return {'success': False, 'error': 'Workspace not found'}
        
        metric = {
            'timestamp': datetime.now().isoformat(),
            'session_duration_min': session_data.get('duration', 0),
            'tasks_completed': session_data.get('tasks_completed', 0),
            'focus_time_min': session_data.get('focus_time', 0),
            'distractions': session_data.get('distractions', 0),
            'displays_used': session_data.get('displays_used', 1),
            'interaction_count': session_data.get('interactions', 0)
        }
        
        self.productivity_metrics[workspace_id].append(metric)
        
        # Calculate productivity score
        if metric['session_duration_min'] > 0:
            focus_ratio = metric['focus_time_min'] / metric['session_duration_min']
            task_rate = metric['tasks_completed'] / max(metric['session_duration_min'] / 60, 1)
            score = min(100, int(focus_ratio * 60 + task_rate * 10 + (1 - metric['distractions'] / 20) * 30))
        else:
            score = 0
        
        self.workspaces[workspace_id]['productivity_score'] = score
        
        return {
            'success': True,
            'productivity_score': score,
            'focus_ratio': round(focus_ratio, 2) if metric['session_duration_min'] > 0 else 0,
            'metric': metric
        }
    
    def optimize_layout(self, workspace_id: str, user_preferences: Dict = None) -> Dict:
        """Auto-optimize workspace layout based on usage patterns and preferences"""
        if workspace_id not in self.workspaces:
            return {'success': False, 'error': 'Workspace not found'}
        
        prefs = user_preferences or {}
        displays = self.virtual_displays.get(workspace_id, [])
        room = self.workspaces[workspace_id]['room_dimensions']
        
        optimized_displays = []
        
        # Optimal display arrangement
        primary_pos = {'x': 0, 'y': prefs.get('eye_height', 1.2), 'z': -0.8}
        secondary_left = {'x': -0.6, 'y': prefs.get('eye_height', 1.2), 'z': -0.6}
        secondary_right = {'x': 0.6, 'y': prefs.get('eye_height', 1.2), 'z': -0.6}
        
        positions = [primary_pos, secondary_left, secondary_right]
        
        for i, display in enumerate(displays):
            if i < len(positions):
                display['position'] = positions[i]
                display['rotation'] = {'pitch': 0, 'yaw': 15 if i > 0 else 0, 'roll': 0}
                if i == 1:
                    display['rotation']['yaw'] = -15
            optimized_displays.append(display)
        
        self.virtual_displays[workspace_id] = optimized_displays
        
        return {
            'success': True,
            'workspace_id': workspace_id,
            'optimized_displays': len(optimized_displays),
            'message': 'Workspace layout optimized for ergonomic comfort'
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive AR workspace report"""
        total_workspaces = len(self.workspaces)
        
        report = f"""
🕶️ AR WORKSPACE ASSISTANT REPORT (V886)
{'='*60}

WORKSPACE OVERVIEW:
- Total Workspaces: {total_workspaces}
- Active Sessions: {sum(1 for w in self.workspaces.values() if w['status'] == 'active')}
- Total Virtual Displays: {sum(len(d) for d in self.virtual_displays.values())}
- Total Spatial Anchors: {sum(len(a) for a in self.spatial_anchors.values())}

"""
        for ws_id, ws in self.workspaces.items():
            ergo = self.calculate_ergonomic_score(ws_id)
            report += f"""
  🖥️ Workspace: {ws_id}
    Device: {ws['device_type']}
    Displays: {len(self.virtual_displays.get(ws_id, []))}
    Ergonomic Score: {ergo['ergonomic_score']}/100
    Productivity Score: {ws['productivity_score']}/100
    Room: {ws['room_dimensions']['width']}m x {ws['room_dimensions']['depth']}m
"""
        
        report += f"""
RECOMMENDATIONS:
- {'✅ All workspaces ergonomically optimized' if all(w['ergonomic_score'] > 70 for w in self.workspaces.values()) else '⚠️ Some workspaces need ergonomic adjustment'}
- {'✅ High productivity scores' if all(w['productivity_score'] > 60 for w in self.workspaces.values()) else 'ℹ️ Productivity can be improved with layout optimization'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for AR workspace requests"""
    ar_keywords = ['ar workspace', 'augmented reality', 'virtual display', 'spatial anchor', 'hololens', 'mixed reality']
    optimize_keywords = ['optimize', 'ergonomic', 'layout', 'productivity', 'improve']
    
    has_ar = any(kw in email_text.lower() for kw in ar_keywords)
    has_optimize = any(kw in email_text.lower() for kw in optimize_keywords)
    
    analysis = {
        'email_type': 'ar_workspace',
        'ar_request': has_ar,
        'optimization_requested': has_optimize,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_ar and has_optimize:
        analysis['priority'] = 'high'
        analysis['action'] = 'create_and_optimize_ar_workspace'
    
    return analysis


if __name__ == '__main__':
    engine = ARWorkspaceEngine()
    
    # Create workspace
    engine.create_workspace('WS-001', 'user-alice', {'width': 4, 'height': 3, 'depth': 5}, 'hololens')
    engine.create_workspace('WS-002', 'user-bob', {'width': 3, 'height': 2.5, 'depth': 4}, 'quest-pro')
    
    # Add displays
    engine.add_virtual_display('WS-001', {'position': {'x': 0, 'y': 1.2, 'z': -0.8}, 'size': {'width': 0.8, 'height': 0.5}, 'content_type': 'code'})
    engine.add_virtual_display('WS-001', {'position': {'x': -0.7, 'y': 1.3, 'z': -0.5}, 'size': {'width': 0.6, 'height': 0.4}, 'content_type': 'documentation'})
    engine.add_virtual_display('WS-001', {'position': {'x': 0.7, 'y': 1.1, 'z': -0.5}, 'size': {'width': 0.6, 'height': 0.4}, 'content_type': 'video-call'})
    
    # Place anchors
    engine.place_spatial_anchor('WS-001', 'note', {'x': 1.5, 'y': 1.5, 'z': -2}, {'text': 'Stand up every 30 min'})
    
    # Track productivity
    engine.track_productivity('WS-001', {'duration': 120, 'tasks_completed': 8, 'focus_time': 95, 'distractions': 3, 'displays_used': 3, 'interactions': 150})
    
    # Optimize
    engine.optimize_layout('WS-001')
    
    print(engine.generate_report())
    
    test_email = "Set up an AR workspace with virtual displays and optimize the ergonomic layout for my HoloLens"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
