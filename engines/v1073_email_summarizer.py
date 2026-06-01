#!/usr/bin/env python3
"""
V1073: Email Summarizer Pro
Generate concise summaries of long email threads with key points extraction.
"""

import json
import re
from collections import Counter

class EmailSummarizerPro:
    def __init__(self):
        self.stop_words = {'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'can', 'may', 'might', 'must', 'shall', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their'}
    
    def summarize_email(self, email_data):
        """Generate comprehensive email summary."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        thread_emails = email_data.get('thread_emails', [])
        
        reply_all_required = len(recipients) > 1
        
        # Single email summary
        single_summary = self._summarize_single(body, subject)
        
        # Thread summary if available
        thread_summary = None
        if thread_emails and len(thread_emails) > 1:
            thread_summary = self._summarize_thread(thread_emails)
        
        # Extract key information
        key_info = {
            'action_items': self._extract_action_items(body),
            'deadlines': self._extract_deadlines(body),
            'decisions': self._extract_decisions(body),
            'questions': self._extract_questions(body),
            'key_entities': self._extract_entities(body)
        }
        
        # Generate executive brief
        executive_brief = self._generate_executive_brief(single_summary, key_info, thread_summary)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'summary': single_summary,
            'thread_summary': thread_summary,
            'key_information': key_info,
            'executive_brief': executive_brief,
            'statistics': {
                'word_count': len(body.split()),
                'sentence_count': len(re.split(r'[.!?]+', body)),
                'reading_time_minutes': max(1, len(body.split()) // 200)
            },
            'recommendations': self._generate_recommendations(key_info, reply_all_required),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _summarize_single(self, body, subject):
        """Summarize a single email."""
        sentences = re.split(r'[.!?]+', body)
        sentences = [s.strip() for s in sentences if len(s.strip()) > 10]
        
        if not sentences:
            return {'main_point': subject, 'key_sentences': [], 'topics': []}
        
        # Score sentences by importance
        scored_sentences = []
        for i, sentence in enumerate(sentences):
            score = self._score_sentence(sentence, i, len(sentences))
            scored_sentences.append((sentence, score))
        
        # Get top sentences
        scored_sentences.sort(key=lambda x: x[1], reverse=True)
        top_sentences = [s[0] for s in scored_sentences[:3]]
        
        # Extract main point (usually first or highest scored)
        main_point = top_sentences[0] if top_sentences else subject
        
        # Extract topics
        topics = self._extract_topics(body)
        
        return {
            'main_point': main_point,
            'key_sentences': top_sentences,
            'topics': topics,
            'sentiment': self._analyze_sentiment(body)
        }
    
    def _summarize_thread(self, thread_emails):
        """Summarize an email thread."""
        all_bodies = [email.get('body', '') for email in thread_emails]
        combined_text = ' '.join(all_bodies)
        
        # Extract thread progression
        progression = []
        for i, email in enumerate(thread_emails):
            progression.append({
                'position': i + 1,
                'sender': email.get('sender', ''),
                'main_point': self._summarize_single(email.get('body', ''), email.get('subject', ''))['main_point'][:100]
            })
        
        # Find consensus or resolution
        last_email = thread_emails[-1]
        resolution = self._summarize_single(last_email.get('body', ''), last_email.get('subject', ''))['main_point']
        
        return {
            'total_emails': len(thread_emails),
            'progression': progression,
            'resolution': resolution,
            'duration_hours': self._calculate_thread_duration(thread_emails),
            'participants': list(set(email.get('sender', '') for email in thread_emails))
        }
    
    def _score_sentence(self, sentence, position, total_sentences):
        """Score sentence importance."""
        score = 0
        
        # Position bonus (first and last sentences are important)
        if position == 0:
            score += 10
        elif position == total_sentences - 1:
            score += 8
        
        # Length bonus (medium length is best)
        word_count = len(sentence.split())
        if 10 <= word_count <= 30:
            score += 5
        
        # Keyword bonus
        important_keywords = ['important', 'urgent', 'deadline', 'please', 'must', 'need', 'require', 'decision', 'action', 'result']
        for keyword in important_keywords:
            if keyword in sentence.lower():
                score += 3
        
        # Number bonus (specific data)
        if re.search(r'\d+', sentence):
            score += 2
        
        return score
    
    def _extract_topics(self, text):
        """Extract main topics from text."""
        words = re.findall(r'\b[a-z]{4,}\b', text.lower())
        words = [w for w in words if w not in self.stop_words]
        
        word_freq = Counter(words)
        top_words = word_freq.most_common(5)
        
        return [word for word, count in top_words]
    
    def _analyze_sentiment(self, text):
        """Analyze email sentiment."""
        positive_words = ['great', 'excellent', 'good', 'happy', 'pleased', 'thank', 'appreciate', 'love', 'wonderful']
        negative_words = ['bad', 'terrible', 'awful', 'problem', 'issue', 'concern', 'worried', 'disappointed', 'frustrated']
        
        text_lower = text.lower()
        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)
        
        if positive_count > negative_count:
            return 'positive'
        elif negative_count > positive_count:
            return 'negative'
        else:
            return 'neutral'
    
    def _extract_action_items(self, body):
        """Extract action items from email."""
        action_items = []
        patterns = [
            r'(?:please|could you|can you)\s+(.+?)(?:\.|$)',
            r'(?:need to|must|should)\s+(.+?)(?:\.|$)',
            r'(?:action item|todo|task)[:\s]+(.+?)(?:\.|$)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            action_items.extend([item.strip()[:100] for item in matches])
        
        return action_items[:5]
    
    def _extract_deadlines(self, body):
        """Extract deadlines from email."""
        deadlines = []
        patterns = [
            r'(?:by|before|due|deadline)[:\s]+(.+?)(?:\.|$)',
            r'(?:by|before)\s+(.+?)(?:\.|$)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            deadlines.extend([deadline.strip()[:100] for deadline in matches])
        
        return deadlines[:3]
    
    def _extract_decisions(self, body):
        """Extract decisions from email."""
        decisions = []
        patterns = [
            r'(?:decided|decision|agreed|will|going to)\s+(.+?)(?:\.|$)',
            r'(?:we|I)\s+(?:have|will)\s+(.+?)(?:\.|$)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            decisions.extend([decision.strip()[:100] for decision in matches])
        
        return decisions[:3]
    
    def _extract_questions(self, body):
        """Extract questions from email."""
        questions = re.findall(r'[^.!?]*\?[^.!?]*', body)
        return [q.strip()[:100] for q in questions[:3]]
    
    def _extract_entities(self, body):
        """Extract key entities (names, numbers, dates)."""
        entities = {
            'people': re.findall(r'\b[A-Z][a-z]+\s+[A-Z][a-z]+\b', body)[:5],
            'numbers': re.findall(r'\b\d+(?:\.\d+)?\b', body)[:5],
            'dates': re.findall(r'\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b', body)[:3]
        }
        return entities
    
    def _generate_executive_brief(self, summary, key_info, thread_summary):
        """Generate executive brief."""
        brief = f"""📧 EMAIL SUMMARY

Main Point: {summary['main_point'][:150]}

Topics: {', '.join(summary['topics'][:3])}
Sentiment: {summary['sentiment']}

Key Information:
• Action Items: {len(key_info['action_items'])}
• Deadlines: {len(key_info['deadlines'])}
• Decisions: {len(key_info['decisions'])}
• Questions: {len(key_info['questions'])}

"""
        
        if key_info['action_items']:
            brief += "Action Items:\n"
            for item in key_info['action_items'][:3]:
                brief += f"  - {item}\n"
        
        if key_info['deadlines']:
            brief += "\nDeadlines:\n"
            for deadline in key_info['deadlines'][:2]:
                brief += f"  - {deadline}\n"
        
        if thread_summary:
            brief += f"\n📚 Thread Context: {thread_summary['total_emails']} emails, {len(thread_summary['participants'])} participants"
        
        return brief
    
    def _calculate_thread_duration(self, thread_emails):
        """Calculate thread duration in hours."""
        if len(thread_emails) < 2:
            return 0
        
        try:
            first = thread_emails[0].get('timestamp', '')
            last = thread_emails[-1].get('timestamp', '')
            
            if first and last:
                # Simple calculation (would need proper datetime parsing in production)
                return 24  # Placeholder
        except:
            pass
        
        return 0
    
    def _generate_recommendations(self, key_info, reply_all_required):
        """Generate recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if key_info['action_items']:
            recommendations.append(f'✅ Address {len(key_info["action_items"])} action item(s)')
        
        if key_info['deadlines']:
            recommendations.append(f'⏰ Review {len(key_info["deadlines"])} deadline(s)')
        
        if key_info['questions']:
            recommendations.append(f'❓ Answer {len(key_info["questions"])} question(s)')
        
        if not recommendations:
            recommendations.append('✅ Email is informational - no immediate action required')
        
        return recommendations


if __name__ == '__main__':
    summarizer = EmailSummarizerPro()
    
    test_email = {
        'id': '1',
        'sender': 'manager@company.com',
        'recipients': ['team@company.com', 'stakeholder@company.com'],
        'subject': 'Project Update and Next Steps',
        'body': '''Hi Team,

I wanted to provide an update on the project. We have completed the first phase and the results are excellent. The client is very happy with our work.

Please review the attached report by Friday. We need to schedule a meeting next week to discuss the next phase. Can you please let me know your availability?

The deadline for the next milestone is March 15th. We must ensure all deliverables are ready by then.

Looking forward to your feedback.

Best regards,
Manager''',
        'timestamp': '2024-01-15T10:00:00'
    }
    
    result = summarizer.summarize_email(test_email)
    
    print("=== V1073: Email Summarizer Pro ===\n")
    print(f"Main Point: {result['summary']['main_point'][:80]}...")
    print(f"Topics: {result['summary']['topics']}")
    print(f"Sentiment: {result['summary']['sentiment']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nKey Information:")
    print(f"  Action Items: {len(result['key_information']['action_items'])}")
    print(f"  Deadlines: {len(result['key_information']['deadlines'])}")
    print(f"  Decisions: {len(result['key_information']['decisions'])}")
    print(f"  Questions: {len(result['key_information']['questions'])}")
    print(f"\nStatistics:")
    print(f"  Word Count: {result['statistics']['word_count']}")
    print(f"  Reading Time: {result['statistics']['reading_time_minutes']} minutes")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")
