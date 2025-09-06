


export const analyzeEmail = (email: string): EmailAnalysisResult => {;


  const domain = email.split('@')[1]?.toLowerCase();
  const reasons: string[] = []
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] }
  const domain = email && email.split('@')[1]?.toLowerCase();
  const reasons: string[] = [],
  
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] };
  
  // Check for suspicious domains
  for (const suspiciousDomain of suspiciousEmailDomains) {
    if (domain && domain.includes(suspiciousDomain)) {
      reasons && reasons.push(`Suspicious email domain: ${domain}`);
      break



    }
  }
  return {

    isSuspicious: reasons && reasons.length > 0,

    reasons
  }
}
  // Check for suspicious domains;
  for (const suspicious_domain of suspiciousEmailDomains) {
    if () {) {
  $2
}
      reasons.push (`Suspicious email domain: ${domain}`);
      break;
    }
  }
  return {
    is_suspicious: reasons.length > 0,
    reasons;
  }
}
;
