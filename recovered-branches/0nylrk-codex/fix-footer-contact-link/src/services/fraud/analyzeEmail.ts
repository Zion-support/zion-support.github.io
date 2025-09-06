
<<<<<<< HEAD
// Email analysis functionality
import { suspiciousEmailDomains  } from './constants';
import { EmailAnalysisResult } from './types';
/**
 * Analyzes email for suspicious patterns
 */

export const analyzeEmail = (email: string): EmailAnalysisResult => {
  const domain = email.split('@')[1]?.toLowerCase();
  const reasons: string[] = []
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] }
  // Check for suspicious domains
  for (const suspiciousDomain of suspiciousEmailDomains) {
    if (domain.includes(suspiciousDomain)) {
      reasons.push(`Suspicious email domain: ${domain}`);
      break
=======
// Email analysis functionality;
import { suspiciousEmailDomains } from './constants',;
import { EmailAnalysisResult } from './types',;
/**;
 * Analyzes email for suspicious patterns;
 */;
export const analyzeEmail = (email: string): EmailAnalysisResult => {;
  const domain = email.split('@')[1]?.toLowerCase(),;
  const reasons: string[] = [],;
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] },;
  // Check for suspicious domains;
  for (const suspiciousDomain of suspiciousEmailDomains) {;
    if (domain.includes(suspiciousDomain)) {;
      reasons.push(`Suspicious email domain: ${domain}`),;
      break;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
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
