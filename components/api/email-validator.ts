

    isFreeProvider: boolean;
  },
}


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



  } catch (error) {
    console && console.error('Email validation error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }      email;
      isValid: score >= 70;
      score: Math && Math.max(0, score);



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

const result: EmailValidationResult = {
      email;
      isValid: score >= 70,
      score: Math.max(0, score);

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




