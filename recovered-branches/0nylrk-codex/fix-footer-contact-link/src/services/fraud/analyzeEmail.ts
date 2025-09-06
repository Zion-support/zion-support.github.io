
// Email analysis functionality
import { suspiciousEmailDomains  } from './constants';
import { EmailAnalysisResult } from './types';
/**
 * Analyzes email for suspicious patterns
 */

export const analyzeEmail = (email: string): EmailAnalysisResult => {
<<<<<<< HEAD
  const domain = email.split('@')[1]?.toLowerCase();
  const reasons: string[] = []
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] }
=======
  const domain = email && email.split('@')[1]?.toLowerCase();
  const reasons: string[] = [],
  
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] };
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Check for suspicious domains
  for (const suspiciousDomain of suspiciousEmailDomains) {
    if (domain && domain.includes(suspiciousDomain)) {
      reasons && reasons.push(`Suspicious email domain: ${domain}`);
      break
    }
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

