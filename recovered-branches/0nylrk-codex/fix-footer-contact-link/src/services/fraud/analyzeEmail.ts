

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




