#!/usr/bin/env python3
"""
Predictive Timer V21 — extracted from V22 inline class
"""
import json
from pathlib import Path
from datetime import datetime, timezone, timedelta

home = Path.home()
WORKSPACE = home / '.openclaw' / 'workspace'


class PredictiveTimerV21:
    def __init__(self):
        self.timing_file = WORKSPACE / 'zion.app' / 'data' / 'response_timing.json'
    def predict_optimal_time(self, recipient_profile, urgency):
        tz = recipient_profile.get('timezone', -3)
        m = {'critical': 5, 'high': 30}
        if urgency in m: delay = m[urgency]
        else:
            now = datetime.now(timezone.utc); lh = (now.hour + tz + 24) % 24
            delay = 60 if 9 <= lh <= 17 else 420
        return (datetime.now(timezone.utc) + timedelta(minutes=delay)).isoformat()

# V11 modules we need (inline from V12)
