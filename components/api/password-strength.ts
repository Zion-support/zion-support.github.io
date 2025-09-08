<<<<<<< HEAD


=======



password.toLowerCase () .includes (pattern) );
origin/cursor/automate-test-improve-and-merge-code-2533
password.toLowerCase () .includes (pattern) );
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];

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
import type { NextApiRequest, NextApiResponse } from 'next';

// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';

// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface PasswordStrengthResult {
  password: string;
  strength: 'very - weak' | 'weak' | 'medium' | 'strong' | 'very - strong';
  score: number;
  feedback: string[];
  details: {
<<<<<<< HEAD


      

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    length: number, hasUppercase: boolean,
    hasLowercase: boolean, hasNumbers: boolean,
    hasSymbols: boolean, hasCommonPatterns: boolean,
    entropy: number
<<<<<<< HEAD

  
    },
    suggestions: string[]

=======
    },
    suggestions: string[]
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
        hasCommonPatterns;
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
        hasCommonPatterns;password.toLowerCase () .includes (pattern) )// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
<<<<<<< HEAD

=======
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];

if (score < 30) strength = 'very-weak';
else if (score < 50) strength = 'weak';
else if (score < 70) strength = 'medium';
else if (score < 90) strength = 'strong';


>>>>>>> origin/cursor/delete-old-data-records-6bba
    hasCommonPatterns: boolean
    entropy: number
  }
// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
interface PasswordStrengthResult {}
  password: string;'
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
else strength = 'very-strong;

// Generate suggestions import type { NextApiRequest, NextApiResponse } from next';
interface PasswordStrengthResult {}
  password: string;'
  strength: very-weak | 'weak' | medium | 'strong' | very-strong;
  score: number;
  feedback: string[];
  details: {}
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;

    hasCommonPatterns: boolean

    hasCommonPatterns: boolean;
origin/cursor/automate-test-improve-and-merge-code-2533
    entropy: number
    hasCommonPatterns: boolean;
    entropy: number;
  }
  suggestions: string[]

    hasCommonPatterns: boolean;
    entropy: number;
<<<<<<< HEAD

=======
else strength = 'very-strong';
// Generate feedback const feedback: string[] = [];

if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ');
if (!hasUppercase) feedback.push ('Add uppercase letters');
if (!hasLowercase) feedback.push ('Add lowercase letters');
if (!hasNumbers) feedback.push ('Add numbers');
if (!hasSymbols) feedback.push ('Add special characters');
if (hasCommonPatterns) feedback.push ('Avoid common patterns and words');
if (entropy < 30) feedback.push ('Password is too predictable');
>>>>>>> origin/cursor/delete-old-data-records-6bba

    hasCommonPatterns: boolean;
    entropy: number;
 
}
<<<<<<< HEAD


  suggestions: string[];

=======
export default async function handler() { return null; }
  suggestions: string[];
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

 
}
  "suggestions": string[];
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PasswordStrengthResult | { error: string}>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }


<<<<<<< HEAD
  try {
    const { password } = req.body,

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Password is required' })
    }

    // Password analysis
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<PasswordStrengthResult | { error: string }>
) {

=======
  try {}
    const { password } = req.body;
    if (!password || typeof password !== 'string') {}
      return res.status(400).json({ error: 'Password is required'}
});
    }
    // Password analysis;
const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(password);

    // Check for common patterns;
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

const hasCommonPatterns = commonPatterns.some(pattern =>;
      password.toLowerCase().includes(pattern))// Calculate entropy (simplified)const charsetSize =;
      (hasUppercase ? 26 : 0) +;
      (hasLowercase ? 26 : 0) +;
      (hasNumbers ? 10 : 0) +;
      (hasSymbols ? 32 : 0)const entropy =;
    return res.status(405).json({ error: 'Method not allowed });  }    return res.status(405).json({ error: Method not allowed' })
  }
  try {}


    let score = 0;
    score += Math.min(length * 2, 20); // Length contribution (max 20)
>>>>>>> origin/cursor/delete-old-data-records-6bba
    score += hasUppercase ? 10 : 0;
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
score += entropy > 50 ? 15 : 0; // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns
    // Determine strength level
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    let strength: PasswordStrengthResult['strength'];
    if (score < 30) strength = 'very-weak';
    else if (score < 50) strength = 'weak';
    else if (score < 70) strength = 'medium';
    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';
    // Generate feedback;
<<<<<<< HEAD


const feedback: string[] = [];
    if (length < 8)feedback.push('Password is too short (minimum 8 characters)')if (!hasUppercase) feedback.push('Add uppercase letters')if (!hasLowercase) feedback.push('Add lowercase letters')if (!hasNumbers) feedback.push('Add numbers')if (!hasSymbols) feedback.push('Add special characters')if (hasCommonPatterns) feedback.push('Avoid common patterns and words')if (entropy < 30) feedback.push('Password is too predictable')// Generate suggestions;

const suggestions: string[] = [];
    if (score < 50) {suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols';}
      )suggestions.push('Make it at least 12 characters long')suggestions.push('Avoid personal information and common words')}
    if (hasCommonPatterns) {suggestions.push('Replace common patterns with random characters')suggestions.push('Consider using a passphrase instead')}
    if (entropy < 40) {suggestions.push('Increase randomness by using more character types')suggestions.push('Consider using a password generator')}

const result: PasswordStrengthResult = {password;

=======
const feedback: string[] = [];
    if (length < 8)feedback.push('Password is too short (minimum 8 characters)')if (!hasUppercase) feedback.push('Add uppercase letters')if (!hasLowercase) feedback.push('Add lowercase letters')if (!hasNumbers) feedback.push('Add numbers')if (!hasSymbols) feedback.push('Add special characters')if (hasCommonPatterns) feedback.push('Avoid common patterns and words')if (entropy < 30) feedback.push('Password is too predictable')// Generate suggestions;
    const suggestions: string[] = [];
    if (score < 50) {suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols';
      )suggestions.push('Make it at least 12 characters long')suggestions.push('Avoid personal information and common words')}
    if (hasCommonPatterns) {suggestions.push('Replace common patterns with random characters')suggestions.push('Consider using a passphrase instead')}
    if (entropy < 40) {suggestions.push('Increase randomness by using more character types')suggestions.push('Consider using a password generator')}
    const result: PasswordStrengthResult = {password;
    if (entropy < 30) feedback.push('Password is too predictable');
    // Generate suggestions;
    const suggestions: string[] = []
    if (score < 50) {
suggestions.push(
        'Use a mix of uppercase, lowercase, numbers, and symbols'
      );'
      suggestions.push('Make it at least 12 characters long');'
      suggestions.push('Avoid personal information and common words');
    }
    if (hasCommonPatterns) {'
      suggestions.push('Replace common patterns with random characters');'
      suggestions.push('Consider using a passphrase instead');
    }
    if (entropy < 40) {'
      suggestions.push('Increase randomness by using more character types');'
      suggestions.push('Consider using a password generator');
    }
    const result: PasswordStrengthResult = {}
      password;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      strength;
      score: Math.max(0, Math.min(100, score))feedback;
      details: {length;
        hasUppercase;
        hasLowercase;
        hasNumbers;
        hasSymbols;
        hasCommonPatterns;}
        entropy: Math.round(entropy * 100) / 100;}
      }
      suggestions;
    }
<<<<<<< HEAD

    let strength: PasswordStrengthResult['strength'], if (score < 30) strength = 'very-weak',
    else if (score < 50) strength = 'weak';
    else if (score < 70) strength = 'medium';


=======
    res.status(200).json(result)} catch (error) {console.error('Password strength check error:', error)res.status(500).json({ error: 'Internal server error' })}
}
  }
    res.status(500).json({ error: 'Internal server error' })}
}
  }
}
    const length = $2;
    const hasUppercase = /[A-Z]/.test($2);
    const hasLowercase = /[a-z]/.test($2);
    const hasNumbers = /\d/.test($2);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{},':'\\|,.<>\/?]/.test($2);
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


    }
    const result: PasswordStrengthResult = {

      password,
      strength,



=======
      suggestions.push($2);
      suggestions.push('Avoid personal information and common words')
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    if (hasCommonPatterns) {
      suggestions.push($2);
      suggestions.push('Consider using a passphrase instead')
    }
    if (entropy < 40) {

<<<<<<< HEAD
}
  }
    res.status(500).json({ error: 'Internal server error' })
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533

"

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } catch (error) {
    console.error('Password strength check error:', error);}
    res.status(500).json({ error: 'Internal server error'}
});

  }
    res.status(500).json({ error: 'Internal server error' })
  }
}

<<<<<<< HEAD





=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
