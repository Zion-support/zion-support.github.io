
// Content analysis functionality
<<<<<<< HEAD
import { suspiciousPhrases  } from './constants';
import { AnalysisResult } from './types';
=======
import { suspiciousPhrases } from './constants',
import { AnalysisResult } from './types',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Analyzes text content for suspicious patterns
 */
<<<<<<< HEAD
export const analyzeContent = (content: string): AnalysisResult => {;
  const contentLower = content.toLowerCase();
=======
export const analyzeContent = (content: string): AnalysisResult => {
<<<<<<< HEAD
  const contentLower = content.toLowerCase();
  const reasons: string[] = []
=======
  const contentLower = content.toLowerCase(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const reasons: string[] = [],
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
<<<<<<< HEAD
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (hasExternalLinks && (
    contentLower.includes('payment') |
    contentLower.includes('money') |
    contentLower.includes('deal')
  )) {
    reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) |[]).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push('Excessive capitalization')
=======
// Content analysis functionality;
import { suspiciousPhrases } from './constants',;
import { AnalysisResult } from './types',;
/**;
 * Analyzes text content for suspicious patterns;
 */;
export const analyzeContent = (content: string): AnalysisResult => {;
  const contentLower = content.toLowerCase(),;
  const reasons: string[] = [],;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    if (contentLower.includes(phrase.toLowerCase())) {;
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
  }
;
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
    contentLower.includes('payment') ||;
    contentLower.includes('money') ||;
    contentLower.includes('deal');
  )) {;
    reasons.push('Contains external payment links');
  }
;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
    reasons.push('Excessive capitalization');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons.push('Suspicious punctuation pattern')
  }
  return {
    isSuspicious: reasons.length > 0
    reasons
  }
<<<<<<< HEAD
}

=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
