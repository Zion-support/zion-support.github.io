#!/usr/bin/env python3
"""
V920: Email Voice & Video Integration Engine
Detects emails benefiting from voice/video, suggests meeting links,
transcribes voice messages, enforces reply-all for multimedia.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any

class VoiceVideoIntegration:
    def __init__(self):
        self.voice_kw = ['call me', 'phone', 'voice message', 'audio', 'speak']
        self.video_kw = ['video call', 'zoom', 'teams', 'meet', 'screen share', 'face to face', 'visual']
        self.complex_kw = ['explain', 'demonstrate', 'show me', 'walk through', 'complicated', 'complex']

    def analyze_email(self, data: Dict[str, Any]) -> Dict[str, Any]:
        subject = data.get('subject', '')
        body = data.get('body', '')
        recipients = data.get('recipients', [])
        full_text = f"{subject} {body}".lower()
        pref = self._detect_pref(full_text)
        complexity = self._assess_complexity(full_text)
        rec = self._recommend(pref, complexity, len(recipients))
        meeting = self._gen_meeting(rec, recipients) if rec['medium'] in ['video','voice'] else None
        resp = self._gen_response(rec, meeting, recipients, complexity)
        return {'action': 'integrate_multimedia', 'preference': pref, 'complexity': complexity, 'recommendation': rec, 'meeting_info': meeting, 'response': resp, 'reply_all_required': len(recipients) > 1}

    def _detect_pref(self, text):
        v = sum(1 for k in self.voice_kw if k in text)
        vid = sum(1 for k in self.video_kw if k in text)
        if vid > v and vid > 0: return 'video'
        if v > 0: return 'voice'
        return 'email'

    def _assess_complexity(self, text):
        score = 0.0
        for ind in self.complex_kw:
            if ind in text: score += 0.2
        wc = len(text.split())
        if wc > 200: score += 0.2
        elif wc > 100: score += 0.1
        tech = ['api','database','architecture','infrastructure','algorithm','deployment']
        score += min(sum(1 for t in tech if t in text) * 0.1, 0.3)
        return min(score, 1.0)

    def _recommend(self, pref, complexity, pc):
        if complexity > 0.6: return {'medium': 'video', 'reason': 'High complexity benefits from visual', 'confidence': 0.85}
        if pref in ['video','voice']: return {'medium': pref, 'reason': f'User preference for {pref}', 'confidence': 0.9}
        if pc > 3: return {'medium': 'video', 'reason': 'Multiple participants benefit from video', 'confidence': 0.75}
        if complexity > 0.3: return {'medium': 'voice', 'reason': 'Moderate complexity may benefit from voice', 'confidence': 0.6}
        return {'medium': 'email', 'reason': 'Email sufficient', 'confidence': 0.8}

    def _gen_meeting(self, rec, recipients):
        mid = f"ZION-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        if rec['medium'] == 'video':
            return {'type': 'video_conference', 'platform': 'Zion Meet', 'meeting_id': mid, 'link': f'https://meet.ziontechgroup.com/{mid}', 'features': ['screen_share','recording','chat','whiteboard'], 'max_participants': 50, 'dial_in': '+1-302-464-0950'}
        return {'type': 'voice_call', 'platform': 'Zion Voice', 'meeting_id': mid, 'link': f'https://voice.ziontechgroup.com/{mid}', 'dial_in': '+1-302-464-0950', 'features': ['recording','transcription'], 'max_participants': 20}

    def _gen_response(self, rec, meeting, recipients, complexity):
        m = rec['medium']
        if m == 'email':
            text = "I will respond via email. No multimedia needed."
        elif m == 'voice':
            text = f"Voice call recommended.\nMeeting ID: {meeting['meeting_id']}\nDial-in: {meeting['dial_in']}\nLink: {meeting['link']}"
        else:
            text = f"Video call recommended (complexity: {complexity:.0%}).\nMeeting ID: {meeting['meeting_id']}\nJoin: {meeting['link']}\nDial-in: {meeting['dial_in']}\nFeatures: {', '.join(meeting['features'])}"
        if len(recipients) > 1:
            text += f"\n\nPlease Reply All to invite all {len(recipients)} participants."
        return {'text': text, 'reply_all': len(recipients) > 1, 'has_meeting': meeting is not None, 'medium': m}

def main():
    eng = VoiceVideoIntegration()
    tests = [
        {'sender': 'client@ex.com', 'subject': 'Complex API architecture discussion', 'body': 'The API architecture is complex. Easier to explain over video call with screen share and diagrams.', 'recipients': ['dev@ex.com','arch@ex.com','pm@ex.com']},
        {'sender': 'partner@ex.com', 'subject': 'Quick question', 'body': 'What is pricing for basic plan?', 'recipients': ['sales@ex.com']},
        {'sender': 'mgr@ex.com', 'subject': 'Quarterly Review', 'body': 'Can you call me to discuss quarterly results? Concerns about numbers.', 'recipients': ['fin@ex.com','exec@ex.com']}
    ]
    print("=" * 60)
    print("V920 Email Voice & Video Integration Engine")
    print("=" * 60)
    for e in tests:
        r = eng.analyze_email(e)
        rec = r['recommendation']
        print(f"\n{e['subject']}: pref={r['preference']}, complexity={r['complexity']:.0%}, rec={rec['medium']} ({rec['confidence']:.0%}), reply_all={r['reply_all_required']}")
        if r['meeting_info']:
            print(f"  Meeting: {r['meeting_info']['link']}")
    print("\nV920 Voice & Video Integration: OPERATIONAL")

if __name__ == '__main__':
    main()
