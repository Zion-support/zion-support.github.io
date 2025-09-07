import type { NextApiRequest, NextApiResponse } from 'next';
interface PasswordStrengthResult {
  password: string,
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong',
  score: number,
  feedback: string[],
  details: {
    length: number,
    hasUppercase: boolean,
    hasLowercase: boolean,
    hasNumbers: boolean,
    hasSymbols: boolean,
    hasCommonPatterns: boolean,
    entropy: number},
  suggestions: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PasswordStrengthResult | { error: string}>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { password } = req.body,

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Password is required' })
    }

    // Password analysis
    const length = $2;
    const hasUppercase = /[A-Z]/.test($2);
    const hasLowercase = /[a-z]/.test($2);
    const hasNumbers = /\d/.test($2);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test($2);
    // Check for common patterns
    const commonPatterns = $2;
    const hasCommonPatterns = $2;
    // Calculate entropy (simplified)
    const charsetSize = $2;
    const entropy = charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0,

    // Calculate score
    let score = $2;
    score += Math.min(length * 2, 20), // Length contribution (max 20)
    score += hasUppercase ? 10 : 0,
    score += hasLowercase ? 10 : 0,
    score += hasNumbers ? 10 : 0,
    score += hasSymbols ? 15 : 0,
    score += entropy > 50 ? 15 : 0, // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0, // Penalty for common patterns

    // Determine strength level
    let strength: PasswordStrengthResult['strength'],
    if (score < 30) strength = $2;
    else if (score < 50) strength = $2;
    else if (score < 70) strength = $2;
    else if (score < 90) strength = $2;
    else strength = $2;
    // Generate feedback
    const feedback: string[] = [],
    if (length < 8) feedback.push('Password is too short (minimum 8 characters)'),
    if (!hasUppercase) feedback.push($2);
    if (!hasLowercase) feedback.push($2);
    if (!hasNumbers) feedback.push($2);
    if (!hasSymbols) feedback.push($2);
    if (hasCommonPatterns) feedback.push($2);
    if (entropy < 30) feedback.push($2);
    // Generate suggestions
    const suggestions: string[] = [],
    if (score < 50) {
      suggestions.push($2);
      suggestions.push($2);
      suggestions.push('Avoid personal information and common words')
    }
    if (hasCommonPatterns) {
      suggestions.push($2);
      suggestions.push('Consider using a passphrase instead')
    }
    if (entropy < 40) {
      suggestions.push($2);
      suggestions.push('Consider using a password generator')
    }

    const result: PasswordStrengthResult = $2;
      strength,
      score: Math.max(0, Math.min(100, score)),
      feedback,
      details: {
        length,
        hasUppercase,
        hasLowercase,
        hasNumbers,
        hasSymbols,
        hasCommonPatterns,
        entropy: Math.round(entropy * 100) / 100},
      suggestions},

    res.status(200).json(result)
  } catch (error) {
    console.error($2);
    res.status(500).json({ error: 'Internal server error' })
  }
}