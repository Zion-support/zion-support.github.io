<<<<<<< HEAD
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
=======
<<<<<<< HEAD

password.toLowerCase () .includes (pattern) );
// Calculate entropy (simplified) // Determine strength level let "strength": PasswordStrengthResult['strength'];'

<<<<<<< HEAD
if (score < 30) strength = 'very-weak';'
else if (score < 50) strength = 'weak';'
else if (score < 70) strength = 'medium';'
else if (score < 90) strength = 'strong';'
else strength = 'very-strong';'
// Generate feedback const "feedback": string[] = [];

=======
=======


password.toLowerCase () .includes (pattern) );
<<<<<<< HEAD
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
<<<<<<< HEAD
interface PasswordStrengthResult  {password: string;
  strength: 'very - weak' | 'weak' | 'medium' | 'strong' | 'very - strong';
  score: number;
  feedback: string[];
  details: {entropy: number;
  }
  suggestions: string[];
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
=======

// Generate suggestions import type { NextApiRequest, NextApiResponse } from 'next';

=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface PasswordStrengthResult {
  password: string;
  strength: 'very - weak' | 'weak' | 'medium' | 'strong' | 'very - strong';
  score: number;
  feedback: string[];
  details: {
<<<<<<< HEAD
=======

      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    length: number, hasUppercase: boolean,
    hasLowercase: boolean, hasNumbers: boolean,
    hasSymbols: boolean, hasCommonPatterns: boolean,
    entropy: number
<<<<<<< HEAD
    },
    suggestions: string[]
}
=======
  
    },
    suggestions: string[]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
if (score < 30) strength = 'very-weak';
else if (score < 50) strength = 'weak';
else if (score < 70) strength = 'medium';
else if (score < 90) strength = 'strong';
<<<<<<< HEAD
        hasCommonPatterns;'
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];'
if (score < 30) strength = 'very-weak';'
else if (score < 50) strength = 'weak';'
else if (score < 70) strength = 'medium';'
else if (score < 90) strength = 'strong';'
else strength = 'very-strong';
// Generate feedback const feedback: string[] = [];'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ');'
if (!hasUppercase) feedback.push ('Add uppercase letters');'
if (!hasLowercase) feedback.push ('Add lowercase letters');'
if (!hasNumbers) feedback.push ('Add numbers');'
if (!hasSymbols) feedback.push ('Add special characters');'
if (hasCommonPatterns) feedback.push ('Avoid common patterns and words');'
if (entropy < 30) feedback.push ('Password is too predictable');'
<<<<<<< HEAD

    "hasCommonPatterns": boolean;
    "entropy": number
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge

    hasCommonPatterns: boolean;
    entropy: number;
 
}
<<<<<<< HEAD
export default async function handler() { return null; }
=======
>>>>>>> origin/chore/fix-lint-and-merge
  suggestions: string[];
>>>>>>> merged-prs-20250907-203621
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
=======
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
<<<<<<< HEAD
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }    return res.status(405).json({ error: 'Method not allowed' })
=======
<<<<<<< HEAD
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
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
    const hasCommonPatterns = commonPatterns && commonPatterns.some(pattern => 
      password && password.toLowerCase().includes(pattern)
    );
    // Calculate entropy (simplified)
    const charsetSize =
      (hasUppercase ? 26 : 0) +
      (hasLowercase ? 26 : 0) +
      (hasNumbers ? 10 : 0) +
      (hasSymbols ? 32 : 0);
    const entropy =
      charsetSize > 0 ? Math && Math.log2(Math && Math.pow(charsetSize, length)) : 0;
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(password);
    // Check for common patterns
    const commonPatterns = [
      '123abcqwepasswordadminusertest123456', 'password123admin123qwertyasdf'
    ];
    const hasCommonPatterns = commonPatterns.some(pattern => 
      password.toLowerCase().includes(pattern)
    );
    // Calculate entropy (simplified)
    const charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) + 
                       (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0);
    const entropy = charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0;
    // Calculate score
    let score = 0;
    const entropy = charsetSize > 0 ? Math && Math.log2(Math && Math.pow(charsetSize, length)) : 0;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  req: NextApiRequest

  res: NextApiResponse<PasswordStrengthResult | { error: string }>
) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {}
    const { password } = req.body;
'
    if (!password |typeof password !== 'string') {}
'
      return res.status(400).json({ error: 'Password is required' });
    }
    // Password analysis;
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);'
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
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

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
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
    hasSymbols: boolean;hasCommonPatterns: boolean;
    hasCommonPatterns: boolean;entropy: number;
  }
  suggestions: string[];
}
return res.status(405).json({ "error": 'Method not allowed',;'
=======

  req: NextApiRequest;
  res: NextApiResponse<PasswordStrengthResult | { error: string }    />
) {
  if (req.method !== 'POST') {}
return res.status(405).json({ error: 'Method not allowed'}
>>>>>>> origin/chore/fix-lint-and-merge
});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

 
}
  "suggestions": string[];
}
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest,
  res: NextApiResponse<PasswordStrengthResult | { error: string}>
=======


export default async function handler(

  req: NextApiRequest

  res: NextApiResponse<PasswordStrengthResult | { error: string }>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

export default async function handler() {
  }
  if (req.method !== 'POST') {'
}
return res.status(405).json({ "error": 'Method not allowed',;'
});
  }
<<<<<<< HEAD
  try {
    }
    const { password } = req.body;
    if (!password || typeof password !== 'string') {'
}
return res.status(400).json({ "error": 'Password is required',;'
});
    }
    // Password analysis,
const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);"

<<<<<<< HEAD
    // Check for common patterns,
const commonPatterns = [;
      '123''
      'abc''
      'qwe''
      'password''
      'admin''
      'user''
      'test''
      '123456''
      'password123''
      'admin123''
      'qwerty''
      'asdf''

    ];
    const hasCommonPatterns = commonPatterns.some(pattern =>;
=======
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}:"\\|,.<>\/?]/.test(password);
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
>>>>>>> origin/chore/fix-lint-and-merge

    ];

const hasCommonPatterns = commonPatterns.some(pattern =>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      password.toLowerCase().includes(pattern))// Calculate entropy (simplified)const charsetSize =;
      (hasUppercase ? 26 : 0) +;
      (hasLowercase ? 26 : 0) +;
      (hasNumbers ? 10 : 0) +;
      (hasSymbols ? 32 : 0)const entropy =;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed });  }    return res.status(405).json({ error: Method not allowed' })
  }
  try {}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    // Calculate score;
    let score = 0;
    score += Math.min(length * 2, 20); // Length contribution (max 20)
=======
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns    const charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) +
                       (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    score += hasUppercase ? 10 : 0;
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
<<<<<<< HEAD
score += entropy > 50 ? 15 : 0; // High entropy bonus;
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns;
    // Determine strength level;
    let "strength": PasswordStrengthResult['strength'];'
    if (score < 30) strength = 'very-weak';'
    else if (score < 50) strength = 'weak';'
    else if (score < 70) strength = 'medium';'
    else if (score < 90) strength = 'strong';'
    else strength = 'very-strong';'
    // Generate feedback;

const "feedback": string[] = [];
    if (length < 8)feedback.push('Password is too short (minimum 8 characters)')if (!hasUppercase) feedback.push('Add uppercase letters')if (!hasLowercase) feedback.push('Add lowercase letters')if (!hasNumbers) feedback.push('Add numbers')if (!hasSymbols) feedback.push('Add special characters')if (hasCommonPatterns) feedback.push('Avoid common patterns and words')if (entropy < 30) feedback.push('Password is too predictable')// Generate suggestions;'

const "suggestions": string[] = [];
    if (score < 50) {suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols';'
      )suggestions.push('Make it at least 12 characters long')suggestions.push('Avoid personal information and common words')}'
    if (hasCommonPatterns) {suggestions.push('Replace common patterns with random characters')suggestions.push('Consider using a passphrase instead')}'
    if (entropy < 40) {suggestions.push('Increase randomness by using more character types')suggestions.push('Consider using a password generator')}'

const "result": PasswordStrengthResult = {password;
      }
=======
score += entropy > 50 ? 15 : 0; // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns
    // Determine strength level
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
>>>>>>> origin/chore/fix-lint-and-merge
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
=======

const feedback: string[] = [];
    if (length < 8)feedback.push('Password is too short (minimum 8 characters)')if (!hasUppercase) feedback.push('Add uppercase letters')if (!hasLowercase) feedback.push('Add lowercase letters')if (!hasNumbers) feedback.push('Add numbers')if (!hasSymbols) feedback.push('Add special characters')if (hasCommonPatterns) feedback.push('Avoid common patterns and words')if (entropy < 30) feedback.push('Password is too predictable')// Generate suggestions;

const suggestions: string[] = [];
    if (score < 50) {suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols';}
      )suggestions.push('Make it at least 12 characters long')suggestions.push('Avoid personal information and common words')}
    if (hasCommonPatterns) {suggestions.push('Replace common patterns with random characters')suggestions.push('Consider using a passphrase instead')}
    if (entropy < 40) {suggestions.push('Increase randomness by using more character types')suggestions.push('Consider using a password generator')}

const result: PasswordStrengthResult = {password;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    res.status(200).json(result)} catch (error) {console.error('Password strength check error:', error)res.status(500).json({ error: 'Internal server error' })}
}
  }}
    res.status(500).json({ error: 'Internal server error' })}
}
  }
}
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    let strength: PasswordStrengthResult['strength'],
    if (score < 30) strength = $2;
    else if (score < 50) strength = $2;
    else if (score < 70) strength = $2;
    else if (score < 90) strength = $2;
    else strength = $2;
=======
    let strength: PasswordStrengthResult['strength'], if (score < 30) strength = 'very-weak',
    else if (score < 50) strength = 'weak';
    else if (score < 70) strength = 'medium';

<<<<<<< HEAD
      password,
      strength,

    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';
    // Generate feedback
    const feedback: string[] = []; if (length < 8) feedback.push('Password is too short (minimum 8 characters)'),
    if (!hasUppercase) feedback.push('Add uppercase letters');
    if (!hasLowercase) feedback.push('Add lowercase letters');
    if (!hasNumbers) feedback.push('Add numbers');
    if (!hasSymbols) feedback.push('Add special characters');
    if (hasCommonPatterns) feedback.push('Avoid common patterns and words');
    if (entropy < 30) feedback.push('Password is too predictable');
      feedback && feedback.push('Password is too short (minimum 8 characters)');    if (!hasUppercase) feedback && feedback.push('Add uppercase letters');    if (length < 8) feedback && feedback.push('Password is too short (minimum 8 characters)');
    if (!hasUppercase) feedback && feedback.push('Add uppercase letters');
    if (!hasLowercase) feedback && feedback.push('Add lowercase letters');
    if (!hasNumbers) feedback && feedback.push('Add numbers');
    if (!hasSymbols) feedback && feedback.push('Add special characters');
    if (hasCommonPatterns) feedback && feedback.push('Avoid common patterns and words');
    if (entropy < 30) feedback && feedback.push('Password is too predictable');
    // Generate suggestions
    const suggestions: string[] = []
    if (score < 50) {
    has_uppercase: boolean;
    has_lowercase: boolean;
    has_numbers: boolean;
    has_symbols: boolean;
    hasCommonPatterns: boolean,
    entropy: number;
  }
  suggestions: string[];
}
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: 'Method not allowed' });  }    return res.status (405).json ({ error: 'Method not allowed' });
  }
  try {
    const { password } = req.body;
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: 'Password is required' });
    }
    // Password analysis;
    const length = password.length;
    const has_uppercase = /[A - Z]/.test (password);
    const has_lowercase = /[a - z]/.test (password);
    const has_numbers = /\d/.test (password);
    const has_symbols = /[!@#$%^&*()_+\-=\[\]{}':"\\|, .<>\/?]/.test (password);
;
    // Check for common patterns;
    const common_patterns = [;
      '123',
      'abc',
      'qwe',
      'password',
      'admin',
      'user',
      'test',
      '123456',
      'password123',
      'admin123',
      'qwerty',
      'asdf',
    ];
    const hasCommonPatterns = common_patterns.some (pattern =>      password.toLowerCase ().includes (pattern));
;
    // Calculate entropy (simplified)    // Check for common patterns;
    const common_patterns = [;
      '123abcqwepasswordadminusertest123456', 'password123admin123qwertyasdf';
    ];
    const hasCommonPatterns = common_patterns.some (pattern =>;
      password.toLowerCase ().includes (pattern));
;
    // Calculate entropy (simplified);
    const charset_size =;
      (has_uppercase ? 26 : 0) +;
      (has_lowercase ? 26 : 0) +;
      (has_numbers ? 10 : 0) +;
      (has_symbols ? 32 : 0);
    const entropy =;
      charset_size > 0 ? Math.log2 (Math.pow (charset_size, length)) : 0;
;
    // Calculate score;
    let score = 0;
    score += Math.min (length * 2, 20); // Length contribution (max 20)    score += has_uppercase ? 10 : 0;
    score += has_lowercase ? 10 : 0;
    score += has_numbers ? 10 : 0;
    score += has_symbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus;
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns    const charset_size = (has_uppercase ? 26 : 0) + (has_lowercase ? 26 : 0) +;
                      (has_numbers ? 10 : 0) + (has_symbols ? 32 : 0);
    const entropy = charset_size > 0 ? Math.log2 (Math.pow (charset_size, length)) : 0;
;
    // Calculate score;
    let score = 0;
    score += Math.min (length * 2, 20), // Length contribution (max 20);
    score += has_lowercase ? 10 : 0;
    score += has_numbers ? 10 : 0;
    score += has_symbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus;
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns;
    // Determine strength level;
    let strength: PasswordStrengthResult['strength'];
    // Check condition
if (strength = 'very - weak') {
  $2
}    else // Check condition
if (strength = 'weak') {
  $2
}    else // Check condition
if (strength = 'medium') {
  $2
}
    else // Check condition
if (strength = 'strong') {
  $2
}
    else strength = 'very - strong';
;
    // Generate feedback;
    const feedback: string[] = [];
    if (
      feedback.push ('Password is too short (minimum 8 characters)')) {
  $2
}    if (feedback.push ('Add uppercase letters')) {
  $2
}    if (feedback.push ('Password is too short (minimum 8 characters)')) {
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
    // Generate suggestions;
    const suggestions: string[] = [],
    // Check condition
if ( {) {
  $2
}
      suggestions.push (
        'Use a mix of uppercase, lowercase, numbers, and symbols');
      suggestions.push ('Make it at least 12 characters long');
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
      password,
      strength,
      score: Math.max (0, Math.min (100, score)),
      feedback,
      details: {
        length,
        has_uppercase,
        has_lowercase,
        has_numbers,
        has_symbols,
        hasCommonPatterns,
      suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols');
      suggestions.push('Make it at least 12 characters long');
      suggestions.push('Avoid personal information and common words')
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      suggestions.push($2);
      suggestions.push($2);
      suggestions.push('Avoid personal information and common words')
=======


    }
    const result: PasswordStrengthResult = {

      password,
      strength,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    if (hasCommonPatterns) {
      suggestions.push($2);
      suggestions.push('Consider using a passphrase instead')
    }
    if (entropy < 40) {
<<<<<<< HEAD
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
<<<<<<< HEAD
}
=======
}
  }
    res.status(500).json({ error: 'Internal server error' })
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533

"
=======

    res.status(200).json(result);
=======
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
<<<<<<< HEAD
      score: Math.max (0, Math.min (100, score));
=======

      score: Math.max (0, Math.min (100, score));

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      feedback;
      details: {
        length;
        has_uppercase;
        has_lowercase;
        has_numbers;
        has_symbols;
        hasCommonPatterns;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        entropy: Math && Math.round(entropy * 100) / 100};
      suggestions};
    res && res.status(200).json(result)
  } catch (error) {
    console && console.error('Password strength check error:', error);
    res && res.status(500).json({ error: 'Internal server error' })
<<<<<<< HEAD
  }
}
=======

  }

}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

 password.toLowerCase () .includes (pattern) );
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
  }      suggestions.push('Make it at least 12 characters long');
      suggestions.push('Avoid personal information and common words')
    }
    if (hasCommonPatterns) {
      suggestions.push('Replace common patterns with random characters');
      suggestions.push('Consider using a passphrase instead')
    }
    if (entropy < 40) {
      suggestions.push('Increase randomness by using more character types');
      suggestions.push('Consider using a password generator')
    }
    const result: PasswordStrengthResult = {
      password;
      strength;
      score: Math.max(0, Math.min(100, score));
      feedback;
      details: {
        length;
        hasUppercase;
        hasLowercase;
        hasNumbers;
        hasSymbols;
        hasCommonPatterns;
        entropy: Math.round(entropy * 100) / 100}
      suggestions}
    res.status(200).json(result)
  } catch (error) {
    console.error('Password strength check error:', error);

<<<<<<< HEAD
    res.status(200).json(result);
  } catch (error) {
    }
    console.error('Password strength check "error":', error);'
    res.status(500).json({ "error": 'Internal server error','
});

=======
    res.status(500).json({ error: 'Internal server error' })
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
    res.status(500).json({ "error": 'Internal server error' })'
  }
  }}
    res.status(500).json({ error: 'Internal server error' })}
}
<<<<<<< HEAD
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
    res.status(200).json(result);
  } catch (error) {'
    console.error('Password strength check error:', error);'
    res.status(500).json({ error: 'Internal server error' });
  }
    res.status(500).json({ error: 'Internal server error' })
  }
origin/cursor/automate-test-improve-and-merge-code-2533

"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } catch (error) {
    console.error('Password strength check error:', error);}
    res.status(500).json({ error: 'Internal server error'}
});

  }
    res.status(500).json({ error: 'Internal server error' })
  }
}

<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  }
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
