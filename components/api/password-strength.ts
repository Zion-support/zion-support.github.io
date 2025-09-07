<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
password.toLowerCase () .includes (pattern) );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
// Check condition;
if (strength = 'very - weak') {$2;
}
else // Check condition;
if (strength = 'weak') {$2;
}
else // Check condition;
if (strength = 'medium') {$2;
}
else // Check condition;
if (strength = 'strong') {$2;
}
else strength = 'very - strong';
// Generate feedback const feedback: string[] = [];
interface PasswordStrengthResult  {password: string;
  strength: 'very - weak' | 'weak' | 'medium' | 'strong' | 'very - strong';
  score: number;
  feedback: string[];
  details: {entropy: number;
  }
  suggestions: string[];
}
export default async function handler(// Calculate score;
    let score = 0;
    score += Math && Math.min(length * 2, 20), // Length contribution (max 20)score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus;
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns;
    // Generate suggestions;
    const suggestions: string[] = [];
    if (score < 50) {password;
      strength;
      score: Math.max(0, Math.min(100, score))feedback;
      details: {length;
        hasUppercase;
        hasLowercase;
        hasNumbers;
        hasSymbols;
        hasCommonPatterns;
        entropy: Math.round(entropy * 100) / 100;
      }
      suggestions;
    }
    res.status(200).json(result)} catch (error) {console.error('Password strength check error:', error)res.status(500).json({ error: 'Internal server error' })}      suggestions.push('Make it at least 12 characters long')suggestions.push('Avoid personal information and common words')}
    if (hasCommonPatterns) {suggestions && suggestions.push('Replace common patterns with random characters')suggestions && suggestions.push('Consider using a passphrase instead')}
    if (entropy < 40) {suggestions && suggestions.push('Increase randomness by using more character types')suggestions && suggestions.push('Consider using a password generator')entropy: Math.round (entropy * 100) / 100,},suggestions,}res.status (200).json (result)} catch (error) {console.error ('Password strength check error:', error)res.status (500).json ({ error: 'Internal server error' })}      suggestions.push ('Make it at least 12 characters long')suggestions.push ('Avoid personal information and common words')}
    // Check condition;
if ( {) {$2;
}
      suggestions.push ('Replace common patterns with random characters')suggestions.push ('Consider using a passphrase instead')}
    // Check condition;
if ( {) {$2;
}
      suggestions.push ('Increase randomness by using more character types')suggestions.push ('Consider using a password generator')}
    const result: PasswordStrengthResult = {password;
      strength;
      feedback;
      details: {length;
        has_uppercase;
        has_lowercase;
        has_numbers;
        has_symbols;
<<<<<<< HEAD
<<<<<<< HEAD
        hasCommonPatterns;password.toLowerCase () .includes (pattern) )// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
        hasCommonPatterns;
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
        hasCommonPatterns;password.toLowerCase () .includes (pattern) )// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
if (score < 30) strength = 'very-weak';
else if (score < 50) strength = 'weak';
else if (score < 70) strength = 'medium';
else if (score < 90) strength = 'strong';
else strength = 'very-strong';
// Generate feedback const feedback: string[] = [];
<<<<<<< HEAD
<<<<<<< HEAD
if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ');
if (!hasUppercase) feedback.push ('Add uppercase letters');
if (!hasLowercase) feedback.push ('Add lowercase letters');
if (!hasNumbers) feedback.push ('Add numbers');
if (!hasSymbols) feedback.push ('Add special characters');
if (hasCommonPatterns) feedback.push ('Avoid common patterns and words');
if (entropy < 30) feedback.push ('Password is too predictable');
<<<<<<< HEAD
    hasCommonPatterns: boolean;
origin/cursor/automate-test-improve-and-merge-code-2533
    entropy: number
=======
if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ')if (!hasUppercase) feedback.push ('Add uppercase letters')if (!hasLowercase) feedback.push ('Add lowercase letters')if (!hasNumbers) feedback.push ('Add numbers')if (!hasSymbols) feedback.push ('Add special characters')if (hasCommonPatterns) feedback.push ('Avoid common patterns and words')if (entropy < 30) feedback.push ('Password is too predictable')// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
interface PasswordStrengthResult  {password: string;
=======
// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
interface PasswordStrengthResult {
  password: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ')if (!hasUppercase) feedback.push ('Add uppercase letters')if (!hasLowercase) feedback.push ('Add lowercase letters')if (!hasNumbers) feedback.push ('Add numbers')if (!hasSymbols) feedback.push ('Add special characters')if (hasCommonPatterns) feedback.push ('Avoid common patterns and words')if (entropy < 30) feedback.push ('Password is too predictable')// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
interface PasswordStrengthResult  {password: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  score: number;
  feedback: string[];
  details: {length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
    hasSymbols: boolean;hasCommonPatterns: boolean;
    hasCommonPatterns: boolean;entropy: number;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    hasSymbols: boolean;

    hasCommonPatterns: boolean

    entropy: number
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  }
  suggestions: string[];
}
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse<PasswordStrengthResult | { error: string }>
) {
  if (req.method !== 'POST') {
return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { password } = req.body;
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Password is required' });
    }
    // Password analysis
const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

origin/cursor/automate-test-improve-and-merge-code-2533
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
=======
=======
    hasSymbols: boolean;hasCommonPatterns: boolean;
    hasCommonPatterns: boolean;entropy: number;
  }
  suggestions: string[];
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export default async function handler() {if (req.method !== 'POST') {return res.status(405).json({ error: 'Method not allowed' })}    return res.status(405).json({ error: 'Method not allowed' })}
  try {const { password }  = req.body;if (!password |typeof password !== 'string') {return res.status(400).json({ error: 'Password is required' })}
    // Password analysis;
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password)const hasLowercase = /[a-z]/.test(password)const hasNumbers = /\d/.test(password)const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}':"\\|,.<>\/?]/.test(password)req: NextApiRequest;
  res: NextApiResponse<PasswordStrengthResult | { error: string }>;
) {if (req.method !== 'POST') {return res.status(405).json({ error: 'Method not allowed' })}
  try {const { password } = req.body;
    if (!password || typeof password !== 'string') {return res.status(400).json({ error: 'Password is required' })}
    // Password analysis;
const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}':"\\|,.<>\/?]/.test(password)// Check for common patterns;
    const commonPatterns = [;
      '123';
      'abc';
      'qwe';
      'password';
      'admin';
      'user';
      'test';
      '123456';
      'password123';
      'admin123';
      'qwerty';
      'asdf';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    ];
    const hasCommonPatterns = commonPatterns.some(pattern =>;
      password.toLowerCase().includes(pattern))// Calculate entropy (simplified)const charsetSize =;
      (hasUppercase ? 26 : 0) +;
      (hasLowercase ? 26 : 0) +;
      (hasNumbers ? 10 : 0) +;
      (hasSymbols ? 32 : 0)const entropy =;
      charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0;
    // Calculate score;
    let score = 0;
    score += Math.min(length * 2, 20)// Length contribution (max 20)score += hasUppercase ? 10 : 0;
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
score += entropy > 50 ? 15 : 0; // High entropy bonus;
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns;
    // Determine strength level;
    let strength: PasswordStrengthResult['strength'];
    if (score < 30) strength = 'very-weak';
    else if (score < 50) strength = 'weak';
    else if (score < 70) strength = 'medium';
    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';
    // Generate feedback;
const feedback: string[] = [];
    if (length < 8)feedback.push('Password is too short (minimum 8 characters)')if (!hasUppercase) feedback.push('Add uppercase letters')if (!hasLowercase) feedback.push('Add lowercase letters')if (!hasNumbers) feedback.push('Add numbers')if (!hasSymbols) feedback.push('Add special characters')if (hasCommonPatterns) feedback.push('Avoid common patterns and words')if (entropy < 30) feedback.push('Password is too predictable')// Generate suggestions;
    const suggestions: string[] = [];
    if (score < 50) {suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols';
      )suggestions.push('Make it at least 12 characters long')suggestions.push('Avoid personal information and common words')}
    if (hasCommonPatterns) {suggestions.push('Replace common patterns with random characters')suggestions.push('Consider using a passphrase instead')}
    if (entropy < 40) {suggestions.push('Increase randomness by using more character types')suggestions.push('Consider using a password generator')}
    const result: PasswordStrengthResult = {password;
      strength;
      score: Math.max(0, Math.min(100, score))feedback;
      details: {length;
        hasUppercase;
        hasLowercase;
        hasNumbers;
        hasSymbols;
        hasCommonPatterns;
        entropy: Math.round(entropy * 100) / 100;
      }
      suggestions;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json(result);
  } catch (error) {
    console.error('Password strength check error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
<<<<<<< HEAD
    res.status(500).json({ error: 'Internal server error' })
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    res.status(200).json(result)} catch (error) {console.error('Password strength check error:', error)res.status(500).json({ error: 'Internal server error' })}
}
  }}
    res.status(500).json({ error: 'Internal server error' })}
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
}
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
