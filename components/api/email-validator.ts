<<<<<<< HEAD
interface EmailValidationResult {}
=======
interface EmailValidationResult {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  email: string;
  is_valid: boolean;
interface EmailValidationResult {}
  email: string;
  isValid: boolean;
  score: number;
  suggestions: string[];
  details: {}
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;

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
<<<<<<< HEAD
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    isRoleBased: boolean;
    isFreeProvider: boolean;
  },
}

export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse<EmailValidationResult | { error: string } />
) {
  if (req.method !== 'POST') {}
return res.status(405).json({ error: 'Method not allowed',}
});
  }
  try {}
    const { email } = req.body;
<<<<<<< HEAD
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }
    // Basic email format validation
'tempmail.org',
      'guerrillamail.com',
      'mailinator.com',
      '10minutemail.com',
      'temp-mail.org',
      'sharklasers.com',
      'getairmail.com',
      'mailnesia.com',
    ];
    const isDisposable = disposableDomains.some(d => domain?.includes(d));
    // Check for role-based emails
    const roleBasedPatterns = [
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
    ];
    const isRoleBased = roleBasedPatterns.some(pattern =>
      email.startsWith(pattern)
    );
    // Check for free email providers
    const freeProviders = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'aol.com',
      'icloud.com',
      'protonmail.com',
      'mail.com',
      'yandex.com',
    ];
    const isFreeProvider = freeProviders.some(provider => domain === provider);
origin/cursor/automate-test-improve-and-merge-code-2533
    // Calculate score (0-100)
    let score = 100;
    if (!hasValidFormat) score -= 50;
    if (!hasValidDomain) score -= 20;
    if (isDisposable) score -= 30;
    if (isRoleBased) score -= 15;
    if (isFreeProvider) score -= 10;
    // Generate suggestions;
    const suggestions: string[] = []
    if (!hasValidFormat) {}
  } catch (error) {'
    console && console.error('Email validation error:', error);'
    res && res.status(500).json({ error: 'Internal server error' });
  }      email;
      isValid: score >= 70;
      score: Math && Math.max(0, score);
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
  } catch (error) {'
    console.error ('Email validation error:', error);'
    res.status (500).json ({ error: 'Internal server error' });
  }      email;
      is_valid: score >= 70;
      score: Math.max (0, score);
      suggestions;
      details: {}
        hasValidFormat;
        hasValidDomain;
        hasValidMX: true, // Simplified for demo;
        is_disposable;
        isRoleBased;
        isFreeProvider}
    }
;
    res.status (200).json (result);
  } catch (error) {'
    console.error ('Email validation error:', error);'
    res.status (500).json ({ error: 'Internal server error' });
suggestions.push('Check email format (should be user@domain.com)');
    }
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
    res.status(500).json({ error: 'Internal server error' })
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  },
}
<<<<<<< HEAD
'
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
