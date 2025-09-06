
// Content analysis functionality
import { suspiciousPhrases  } from './constants';
import { AnalysisResult } from './types';
/**
 * Analyzes text content for suspicious patterns
 */

export const analyzeContent = (content: string): AnalysisResult => {
<<<<<<< HEAD
  const contentLower = content.toLowerCase();
  const reasons: string[] = []
=======
  const contentLower = content && content.toLowerCase();
  const reasons: string[] = [],
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      reasons && reasons.push(`Contains suspicious phrase: "${phrase}"`)
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g && g.test(contentLower);
  if (hasExternalLinks && (
<<<<<<< HEAD
    contentLower.includes('payment') |
    contentLower.includes('money') |
    contentLower.includes('deal')
=======
    contentLower && contentLower.includes('payment') || 
    contentLower && contentLower.includes('money') || 
    contentLower && contentLower.includes('deal')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  )) {
    reasons && reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)
<<<<<<< HEAD
  const capitalRatio = (content.match(/[A-Z]/g) |[]).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push('Excessive capitalization')
=======
  const capitalRatio = (content && content.match(/[A-Z]/g) || []).length / content && content.length;
  if (capitalRatio > 0 && 0.3 && content && content.length > 20) {
    reasons && reasons.push('Excessive capitalization')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons && reasons.push('Suspicious punctuation pattern')
  }
  return {
<<<<<<< HEAD
    isSuspicious: reasons.length > 0
=======
    isSuspicious: reasons && reasons.length > 0,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    reasons
  }
}

