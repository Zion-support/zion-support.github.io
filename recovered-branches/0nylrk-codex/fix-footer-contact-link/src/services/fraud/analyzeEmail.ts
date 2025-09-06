
<<<<<<< HEAD
// Email analysis functionality
import { suspiciousEmailDomains  } from './constants';
import { EmailAnalysisResult } from './types';
/**
 * Analyzes email for suspicious patterns
 */
<<<<<<< HEAD

export const analyzeEmail = (email: string): EmailAnalysisResult => {
=======
export const analyzeEmail = (email: string): EmailAnalysisResult => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
