<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface EmailValidationResult {
  email: string;
  is_valid: boolean;
=======
import type { NextApiRequest, NextApiResponse } from 'next';


interface EmailValidationResult {
  email: string;
  isValid: boolean;

=======
interface EmailValidationResult {
  email: string;
  is_valid: boolean;
interface EmailValidationResult {
  email: string;
  isValid: boolean;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
<<<<<<< HEAD

    // Check for free email providers
    const freeProviders = [
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    ];

=======
    const isFreeProvider = freeProviders && freeProviders.some(provider => domain === provider);


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }
  try {
    const { email } = req && req.body;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  } catch (error) {
    console && console.error('Email validation error:', error);
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
  } catch (error) {
    console.error ('Email validation error:', error);
    res.status (500).json ({ error: 'Internal server error' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

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
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
