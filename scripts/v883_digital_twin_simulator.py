#!/usr/bin/env python3
"""
V883: Digital Twin Simulator & Analyzer
Creates digital twins of physical systems for simulation, prediction, and optimization.
"""

import json
import math
import hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Optional

class DigitalTwinEngine:
    def __init__(self):
        self.twins = {}
        self.simulations = {}
        self.scenarios = {}
        self.predictions = []
        
    def create_twin(self, twin_id: str, system_type: str, parameters: Dict, initial_state: Dict) -> Dict:
        """Create a digital twin of a physical system"""
        twin = {
            'twin_id': twin_id,
            'system_type': system_type,
            'parameters': parameters,
            'state': initial_state,
            'history': [{'state': initial_state.copy(), 'timestamp': datetime.now().isoformat()}],
            'created_at': datetime.now().isoformat(),
            'sync_status': 'synchronized',
            'drift_score': 0.0
        }
        self.twins[twin_id] = twin
        return {'success': True, 'twin_id': twin_id, 'message': f'Digital twin {twin_id} created'}
    
    def sync_state(self, twin_id: str, real_state: Dict) -> Dict:
        """Synchronize digital twin with real-world state"""
        if twin_id not in self.twins:
            return {'success': False, 'error': 'Twin not found'}
        
        twin = self.twins[twin_id]
        old_state = twin['state'].copy()
        
        # Calculate drift between predicted and actual
        drift = 0
        for key in real_state:
            if key in old_state and isinstance(real_state[key], (int, float)):
                drift += abs(real_state[key] - old_state.get(key, 0))
        
        drift_score = drift / max(len(real_state), 1)
        
        twin['state'] = real_state
        twin['drift_score'] = drift_score
        twin['sync_status'] = 'synchronized' if drift_score < 10 else 'drifting'
        twin['history'].append({'state': real_state.copy(), 'timestamp': datetime.now().isoformat()})
        
        # Keep history manageable
        if len(twin['history']) > 100:
            twin['history'] = twin['history'][-100:]
        
        return {
            'success': True,
            'twin_id': twin_id,
            'drift_score': round(drift_score, 2),
            'sync_status': twin['sync_status']
        }
    
    def run_simulation(self, twin_id: str, scenario: str, duration_hours: float, time_step_minutes: int = 5) -> Dict:
        """Run a simulation scenario on the digital twin"""
        if twin_id not in self.twins:
            return {'success': False, 'error': 'Twin not found'}
        
        twin = self.twins[twin_id]
        state = twin['state'].copy()
        params = twin['parameters']
        
        simulation_id = f"sim_{twin_id}_{int(time.time())}"
        steps = int((duration_hours * 60) / time_step_minutes)
        timeline = []
        
        for step in range(steps):
            # Simulate state evolution based on system type
            new_state = self._evolve_state(state, params, twin['system_type'], scenario, step)
            timeline.append({
                'step': step,
                'time_offset_minutes': step * time_step_minutes,
                'state': new_state.copy()
            })
            state = new_state
        
        simulation = {
            'simulation_id': simulation_id,
            'twin_id': twin_id,
            'scenario': scenario,
            'duration_hours': duration_hours,
            'steps': steps,
            'timeline': timeline,
            'final_state': state,
            'created_at': datetime.now().isoformat()
        }
        
        self.simulations[simulation_id] = simulation
        
        return {
            'success': True,
            'simulation_id': simulation_id,
            'scenario': scenario,
            'final_state': state,
            'timeline_points': len(timeline)
        }
    
    def _evolve_state(self, state: Dict, params: Dict, system_type: str, scenario: str, step: int) -> Dict:
        """Evolve system state based on physics/rules"""
        new_state = state.copy()
        
        if system_type == 'hvac':
            # HVAC system simulation
            target_temp = params.get('target_temperature', 22)
            current_temp = new_state.get('temperature', 22)
            efficiency = params.get('efficiency', 0.85)
            
            # Scenario modifiers
            if scenario == 'heat_wave':
                external_temp = 38 + math.sin(step * 0.1) * 3
            elif scenario == 'cold_snap':
                external_temp = -5 + math.sin(step * 0.1) * 2
            else:
                external_temp = 25 + math.sin(step * 0.1) * 5
            
            # Temperature evolution
            cooling_effect = (target_temp - current_temp) * efficiency * 0.1
            heat_gain = (external_temp - current_temp) * 0.02
            new_state['temperature'] = current_temp + cooling_effect + heat_gain
            new_state['energy_consumption_kwh'] = abs(cooling_effect) * 2.5
            new_state['external_temperature'] = external_temp
            
        elif system_type == 'manufacturing_line':
            # Manufacturing line simulation
            throughput = params.get('max_throughput', 100)
            reliability = params.get('reliability', 0.95)
            
            if scenario == 'peak_demand':
                demand_factor = 1.3
            elif scenario == 'maintenance_window':
                demand_factor = 0.5
            else:
                demand_factor = 1.0
            
            new_state['output_units'] = int(throughput * demand_factor * reliability)
            new_state['defect_rate'] = max(0, 0.02 + (demand_factor - 1) * 0.05)
            new_state['machine_utilization'] = min(1.0, demand_factor * reliability)
            new_state['energy_kwh'] = new_state['output_units'] * 0.5
            
        elif system_type == 'building':
            # Building energy simulation
            occupancy = params.get('max_occupancy', 200)
            if scenario == 'full_occupancy':
                current_occupancy = occupancy
            elif scenario == 'weekend':
                current_occupancy = int(occupancy * 0.1)
            else:
                current_occupancy = int(occupancy * (0.5 + 0.5 * math.sin(step * 0.05)))
            
            new_state['occupancy'] = current_occupancy
            new_state['energy_kwh'] = 50 + current_occupancy * 0.3
            new_state['co2_ppm'] = 400 + current_occupancy * 2
            new_state['temperature'] = 22 + (current_occupancy / occupancy) * 2
        
        return new_state
    
    def predict_maintenance(self, twin_id: str) -> Dict:
        """Predict when maintenance will be needed"""
        if twin_id not in self.twins:
            return {'success': False, 'error': 'Twin not found'}
        
        twin = self.twins[twin_id]
        history = twin['history']
        
        # Analyze degradation trends
        if len(history) < 2:
            return {'success': True, 'prediction': 'Insufficient data for prediction'}
        
        drift_scores = []
        for entry in history[-20:]:
            state = entry.get('state', {})
            if 'energy_consumption_kwh' in state:
                drift_scores.append(state['energy_consumption_kwh'])
            elif 'energy_kwh' in state:
                drift_scores.append(state['energy_kwh'])
        
        if drift_scores:
            avg_consumption = sum(drift_scores) / len(drift_scores)
            trend = (drift_scores[-1] - drift_scores[0]) / max(len(drift_scores), 1)
            
            if trend > 0.5:
                days_to_maintenance = max(1, int(30 / trend))
                urgency = 'high' if days_to_maintenance < 7 else 'medium'
            else:
                days_to_maintenance = 90
                urgency = 'low'
        else:
            days_to_maintenance = 60
            urgency = 'low'
            trend = 0
        
        return {
            'success': True,
            'twin_id': twin_id,
            'estimated_days_to_maintenance': days_to_maintenance,
            'urgency': urgency,
            'degradation_trend': round(trend, 3),
            'recommendation': f'Schedule maintenance within {days_to_maintenance} days'
        }
    
    def compare_scenarios(self, twin_id: str, scenarios: List[str], duration_hours: float = 24) -> Dict:
        """Compare multiple simulation scenarios"""
        results = {}
        for scenario in scenarios:
            sim = self.run_simulation(twin_id, scenario, duration_hours)
            if sim.get('success'):
                final = sim['final_state']
                energy = final.get('energy_consumption_kwh', final.get('energy_kwh', 0))
                results[scenario] = {
                    'final_state': final,
                    'energy_consumption': round(energy, 2),
                    'simulation_id': sim['simulation_id']
                }
        
        # Find optimal scenario
        if results:
            optimal = min(results.keys(), key=lambda s: results[s]['energy_consumption'])
        else:
            optimal = None
        
        return {
            'success': True,
            'twin_id': twin_id,
            'scenarios_compared': results,
            'optimal_scenario': optimal,
            'scenarios_count': len(results)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive digital twin report"""
        report = f"""
🏗️ DIGITAL TWIN SIMULATION REPORT (V883)
{'='*60}

ACTIVE TWINS: {len(self.twins)}
SIMULATIONS RUN: {len(self.simulations)}

"""
        for twin_id, twin in self.twins.items():
            maintenance = self.predict_maintenance(twin_id)
            report += f"""
📦 Twin: {twin_id}
  Type: {twin['system_type']}
  Sync Status: {twin['sync_status']}
  Drift Score: {twin['drift_score']}
  History Points: {len(twin['history'])}
  Maintenance: {maintenance.get('recommendation', 'N/A')}
  Urgency: {maintenance.get('urgency', 'N/A')}
"""
        
        report += f"""
RECOMMENDATIONS:
- {'✅ All twins synchronized' if all(t['sync_status'] == 'synchronized' for t in self.twins.values()) else '⚠️ Some twins drifting'}
- {'✅ No urgent maintenance needed' if all(self.predict_maintenance(t)['urgency'] != 'high' for t in self.twins) else '⚠️ Urgent maintenance required'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for digital twin requests"""
    twin_keywords = ['digital twin', 'simulation', 'simulate', 'twin model', 'virtual replica']
    scenario_keywords = ['scenario', 'what if', 'what-if', 'compare', 'predict']
    maintenance_keywords = ['maintenance', 'predict', 'degradation', 'wear']
    
    has_twin = any(kw in email_text.lower() for kw in twin_keywords)
    has_scenario = any(kw in email_text.lower() for kw in scenario_keywords)
    has_maintenance = any(kw in email_text.lower() for kw in maintenance_keywords)
    
    analysis = {
        'email_type': 'digital_twin',
        'twin_request': has_twin,
        'scenario_comparison': has_scenario,
        'maintenance_prediction': has_maintenance,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_twin and has_scenario:
        analysis['priority'] = 'high'
        analysis['action'] = 'create_twin_and_run_scenarios'
    elif has_maintenance:
        analysis['action'] = 'predict_maintenance'
    
    return analysis


if __name__ == '__main__':
    import time
    engine = DigitalTwinEngine()
    
    # Create HVAC twin
    engine.create_twin('HVAC-Building-A', 'hvac', 
                       {'target_temperature': 22, 'efficiency': 0.85},
                       {'temperature': 24, 'energy_consumption_kwh': 0})
    
    # Create manufacturing twin
    engine.create_twin('Assembly-Line-1', 'manufacturing_line',
                       {'max_throughput': 500, 'reliability': 0.92},
                       {'output_units': 0, 'defect_rate': 0.02, 'machine_utilization': 0.8})
    
    # Run simulations
    engine.run_simulation('HVAC-Building-A', 'heat_wave', 24)
    engine.run_simulation('HVAC-Building-A', 'cold_snap', 24)
    
    # Compare scenarios
    comparison = engine.compare_scenarios('HVAC-Building-A', ['heat_wave', 'cold_snap', 'normal'])
    
    # Sync with real data
    engine.sync_state('HVAC-Building-A', {'temperature': 23.5, 'energy_consumption_kwh': 12.3})
    
    print(engine.generate_report())
    print(f"\nOptimal scenario: {comparison['optimal_scenario']}")
    
    test_email = "Create a digital twin for our HVAC system and run what-if scenarios for heat wave conditions"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
