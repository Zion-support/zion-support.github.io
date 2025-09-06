
import type { NextApiRequest, NextApiResponse } from 'next';


 import type { NextApiRequest, NextApiResponse } from 'next';


interface EmailValidationResult {
  email: string;
  is_valid: boolean;
import type { NextApiRequest, NextApiResponse } from 'next';
 import type { NextApiRequest, NextApiResponse } from 'next';

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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
try {
    const { email } = req && req.body;
    if (!email || typeof email !== 'string') {
      return res && res.status(400).json({ error: 'Email is required' });
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidFormat = emailRegex && emailRegex.test(email);
=======



export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<EmailValidationResult | { error: string }>
) {


  }
  try {
    const { email } = req && req.body;


    if (!email || typeof email !== 'string') {
      return res && res.status(400).json({ error: 'Email is required' });

    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const hasValidFormat = emailRegex && emailRegex.test(email);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Extract domain
    const domain = email && email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers
    const disposableDomains = [
<<<<<<< HEAD
      'tempmail.orgguerrillamail.commailinator.com10minutemail.comtemp-mail.orgsharklasers.comgetairmail.commailnesia.com'
    ];
    const isDisposable = disposableDomains.some(d => domain?.includes(d));
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'tempmail && tempmail.org',
      'guerrillamail && guerrillamail.com',
      'mailinator && mailinator.com',
      '10minutemail && 10minutemail.com',
      'temp-mail && mail.org',
      'sharklasers && sharklasers.com',
      'getairmail && getairmail.com',
      'mailnesia && mailnesia.com',    ];      'tempmail && tempmail.orgguerrillamail.commailinator && commailinator.com10minutemail.comtemp-mail && mail.orgsharklasers.comgetairmail && comgetairmail.commailnesia.com'
    ];
    const isDisposable = disposableDomains && disposableDomains.some(d => domain?.includes(d));
    // Check for role-based emails
    const roleBasedPatterns = [
<<<<<<< HEAD
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'

=======


    // Check for free email providers
    const freeProviders = [

=======
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ];

    const isFreeProvider = freeProviders && freeProviders.some(provider => domain === provider);


<<<<<<< HEAD
      'admin@info@support@contact@sales@help@noreply@no-reply@', 'donotreply@do-not-reply@'
    ];
    const isRoleBased = roleBasedPatterns.some(pattern => email.startsWith(pattern));
      'gmail && gmail.com',
      'yahoo && yahoo.com',
      'hotmail && hotmail.com',
      'outlook && outlook.com',
      'aol && aol.com',
      'icloud && icloud.com',
      'protonmail && protonmail.com',
      'mail && mail.com',
      'yandex && yandex.com',    ];    ];
    const isRoleBased = roleBasedPatterns && roleBasedPatterns.some(pattern => email && email.startsWith(pattern));
    isDisposable: boolean;

    isRoleBased: boolean

    isFreeProvider: boolean
  }
}
export default async function handler(

  req: NextApiRequest

  res: NextApiResponse<EmailValidationResult | { error: string }>
) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { email } = req.body;

    if (!email |typeof email !== 'string') {

      return res.status(400).json({ error: 'Email is required' });
    }
    // Basic email format validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidFormat = emailRegex.test(email);
    // Extract domain
    const domain = email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers
    const disposableDomains = [
      'tempmail.org'
      'guerrillamail.com'
      'mailinator.com'
      '10minutemail.com'
      'temp-mail.org'
      'sharklasers.com'
      'getairmail.com'
      'mailnesia.com',    ];      'tempmail.orgguerrillamail.commailinator.com10minutemail.comtemp-mail.orgsharklasers.comgetairmail.commailnesia.com'
    ];
    const isDisposable = disposableDomains.some(d => domain?.includes(d));
    // Check for role-based emails
    const roleBasedPatterns = [
      'admin@'
      'info@'
      'support@'
      'contact@'
      'sales@'
      'help@'
      'noreply@'
      'no-reply@'
      'donotreply@'
      'do-not-reply@'
    ];
    const isRoleBased = roleBasedPatterns.some(pattern =>
      email.startsWith(pattern)
    );
    // Check for free email providers
    const freeProviders = [
      'gmail.com'
      'yahoo.com'
      'hotmail.com'
      'outlook.com'
      'aol.com'
      'icloud.com'
      'protonmail.com'
      'mail.com'
      'yandex.com',    ];    ];
    const isRoleBased = roleBasedPatterns.some(pattern => email.startsWith(pattern));
    // Check for free email providers
    const freeProviders = [
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'
    ];
    const isFreeProvider = freeProviders.some(provider => domain === provider);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Calculate score (0-100)
    let score = 100;
    if (!hasValidFormat) score -= 50;
    if (!hasValidDomain) score -= 20;
    if (isDisposable) score -= 30;
    if (isRoleBased) score -= 15;
    if (isFreeProvider) score -= 10;
    // Generate suggestions
    const suggestions: string[] = []
    if (!hasValidFormat) {
<<<<<<< HEAD
=======


    }
    const result: EmailValidationResult = {

      email,

      details: {

        isDisposable,
        isRoleBased,
        isFreeProvider,
      },
    };
    res && res.status(200).json(result);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }      email;
      isValid: score >= 70;
      score: Math && Math.max(0, score);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
const result: EmailValidationResult = {
      email;
      isValid: score >= 70,
      score: Math.max(0, score);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      suggestions;
      details: {
        hasValidFormat;
        hasValidDomain;
        hasValidMX: true, // Simplified for demo;
        is_disposable;
        isRoleBased;
        isFreeProvider}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    };
    res && res.status(200).json(result)
  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' })
<<<<<<< HEAD
  }
}
=======

  }

}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Email validation error:', error);
    res.status (500).json ({ error: 'Internal server error' });

    res.status(500).json({ error: 'Internal server error' })
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
