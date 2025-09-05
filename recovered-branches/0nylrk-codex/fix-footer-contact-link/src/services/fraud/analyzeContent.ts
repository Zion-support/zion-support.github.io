
// Content analysis functionality
<<<<<<< HEAD
import { suspiciousPhrases } from './constants',
import { AnalysisResult } from './types',
/**
 * Analyzes text content for suspicious patterns
 */
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase(),
  const reasons: string[] = [],
=======

/**
 * Analyzes text content for suspicious patterns
 */
export const _analyzeContent = (content: string): AnalysisResult => {_const _contentLower = content.toLowerCase();
  const reasons: string[] = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
<<<<<<< HEAD
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
=======
      reasons.push(`Contains suspicious phrase: &quot;${phrase}&quot;`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }
  
  // Check for links (simplified check)
<<<<<<< HEAD
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),
=======
  const _hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  if (hasExternalLinks && (
    contentLower.includes('payment') || 
    contentLower.includes('money') || 
    contentLower.includes('deal')
<<<<<<< HEAD
  )) {
    reasons.push('Contains external payment links')
  }
  
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push('Excessive capitalization')
  }
  
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons.push('Suspicious punctuation pattern')
  }
  
  return {
    isSuspicious: reasons.length > 0,
    reasons
  }
},
=======
  )) {_reasons.push('Contains external payment links');}
  
  // Check for excessive capitalization (potential scam)
  const _capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {_reasons.push('Excessive capitalization');}
  
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{_3}/.test(content)) {_reasons.push('Suspicious punctuation pattern');}
  
  return {_isSuspicious: reasons.length > 0, _reasons};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
