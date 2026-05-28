#!/usr/bin/env python3
"""
V30-PX: Sentiment Analyzer
Analyzes the sentiment of an email subject and body to determine if it's positive, negative, or neutral.
Helps in adjusting the response tone and priority.
"""

import re

# Simple lexicon-based sentiment analysis
# We'll use two small sets of positive and negative words for demonstration.
# In a real system, you might use a more comprehensive list or a library like VADER.

_POSITIVE_WORDS = {
    'good', 'great', 'excellent', 'happy', 'pleased', 'satisfied', 'thanks', 'thank you',
    'appreciate', 'awesome', 'fantastic', 'amazing', 'love', 'liked', 'helpful', 'thanks',
    'thankful', 'grateful', 'positive', 'win', 'success', 'effective', 'efficient'
}

_NEGATIVE_WORDS = {
    'bad', 'poor', 'terrible', 'awful', 'hate', 'disappointed', 'unsatisfied', 'angry',
    'frustrated', 'upset', 'annoyed', 'displeased', 'dislike', 'hated', 'horrible',
    'worst', 'fail', 'failure', 'problem', 'issue', 'broken', 'error', 'mistake',
    'complaint', 'angry', 'furious', 'irate'
}

def _clean_text(text):
    """Convert to lowercase and remove non-alphanumeric characters (except spaces)."""
    text = text.lower()
    # Keep letters, numbers, and spaces
    text = re.sub(r'[^a-z0-9\s]', ' ', text)
    return text

def _get_sentiment_score(text):
    """
    Calculate a simple sentiment score based on word matches.
    Returns a tuple (score, label) where score is a float between -1 and 1,
    and label is 'positive', 'negative', or 'neutral'.
    """
    words = _clean_text(text).split()
    if not words:
        return 0.0, 'neutral'
    
    pos_count = sum(1 for w in words if w in _POSITIVE_WORDS)
    neg_count = sum(1 for w in words if w in _NEGATIVE_WORDS)
    
    total = len(words)
    # Normalize by total words to get a score between -1 and 1
    score = (pos_count - neg_count) / total if total > 0 else 0.0
    
    if score > 0.1:
        label = 'positive'
    elif score < -0.1:
        label = 'negative'
    else:
        label = 'neutral'
    
    return score, label

def analyze_sentiment(email: dict) -> dict:
    """
    Analyze the sentiment of an email.
    
    Args:
        email: dict containing at least 'subject', 'snippet', and optionally 'body'
    
    Returns:
        dict: {
            'sentiment_score': float,  # between -1 and 1
            'sentiment_label': str,    # 'positive', 'negative', 'neutral'
            'confidence': float,       # confidence in the label (0 to 1)
            'details': dict            # additional info (e.g., word counts)
        }
    """
    subject = email.get('subject', '')
    snippet = email.get('snippet', '')
    body = email.get('body', '')
    
    # Combine subject, snippet, and body for analysis
    combined = f"{subject} {snippet} {body}"
    
    score, label = _get_sentiment_score(combined)
    
    # Confidence: we can define it as the absolute score scaled to 0-1, but with a minimum.
    # For simplicity, we'll use a fixed confidence based on the presence of sentiment words.
    words = _clean_text(combined).split()
    total_words = len(words)
    if total_words == 0:
        confidence = 0.0
    else:
        sentiment_word_count = sum(1 for w in words if w in _POSITIVE_WORDS or w in _NEGATIVE_WORDS)
        confidence = min(sentiment_word_count / total_words * 2, 1.0)  # scale so that if half are sentiment words, confidence=1
    
    return {
        'sentiment_score': score,
        'sentiment_label': label,
        'confidence': confidence,
        'details': {
            'subject': subject,
            'snippet': snippet,
            'body_length': len(body),
            'word_count': total_words
        }
    }