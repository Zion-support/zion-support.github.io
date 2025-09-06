// Email analysis functionality
import { suspiciousEmailDomains } from './constants';
import { EmailAnalysisResult } from './types';

/**
 * Analyzes email for suspicious patterns
 */
export const analyzeEmail = (email: string): EmailAnalysisResult => {
  const domain = email.split('@')[1]?.toLowerCase();
  const reasons: string[] = [];

  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] };

  // Check for suspicious domains
  `);
      break;
    }
  }

  return {
    isSuspicious: reasons.length > 0,
    reasons,
  };
};
