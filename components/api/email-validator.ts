import type { NextApiRequest, NextApiResponse } from 'next';
interface EmailValidationResult {
  email: string,
  isValid: boolean,
  score: number,
  suggestions: string[],
  details: {
    hasValidFormat: boolean,
    hasValidDomain: boolean,
    hasValidMX: boolean,
    isDisposable: boolean,
    isRoleBased: boolean,
    isFreeProvider: boolean}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailValidationResult | { error: string}>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email } = req.body,

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' })
    }

    // Basic email format validation
    const emailRegex = $2;
    const hasValidFormat = emailRegex.test($2);
    // Extract domain
    const domain = $2;
    const hasValidDomain = $2;
    // Check for common disposable email providers
    const disposableDomains = $2;
    const isDisposable = $2;
    // Check for role-based emails
    const roleBasedPatterns = $2;
    const isRoleBased = $2;
    // Check for free email providers
    const freeProviders = $2;
    const isFreeProvider = freeProviders.some($2);
    // Calculate score (0-100)
    let score = $2;
    if (!hasValidFormat) score -= 50,
    if (!hasValidDomain) score -= 20,
    if (isDisposable) score -= 30,
    if (isRoleBased) score -= 15,
    if (isFreeProvider) score -= 10,

    // Generate suggestions
    const suggestions: string[] = [],
    if (!hasValidFormat) {
      suggestions.push('Check email format (should be user@domain.com)')
    }
    if (isDisposable) {
      suggestions.push('Consider using a permanent email address')
    }
    if (isRoleBased) {
      suggestions.push('Role-based emails may have delivery issues')
    }
    if (score < 50) {
      suggestions.push('This email may not be suitable for business use')
    }

    const result: EmailValidationResult = $2;
      isValid: score>= 70,
      score: Math.max($2);
      suggestions,
      details: {
        hasValidFormat,
        hasValidDomain,
        hasValidMX: true, // Simplified for demo
        isDisposable,
        isRoleBased,
        isFreeProvider}
    },

    res.status(200).json(result)
  } catch (error) {
    console.error($2);
    res.status(500).json({ error: 'Internal server error' })
  }
}