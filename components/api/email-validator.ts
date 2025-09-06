
import type { NextApiRequest, NextApiResponse } from 'next';

=======

 import type { NextApiRequest, NextApiResponse } from 'next';


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


    // Extract domain
    const domain = email && email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;
    // Check for common disposable email providers
    const disposableDomains = [


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


    // Check for free email providers
    const freeProviders = [

=======
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    ];

    const isFreeProvider = freeProviders && freeProviders.some(provider => domain === provider);


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

  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }      email;
      isValid: score >= 70;
      score: Math && Math.max(0, score);

=======
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

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      suggestions;
      details: {
        hasValidFormat;
        hasValidDomain;
        hasValidMX: true, // Simplified for demo;
        is_disposable;
        isRoleBased;
        isFreeProvider}

    };
    res && res.status(200).json(result)
  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' })

  }

}

=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
