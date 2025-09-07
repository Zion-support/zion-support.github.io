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

    isRoleBased: boolean;
    isFreeProvider: boolean;
  },
}

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