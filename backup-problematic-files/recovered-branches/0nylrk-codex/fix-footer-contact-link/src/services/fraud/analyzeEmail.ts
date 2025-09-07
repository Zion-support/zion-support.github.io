
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Email analysis functionality;
import { suspiciousEmailDomains } from './constants';
import { EmailAnalysisResult } from './types';
;
/**;
 * Analyzes email for suspicious patterns;
 */;
export const analyzeEmail = (email:string):EmailAnalysisResult => {;
  const domain = email.split('@')[1]?.toLowerCase();
  const reasons:string[] = [];
  ;
  if (!domain) return { isSuspicious:true, reasons:['Invalid email format'] };
  ;
  // Check for suspicious domains;
  for (const suspiciousDomain of suspiciousEmailDomains) {;
    if (domain.includes(suspiciousDomain)) {;
      reasons.push(`Suspicious email domain:${domain}`);
      break;
    }
  }
  ;
  return {;
    isSuspicious:reasons.length > 0;
    reasons;
  };
}; // Email analysis functionality 
