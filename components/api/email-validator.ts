<<<<<<< HEAD


=======
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

  }
  try {}
    const { email } = req && req.body;
    // Extract domain;
    const domain = email && email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers;
    const disposableDomains = ['
      'tempmail && tempmail.org','
      'guerrillamail && guerrillamail.com','
      'mailinator && mailinator.com','
      '10minutemail && 10minutemail.com','
      'temp-mail && mail.org','
      'sharklasers && sharklasers.com','
      'getairmail && getairmail.com',

    isRoleBased: boolean;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    isFreeProvider: boolean;
  },
}


interface EmailValidationResult {
  email: string;
  is_valid: boolean;
import type { NextApiRequest, NextApiResponse } from 'next';
 import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface EmailValidationResult {
  email: string;
  isValid: boolean;
  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
<<<<<<< HEAD


=======
  }
  try {
    const { email } = req && req.body;

    if (!email |typeof email !== 'string') {

      return res.status(400).json({ error: 'Email is required' });
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidFormat = emailRegex.test(email);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Extract domain
    const domain = email && email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers
    const disposableDomains = [
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      'tempmail && tempmail.org',
      'guerrillamail && guerrillamail.com',
      'mailinator && mailinator.com',
      '10minutemail && 10minutemail.com',
      'temp-mail && mail.org',
      'sharklasers && sharklasers.com',
      'getairmail && getairmail.com',
<<<<<<< HEAD

      'mailnesia && mailnesia.com',    ];      'tempmail && tempmail.orgguerrillamail.commailinator && commailinator.com10minutemail.comtemp-mail && mail.orgsharklasers.comgetairmail && comgetairmail.commailnesia.com'
    ];
    const isDisposable = disposableDomains && disposableDomains.some(d => domain?.includes(d));
    // Check for role-based emails
    const roleBasedPatterns = [


=======
    // Calculate score (0-100)
    let score = 100;

interface EmailValidationResult  {email: string;
  is_valid: boolean;
interface EmailValidationResult  {email: string;
  isValid: boolean;
  score: number;
  suggestions: string[];
  details: {hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
  }
  try {const { email } = req && req.body;
    // Extract domain;
    const domain = email && email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers;
    const disposableDomains = [;
      'tempmail && tempmail.org','guerrillamail && guerrillamail.com','mailinator && mailinator.com','10minutemail && 10minutemail.com','temp-mail && mail.org','sharklasers && sharklasers.com','getairmail && getairmail.com',isRoleBased: boolean;
    isFreeProvider: boolean;
  }
}
export default async function handler() {if (req.method !== 'POST') {return res.status(405).json({ error: 'Method not allowed' })}
  try {const { email } = req.body;
    if (!email || typeof email !== 'string') {return res.status(400).json({ error: 'Email is required' })}
    // Basic email format validation;
'tempmail.org','guerrillamail.com','mailinator.com','10minutemail.com','temp-mail.org','sharklasers.com','getairmail.com','mailnesia.com',];
    const isDisposable = disposableDomains.some(d => domain?.includes(d))// Check for role-based emails;
    const roleBasedPatterns = [;
'admin@','info@','support@','contact@','sales@','help@','noreply@','no-reply@','donotreply@','do-not-reply@',];
    const isRoleBased = roleBasedPatterns.some(pattern =>;
      email.startsWith(pattern))// Check for free email providers;
    const freeProviders = [;
      'gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com','icloud.com','protonmail.com','mail.com','yandex.com',];
    const isFreeProvider  = freeProviders.some(provider => domain === provider)// Calculate score (0-100)let score = 100;
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }
    // Basic email format validation
'tempmail.org','
      'guerrillamail.com','
      'mailinator.com','
      '10minutemail.com','
      'temp-mail.org','
      'sharklasers.com','
      'getairmail.com','
      'mailnesia.com','
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ];

const isDisposable = disposableDomains.some(d => { return domain?.includes(d)); }
    // Check for role-based emails,
const roleBasedPatterns = [;
'admin@','
      'info@','
      'support@','
      'contact@','
      'sales@','
      'help@','
      'noreply@','
      'no-reply@','
      'donotreply@','
      'do-not-reply@','
    ];

const isRoleBased = roleBasedPatterns.some(pattern => { return email.startsWith(pattern)
    ); }
    // Check for free email providers,
const freeProviders = [;
      'gmail.com','
      'yahoo.com','
      'hotmail.com','
      'outlook.com','
      'aol.com','
      'icloud.com','
      'protonmail.com','
      'mail.com','
      'yandex.com','
    ];

<<<<<<< HEAD


=======
const isFreeProvider = freeProviders.some(provider => { return domain === provider); }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Calculate score (0-100)
    let score = 100;
    if (!hasValidFormat) score -= 50;
    if (!hasValidDomain) score -= 20;
    if (isDisposable) score -= 30;
    if (isRoleBased) score -= 15;
    if (isFreeProvider) score -= 10;
<<<<<<< HEAD

    // Generate suggestions
    const suggestions: string[] = []
    if (!hasValidFormat) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD
=======
    // Generate suggestions
    const suggestions: string[] = [],
    if (!hasValidFormat) {
      details: {
>>>>>>> origin/cursor/delete-old-data-records-6bba


  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }      email;
      isValid: score >= 70;
      score: Math && Math.max(0, score);
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      suggestions.push('Check email format (should be user@domain.com)')
    }
    if (isDisposable) {
      suggestions.push('Consider using a permanent email address);
    }
    if (isRoleBased) {
      suggestions.push(Role-based emails may have delivery issues');
    }
    if (score < 50) {
      suggestions.push('This email may not be suitable for business use')
    }

<<<<<<< HEAD
const result: EmailValidationResult = {
      email;
      isValid: score >= 70,
      score: Math.max(0, score);

=======

    const result: EmailValidationResult = {
      email,
      isValid: score >= 70,
      score: Math.max(0, score),
      suggestions,
      details: {
>>>>>>> origin/cursor/delete-old-data-records-6bba
        hasValidFormat,
        hasValidDomain,
        hasValidMX: true, // Simplified for demo;
        is_disposable,
        isRoleBased,
        isFreeProvider,
      },
    }
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Email validation error:', error);
    res.status (500).json ({ error: 'Internal server error' });
      suggestions.push('Check email format (should be user@domain.com)');
    if (isDisposable) {
      suggestions.push('Consider using a permanent email address');
    }
    if (isRoleBased) {
      suggestions.push('Role-based emails may have delivery issues');
    }
    if (score < 50) {
      suggestions.push('This email may not be suitable for business use');
    }
    const result: EmailValidationResult = {
      email
      isValid: score >= 70
      score: Math.max(0, score)
      suggestions
      details: {
        hasValidFormat
        hasValidDomain
        hasValidMX: true, // Simplified for demo
        isDisposable
        isRoleBased
        isFreeProvider
      }
    }
    res.status(200).json(result);
  } catch (error) {
    console.error('Email validation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }      email;
      is_valid: score >= 70;
      score: Math.max (0, score);
<<<<<<< HEAD




      suggestions;
      details: {
        hasValidFormat;
        hasValidDomain;
        hasValidMX: true, // Simplified for demo;
        is_disposable;
        isRoleBased;
        isFreeProvider}


    }
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Email validation error:', error);
    res.status (500).json ({ error: 'Internal server error' });

    res.status(500).json({ error: 'Internal server error' })
  }
}

isFreeProvider
      }
    }
    res.status(200).json(result);
  } catch (error) {
    console.error('Email validation error:', error);
    res.status(500).json({ error: 'Internal server error' });




=======

export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse<EmailValidationResult | { error: string }    />
) {
  if (req.method !== 'POST') {}
return res.status(405).json({ error: 'Method not allowed',}
});
  }
  try {}
    const { email } = req.body;

  }
    res.status(500).json({ error: 'Internal server error' })
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  },
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
