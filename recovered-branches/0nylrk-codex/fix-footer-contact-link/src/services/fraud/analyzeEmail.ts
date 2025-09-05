
// Email analysis functionality

/**
 * Analyzes email for suspicious patterns
 */
export const _analyzeEmail = (email: string): EmailAnalysisResult => {_const _domain = email.split('@')[1]?.toLowerCase();
  const reasons: string[] = [];
  
  if (!domain) return { isSuspicious: true, _reasons: ['Invalid email format']};
  
  // Check for suspicious domains
  for (const suspiciousDomain of suspiciousEmailDomains) {_if (domain.includes(suspiciousDomain)) {
      reasons.push(`Suspicious email domain: ${domain}`);
      break;
    }
  }
  
  return {_isSuspicious: reasons.length > 0, _reasons};
};
