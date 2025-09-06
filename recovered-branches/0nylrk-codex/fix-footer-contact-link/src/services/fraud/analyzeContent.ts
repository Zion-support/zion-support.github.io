  const contentLower = content && content.toLowerCase();
  const reasons: string[] = [],
  
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      reasons && reasons.push(`Contains suspicious phrase: "${phrase}"`)
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g && g.test(contentLower);
  if (hasExternalLinks && (
    contentLower && contentLower.includes('payment') || 
    contentLower && contentLower.includes('money') || 
    contentLower && contentLower.includes('deal')
  )) {
    reasons && reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content && content.match(/[A-Z]/g) || []).length / content && content.length;
  if (capitalRatio > 0 && 0.3 && content && content.length > 20) {
    reasons && reasons.push('Excessive capitalization')
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons && reasons.push('Suspicious punctuation pattern')
  }
  return {
    isSuspicious: reasons && reasons.length > 0,
    reasons
  }
}

// Content analysis functionality;
import {suspicious_phrases} from './constants';
import {AnalysisResult} from './types';
/**;
* Analyzes text content for suspicious patterns;
*/;
export const analyze_content = (content: string): AnalysisResult => {
  const content_lower = content.toLowerCase ();
  const reasons: string[] = [],
  // Check for suspicious phrases;
  for (const phrase of suspicious_phrases) {
    if ()) {) {
  $2
}
      reasons.push (`Contains suspicious phrase: "${phrase}"`);
    }
  }
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test (content_lower);
  // Check condition
if (||) {
  $2
}
    content_lower.includes ('money') ||;
    content_lower.includes ('deal'))) {
    reasons.push ('Contains external payment links');
  }
  // Check for excessive capitalization (potential scam);
  const capital_ratio = (content.match (/[A - Z]/g) || []).length / content.length;
  // Check condition
if ( {) {
  $2
}
    reasons.push ('Excessive capitalization');
  }
  // Check for poor grammar with repetitive punctuation;
  if () {) {
  $2
}
    reasons.push ('Suspicious punctuation pattern');
  }
  return {
    is_suspicious: reasons.length > 0,
    reasons;
  }
}
;
