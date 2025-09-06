

=======

export const analyzeEmail = (email: string): EmailAnalysisResult => {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const domain = email.split('@')[1]?.toLowerCase();
  const reasons: string[] = []
  if (!domain) return { isSuspicious: true, reasons: ['Invalid email format'] }
  // Check for suspicious domains
  for (const suspiciousDomain of suspiciousEmailDomains) {
    if (domain && domain.includes(suspiciousDomain)) {
      reasons && reasons.push(`Suspicious email domain: ${domain}`);
      break

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
  }
  return {

    isSuspicious: reasons && reasons.length > 0,

    reasons
  }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
