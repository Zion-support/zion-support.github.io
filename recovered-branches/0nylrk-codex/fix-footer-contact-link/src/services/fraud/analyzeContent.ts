
// Content analysis functionality

/**
 * Analyzes text content for suspicious patterns
 */
export const _analyzeContent = (content: string): AnalysisResult => {_const _contentLower = content.toLowerCase();
  const reasons: string[] = [];
  
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
  }
  
  // Check for links (simplified check)
  const _hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (hasExternalLinks && (
    contentLower.includes('payment') || 
    contentLower.includes('money') || 
    contentLower.includes('deal')
  )) {_reasons.push('Contains external payment links');}
  
  // Check for excessive capitalization (potential scam)
  const _capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {_reasons.push('Excessive capitalization');}
  
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{_3}/.test(content)) {_reasons.push('Suspicious punctuation pattern');}
  
  return {_isSuspicious: reasons.length > 0, _reasons};
};
