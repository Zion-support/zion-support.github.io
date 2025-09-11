 password.toLowerCase () .includes (pattern) );
password.toLowerCase () .includes (pattern) );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
// Check condition
if (strength = 'very - weak') {
  $2
}
else // Check condition
if (strength = 'weak') {
  $2
}
else // Check condition
if (strength = 'medium') {
  $2
}
else // Check condition
if (strength = 'strong') {
  $2
}
else strength = 'very - strong';
// Generate feedback const feedback: string[] = [];

if (feedback.push ('Password is too short (minimum 8 characters) ')) {
  $2
}
if (feedback.push ('Add uppercase letters')) {
  $2
}
if (feedback.push ('Add lowercase letters')) {
  $2
}
if (feedback.push ('Add numbers')) {
  $2
}
if (feedback.push ('Add special characters')) {
  $2
}
if (feedback.push ('Avoid common patterns and words')) {
  $2
}
if (feedback.push ('Password is too predictable')) {
  $2
}

// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';

=======
import type { NextApiRequest, NextApiResponse } from 'next';

interface PasswordStrengthResult {
  password: string;
  strength: 'very - weak' | 'weak' | 'medium' | 'strong' | 'very - strong';
  score: number;
  feedback: string[];
  details: {

      
    length: number, hasUppercase: boolean,
    hasLowercase: boolean, hasNumbers: boolean,
    hasSymbols: boolean, hasCommonPatterns: boolean,
    entropy: number
  
    },
    suggestions: string[]
}


    hasCommonPatterns: boolean
    entropy: number
  }
  suggestions: string[]
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<PasswordStrengthResult | { error: string }>
) {


  }
  try {
    const { password } = req && req.body;


    if (!password || typeof password !== 'string') {
      return res && res.status(400).json({ error: 'Password is required' });

    }
    // Password analysis

    const length = password && password.length;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);


    // Calculate score
    let score = 0;

    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns    const charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) +
                       (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0);

    // Calculate score
    let score = 0;
    score += Math && Math.min(length * 2, 20), // Length contribution (max 20)
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns

    // Determine strength level
    let strength: PasswordStrengthResult['strength'];
    if (score < 30) strength = 'very-weak';    else if (score < 50) strength = 'weak';    else if (score < 70) strength = 'medium';
    score += Math.min(length * 2, 20), // Length contribution (max 20)
    score += hasUppercase ? 10 : 0;
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0, // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0, // Penalty for common patterns
    // Determine strength level
    let strength: PasswordStrengthResult['strength'], if (score < 30) strength = 'very-weak',
    else if (score < 50) strength = 'weak';
    else if (score < 70) strength = 'medium';

    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';
    // Generate feedback


    // Generate suggestions
    const suggestions: string[] = []
    if (score < 50) {


    }
    const result: PasswordStrengthResult = {
      password
      strength
      score: Math.max(0, Math.min(100, score))
      feedback
      details: {
        length
        hasUppercase
        hasLowercase
        hasNumbers
        hasSymbols
        hasCommonPatterns
        entropy: Math.round(entropy * 100) / 100
      }
      suggestions
    }
    res.status(200).json(result);
  } catch (error) {
    console.error('Password strength check error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }      suggestions.push('Make it at least 12 characters long');
      suggestions.push('Avoid personal information and common words')
    }
    if (hasCommonPatterns) {
      suggestions && suggestions.push('Replace common patterns with random characters');
      suggestions && suggestions.push('Consider using a passphrase instead')
    }
    if (entropy < 40) {
      suggestions && suggestions.push('Increase randomness by using more character types');
      suggestions && suggestions.push('Consider using a password generator')
        entropy: Math.round (entropy * 100) / 100,
      },
      suggestions,
    }
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Password strength check error:', error);
    res.status (500).json ({ error: 'Internal server error' });
  }      suggestions.push ('Make it at least 12 characters long');
      suggestions.push ('Avoid personal information and common words');
    }
    // Check condition
if ( {) {
  $2
}
      suggestions.push ('Replace common patterns with random characters');
      suggestions.push ('Consider using a passphrase instead');
    }
    // Check condition
if ( {) {
  $2
}
      suggestions.push ('Increase randomness by using more character types');
      suggestions.push ('Consider using a password generator');
    }
    const result: PasswordStrengthResult = {
      password;
      strength;

      score: Math.max (0, Math.min (100, score));

      feedback;
      details: {
        length;
        has_uppercase;
        has_lowercase;
        has_numbers;
        has_symbols;
        hasCommonPatterns;

        entropy: Math && Math.round(entropy * 100) / 100};
      suggestions};
    res && res.status(200).json(result)
  } catch (error) {
    console && console.error('Password strength check error:', error);
    res && res.status(500).json({ error: 'Internal server error' })

  }

}

=======
        entropy: Math.round (entropy * 100) / 100}
      suggestions}
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Password strength check error:', error);
    res.status (500).json ({ error: 'Internal server error' });
      password.toLowerCase().includes(pattern)
    ),

    // Calculate entropy (simplified)
    const charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) + 
                       (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0),
    const entropy = charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0,

    // Calculate score
    let score = 0
    score += Math.min(length * 2, 20), // Length contribution (max 20)
    score += hasUppercase ? 10 : 0,
    score += hasLowercase ? 10 : 0,
    score += hasNumbers ? 10 : 0,
    score += hasSymbols ? 15 : 0,
    score += entropy > 50 ? 15 : 0, // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0, // Penalty for common patterns

    // Determine strength level
    let strength: PasswordStrengthResult['strength']
    if (score < 30) strength = 'very-weak',
    else if (score < 50) strength = 'weak',
    else if (score < 70) strength = 'medium',
    else if (score < 90) strength = 'strong',
    else strength = 'very-strong',

    // Generate feedback
    const feedback: string[] = []
    if (length < 8) feedback.push('Password is too short (minimum 8 characters)'),
    if (!hasUppercase) feedback.push('Add uppercase letters'),
    if (!hasLowercase) feedback.push('Add lowercase letters'),
    if (!hasNumbers) feedback.push('Add numbers'),
    if (!hasSymbols) feedback.push('Add special characters'),
    if (hasCommonPatterns) feedback.push('Avoid common patterns and words'),
    if (entropy < 30) feedback.push('Password is too predictable'),

    // Generate suggestions
    const suggestions: string[] = []
    if (score < 50) {
      suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols'),
      suggestions.push('Make it at least 12 characters long'),
      suggestions.push('Avoid personal information and common words')
    }
    if (hasCommonPatterns) {
      suggestions.push('Replace common patterns with random characters'),
      suggestions.push('Consider using a passphrase instead')
    }
    if (entropy < 40) {
      suggestions.push('Increase randomness by using more character types'),
      suggestions.push('Consider using a password generator')
    }

    const result: PasswordStrengthResult = {
      password,
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
    console.error('Password strength check error:', error),
    res.status(500).json({ error: 'Internal server error' })

=======
password.toLowerCase () .includes (pattern) );
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
if (score < 30) strength = 'very-weak';
else if (score < 50) strength = 'weak';
else if (score < 70) strength = 'medium';
else if (score < 90) strength = 'strong';
else strength = 'very-strong';
// Generate feedback const feedback: string[] = [];
if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ');
if (!hasUppercase) feedback.push ('Add uppercase letters');
if (!hasLowercase) feedback.push ('Add lowercase letters');
if (!hasNumbers) feedback.push ('Add numbers');
if (!hasSymbols) feedback.push ('Add special characters');
if (hasCommonPatterns) feedback.push ('Avoid common patterns and words');
if (entropy < 30) feedback.push ('Password is too predictable');
// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
interface PasswordStrengthResult {
  password: string;
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  score: number;
  feedback: string[];
  details: {
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;

    hasCommonPatterns: boolean

    entropy: number
  }
  suggestions: string[]
}
export default async function handler(

  req: NextApiRequest

  res: NextApiResponse<PasswordStrengthResult | { error: string }>
) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { password } = req.body;

    if (!password |typeof password !== 'string') {

      return res.status(400).json({ error: 'Password is required' });
    }
    // Password analysis

    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    // Check for common patterns
    const commonPatterns = [
      '123'
      'abc'
      'qwe'
      'password'
      'admin'
      'user'
      'test'
      '123456'
      'password123'
      'admin123'
      'qwerty'
      'asdf'
    ];
    const hasCommonPatterns = commonPatterns.some(pattern =>      password.toLowerCase().includes(pattern)
    );
    // Calculate entropy (simplified)    // Check for common patterns
    const commonPatterns = [
      '123abcqwepasswordadminusertest123456', 'password123admin123qwertyasdf'
    ];
    const hasCommonPatterns = commonPatterns.some(pattern =>
      password.toLowerCase().includes(pattern)
    );
    // Calculate entropy (simplified)
    const charsetSize =
      (hasUppercase ? 26 : 0) +
      (hasLowercase ? 26 : 0) +
      (hasNumbers ? 10 : 0) +
      (hasSymbols ? 32 : 0);
    const entropy =
      charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0;
    // Calculate score
    let score = 0;
    score += Math.min(length * 2, 20); // Length contribution (max 20)    score += hasUppercase ? 10 : 0;
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns    const charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) +
                       (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0);
    const entropy = charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0;
    // Calculate score
    let score = 0;
    score += Math.min(length * 2, 20), // Length contribution (max 20)
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns
    // Determine strength level
    let strength: PasswordStrengthResult['strength'];
    if (score < 30) strength = 'very-weak';    else if (score < 50) strength = 'weak';    else if (score < 70) strength = 'medium';
    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';
    // Generate feedback
    const feedback: string[] = [];
    if (length < 8)
      feedback.push('Password is too short (minimum 8 characters)');    if (!hasUppercase) feedback.push('Add uppercase letters');    if (length < 8) feedback.push('Password is too short (minimum 8 characters)');
    if (!hasUppercase) feedback.push('Add uppercase letters');
    if (!hasLowercase) feedback.push('Add lowercase letters');
    if (!hasNumbers) feedback.push('Add numbers');
    if (!hasSymbols) feedback.push('Add special characters');
    if (hasCommonPatterns) feedback.push('Avoid common patterns and words');
    if (entropy < 30) feedback.push('Password is too predictable');
    // Generate suggestions
    const suggestions: string[] = []
    if (score < 50) {
      suggestions.push(
        'Use a mix of uppercase, lowercase, numbers, and symbols'
      );
      suggestions.push('Make it at least 12 characters long');
      suggestions.push('Avoid personal information and common words');
    }
    if (hasCommonPatterns) {
      suggestions.push('Replace common patterns with random characters');
      suggestions.push('Consider using a passphrase instead');
    }
    if (entropy < 40) {
      suggestions.push('Increase randomness by using more character types');
      suggestions.push('Consider using a password generator');
    }
    const result: PasswordStrengthResult = {
      password
      strength
      score: Math.max(0, Math.min(100, score))
      feedback
      details: {
        length
        hasUppercase
        hasLowercase
        hasNumbers
        hasSymbols
        hasCommonPatterns
        entropy: Math.round(entropy * 100) / 100
      }
      suggestions
    }
    res.status(200).json(result);
  } catch (error) {
    console.error('Password strength check error:', error);
    res.status(500).json({ error: 'Internal server error' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
