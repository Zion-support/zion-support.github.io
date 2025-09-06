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
  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
    isDisposable: boolean;

    isRoleBased: boolean

    isFreeProvider: boolean
  }
}
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(

  req: NextApiRequest

  res: NextApiResponse<EmailValidationResult | { error: string }>
) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
<<<<<<< HEAD
=======
  if (req.method !== 'POST') {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    return res.status(405).json({ error: 'Method not allowed' });  }    return res.status(405).json({ error: 'Method not allowed' })
  }
=======
    return res.status(405).json({ error: 'Method not allowed' });
 
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    const { email } = req.body;

    if (!email |typeof email !== 'string') {

      return res.status(400).json({ error: 'Email is required' });
<<<<<<< HEAD
    }
=======
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    // Basic email format validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidFormat = emailRegex.test(email);
    // Extract domain
    const domain = email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers
    const disposableDomains = [
<<<<<<< HEAD
      'tempmail.org'
      'guerrillamail.com'
      'mailinator.com'
      '10minutemail.com'
      'temp-mail.org'
      'sharklasers.com'
      'getairmail.com'
      'mailnesia.com',    ];      'tempmail.orgguerrillamail.commailinator.com10minutemail.comtemp-mail.orgsharklasers.comgetairmail.commailnesia.com'
=======
      'tempmail.org',
      'guerrillamail.com',
      'mailinator.com',
      '10minutemail.com',
      'temp-mail.org',
      'sharklasers.com',
      'getairmail.com',
      'mailnesia.com',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    ];
    const isDisposable = disposableDomains.some(d => domain?.includes(d));
    // Check for role-based emails
    const roleBasedPatterns = [
<<<<<<< HEAD
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
=======
      'admin@',
      'info@',
      'support@',
      'contact@',
      'sales@',
      'help@',
      'noreply@',
      'no-reply@',
      'donotreply@',
      'do-not-reply@',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    ];
    const isRoleBased = roleBasedPatterns.some(pattern =>
      email.startsWith(pattern)
    );
    // Check for free email providers
    const freeProviders = [
<<<<<<< HEAD
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
=======
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'aol.com',
      'icloud.com',
      'protonmail.com',
      'mail.com',
      'yandex.com',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    ];
    const isFreeProvider = freeProviders.some(provider => domain === provider);
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
<<<<<<< HEAD
    const result: EmailValidationResult = {
      email
      isValid: score >= 70
      score: Math.max(0, score)
      suggestions
=======
}

const result: EmailValidationResult = {
      email,
      isValid: score >= 70,
      score: Math.max(0, score),
      suggestions,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  }      email;
      isValid: score >= 70;
      score: Math.max(0, score);
      suggestions;
      details: {
        hasValidFormat;
        hasValidDomain;
        hasValidMX: true, // Simplified for demo
        isDisposable;
        isRoleBased;
        isFreeProvider}
    }
    res.status(200).json(result)
  } catch (error) {
    console.error('Email validation error:', error);

    res.status(500).json({ error: 'Internal server error' })
  }
}
=======
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
