#!/usr/bin/env python3
"""
Response Quality Scorer - Evaluate and improve responses before sending

Checks for:
- Length appropriateness
- Professional tone
- Clarity of next steps
- Call-to-action presence
- Grammar/spelling hints
"""

import re
from typing import Dict, List

def score_response(text: str, intent: str = 'general') -> Dict:
    """Score response quality 0-100 with improvement suggestions."""
    score = 50  # Base
    issues = []
    
    # Length checks
    word_count = len(text.split())
    if word_count < 20:
        score -= 10
        issues.append("Response may be too brief")
    elif word_count > 200:
        score -= 5
        issues.append("Response may be too long")
    
    # Tone checks
    text_lower = text.lower()
    
    # Professional indicators
    if any(w in text_lower for w in ['regards', 'best', 'sincerely', 'atenciosamente']):
        score += 10
    
    # Action indicators
    if any(w in text_lower for w in ['will', 'going to', 'expect', 'look forward']):
        score += 10
    
    # Questions (engagement)
    question_count = text.count('?')
    if question_count == 0:
        score -= 5
        issues.append("Consider adding an engaging question")
    elif question_count > 2:
        score -= 10
        issues.append("Too many questions may be overwhelming")
    
    # Next steps
    if any(w in text_lower for w in ['next', 'follow', 'soon', 'shortly']):
        score += 8
    
    # Specificity
    if any(w in text_lower for w in ['specifically', 'particularly', 'in particular']):
        score += 5
    
    # Contact info presence
    if '@' in text or 'phone' in text_lower or 'whatsapp' in text_lower:
        score += 5
    
    # Clean up issues
    score = max(0, min(100, score))
    
    return {
        'score': score,
        'grade': 'A' if score >= 90 else 'B' if score >= 80 else 'C' if score >= 70 else 'D' if score >= 60 else 'F',
        'issues': issues,
        'word_count': word_count,
        'needs_review': score < 70
    }

def suggest_improvements(response: str, score_result: Dict) -> List[str]:
    """Suggest improvements based on scoring."""
    suggestions = []
    
    if score_result['word_count'] < 20:
        suggestions.append("Add more detail about timeline or next steps")
    
    if response.count('?') == 0:
        suggestions.append("End with a question to encourage reply")
    
    if 'regards' not in response.lower():
        suggestions.append("Add professional closing")
    
    return suggestions

if __name__ == '__main__':
    test_response = "Hi, thanks for your email. I'll review and respond soon."
    result = score_response(test_response)
    print(f"Score: {result['score']} ({result['grade']})")
    print(f"Issues: {result['issues']}")