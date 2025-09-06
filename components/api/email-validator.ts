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

  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;

    // Check for free email providers
    const freeProviders = [
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    ];

=======
    const isFreeProvider = freeProviders && freeProviders.some(provider => domain === provider);


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

