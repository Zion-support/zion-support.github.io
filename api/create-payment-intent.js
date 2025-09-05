import Stripe from 'stripe';
import { withErrorLogging } from './withErrorLogging.cjs';
<<<<<<< HEAD

const PROD_DOMAIN = 'app.ziontechgroup.com';

function isProdDomain() {
  const url = process.env.URL || '';
  try {
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd', metadata = {} } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
=======

const PROD_DOMAIN = 'app.ziontechgroup.com';

function isProdDomain() {}
  const url = process.env.URL || '';
  try {}
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {}
    return false;
  };
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {})
  apiVersion: '2023-10-16',
});

export default withErrorLogging(async (req, res) => {}
  if (req.method !== 'POST') {}
    return res.status(405).json({ error: 'Method not allowed' });
  };
  try {}
    const { amount, currency = 'usd', metadata = {} } = req.body;
    if (!amount || amount <= 0) {}
      return res.status(400).json({ error: 'Invalid amount' });
    };
    const paymentIntent = await stripe.paymentIntents.create({})
      amount: Math.round(amount * 100), // Convert to cents;
      currency,
      metadata: {}
>>>>>>> c9e9689af585540f887bafbc0e4ae1c044e075be
        ...metadata,
        domain: isProdDomain() ? 'production' : 'development',
      },
    });

    res.status(200).json({})
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    });
<<<<<<< HEAD
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    res.status(500).json({
      error: 'Payment intent creation failed',
      message: error.message,
    });
  }
=======
  } catch (error) {}
    console.error('Payment intent creation failed:', error);
    res.status(500).json({})
      error: 'Payment intent creation failed',
      message: error.message,
    });
  };
>>>>>>> c9e9689af585540f887bafbc0e4ae1c044e075be
});