<<<<<<< HEAD
<<<<<<< HEAD


=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';

=======

 import type { NextApiRequest, NextApiResponse } from 'next';


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface EmailValidationResult {
  email: string;
  is_valid: boolean;
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
 import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface EmailValidationResult {
  email: string;
  isValid: boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
<<<<<<< HEAD



=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<EmailValidationResult | { error: string }>
) {
<<<<<<< HEAD


  }
  try {
    const { email } = req && req.body;


    if (!email || typeof email !== 'string') {
      return res && res.status(400).json({ error: 'Email is required' });

=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
try {
    const { email } = req && req.body;
    if (!email || typeof email !== 'string') {
      return res && res.status(400).json({ error: 'Email is required' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
<<<<<<< HEAD

    const hasValidFormat = emailRegex && emailRegex.test(email);


=======
    const hasValidFormat = emailRegex && emailRegex.test(email);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Extract domain
    const domain = email && email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers
    const disposableDomains = [
<<<<<<< HEAD


=======
      'tempmail.orgguerrillamail.commailinator.com10minutemail.comtemp-mail.orgsharklasers.comgetairmail.commailnesia.com'
    ];
    const isDisposable = disposableDomains.some(d => domain?.includes(d));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


    // Check for free email providers
    const freeProviders = [

=======
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    ];

    const isFreeProvider = freeProviders && freeProviders.some(provider => domain === provider);


=======
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    // Check for free email providers
    const freeProviders = [
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'
    ];
<<<<<<< HEAD
    const isFreeProvider = freeProviders && freeProviders.some(provider => domain === provider);
=======
    const isFreeProvider = freeProviders.some(provider => domain === provider);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


    }
    const result: EmailValidationResult = {

      email,

      details: {

=======
<<<<<<< HEAD
    is_disposable: boolean;
    isRoleBased: boolean,
    isFreeProvider: boolean;
  }
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
    const { email } = req.body;
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: 'Email is required' });
    }
    // Basic email format validation;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidFormat = email_regex.test (email);
;
    // Extract domain;
    const domain = email.split ('@')[1];
    const hasValidDomain = domain && domain.length > 0;
;
    // Check for common disposable email providers;
    const disposable_domains = [;
      'tempmail.org',
      'guerrillamail.com',
      'mailinator.com',
      '10minutemail.com',
      'temp - mail.org',
      'sharklasers.com',
      'getairmail.com',
      'mailnesia.com',    ];      'tempmail.orgguerrillamail.commailinator.com10minutemail.comtemp - mail.orgsharklasers.comgetairmail.commailnesia.com';
    ];
    const is_disposable = disposable_domains.some (d => domain?.includes (d));
;
    // Check for role - based emails;
    const roleBasedPatterns = [;
      'admin@',
      'info@',
      'support@',
      'contact@',
      'sales@',
      'help@',
      'noreply@',
      'no - reply@',
      'donotreply@',
      'do - not - reply@',
    ];
    const isRoleBased = roleBasedPatterns.some (pattern =>;
      email.starts_with (pattern));
;
    // Check for free email providers;
    const free_providers = [;
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'aol.com',
      'icloud.com',
      'protonmail.com',
      'mail.com',
      'yandex.com',    ];    ];
    const isRoleBased = roleBasedPatterns.some (pattern => email.starts_with (pattern));
;
    // Check for free email providers;
    const free_providers = [;
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com';
    ];
    const isFreeProvider = free_providers.some (provider => domain === provider);
;
    // Calculate score (0 - 100);
    let score = 100;
    // Check condition
if (score -= 50) {
  $2
}
    // Check condition
if (score -= 20) {
  $2
}
    // Check condition
if (score -= 30) {
  $2
}
    // Check condition
if (score -= 15) {
  $2
}
    // Check condition
if (score -= 10) {
  $2
}
    // Generate suggestions;
    const suggestions: string[] = [],
    // Check condition
if ( {) {
  $2
}
      suggestions.push ('Check email format (should be user@domain.com)');
    // Check condition
if ( {) {
  $2
}
      suggestions.push ('Consider using a permanent email address');
    }
    // Check condition
if ( {) {
  $2
}
      suggestions.push ('Role - based emails may have delivery issues');
    }
    // Check condition
if ( {) {
  $2
}
      suggestions.push ('This email may not be suitable for business use');
    }
    const result: EmailValidationResult = {
      email,
      is_valid: score >= 70,
      score: Math.max (0, score),
      suggestions,
      details: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        isDisposable,
        isRoleBased,
        isFreeProvider,
      },
    };
    res && res.status(200).json(result);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }      email;
      isValid: score >= 70;
      score: Math && Math.max(0, score);
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }      email;
      is_valid: score >= 70;
      score: Math.max (0, score);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    };
    res && res.status(200).json(result)
  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' })
<<<<<<< HEAD

  }

}

=======
=======
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Email validation error:', error);
    res.status (500).json ({ error: 'Internal server error' });

<<<<<<< HEAD
=======
    res.status(500).json({ error: 'Internal server error' })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
