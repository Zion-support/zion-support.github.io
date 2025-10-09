import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {/* TODO: Fix JSX expression */}
  }

  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {/* TODO: Fix JSX expression */}
  r: 'Amount is required' });
    return;
  }

  try {/* TODO: Fix JSX expression */}
    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch {/* TODO: Fix JSX expression */}
  r: 'Failed to create payment intent' });
  }
}

export default withErrorLogging(handler);
