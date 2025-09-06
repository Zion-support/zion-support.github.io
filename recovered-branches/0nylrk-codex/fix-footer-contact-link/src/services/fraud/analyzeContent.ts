
// Content analysis functionality

/**
 * Analyzes text content for suspicious patterns
 */

export const analyzeContent = (content: string): AnalysisResult => {

  const reasons: string[] = [],

  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)

  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons && reasons.push('Suspicious punctuation pattern')
  }
  return {

    isSuspicious: reasons && reasons.length > 0,

    reasons
  }

