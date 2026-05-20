#!/usr/bin/env python3
"""
ML Template Optimizer V21 — extracted from V22 inline class
"""
import json, math
from pathlib import Path
from collections import defaultdict

home = Path.home()
WORKSPACE = home / '.openclaw' / 'workspace'


class MLTemplateOptimizerV21:
    def __init__(self):
        self.ml_data_file = WORKSPACE / 'zion.app' / 'data' / 'ml_templates.json'
    def train_from_outcomes(self):
        outcomes_file = WORKSPACE / 'zion.app' / 'data' / 'response_outcomes.json'
        if not outcomes_file.exists(): return {}
        outcomes = json.loads(outcomes_file.read_text()).get('outcomes', [])
        tp = defaultdict(lambda: {'total': 0, 'successes': 0})
        for o in outcomes:
            t = o.get('template', 'default')
            tp[t]['total'] += 1
            if o.get('replied'): tp[t]['successes'] += 1
        model = {}
        for t, s in tp.items():
            rate = s['successes'] / s['total'] if s['total'] > 0 else 0.5
            model[t] = {'success_rate': rate, 'uses': s['total'], 'predicted_weight': rate * math.log(s['total'] + 1)}
        self.ml_data_file.write_text(json.dumps(model))
        return model
    def predict_best_template(self, intent, features):
        if self.ml_data_file.exists():
            model = json.loads(self.ml_data_file.read_text())
            it = {k: v for k, v in model.items() if intent in k.lower()}
            if it: return max(it.items(), key=lambda x: x[1]['predicted_weight'])[0]
        return f'{intent}_default'

