import Stripe from 'stripe';
<<<<<<< HEAD
import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'app.ziontechgroup.com';

function isProdDomain() {
  const url = process.env.URL || '';
  try {
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;
  }
}
=======
import { withErrorLogging } from '../../utils/withErrorLogging.cjs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// const PROD_DOMAIN = 'app.ziontechgroup.com';

// function isProdDomain() {
//   const url = process.env.URL || '';
//   try {
//     return new URL(url).hostname === PROD_DOMAIN;
//   } catch {
//     return false;
//   }
// }
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

<<<<<<< HEAD
  const { amount } = req.body || {};
  if (typeof amount !== 'number') {
    res.statusCode = 400;
    res.json({ error: 'Invalid amount' });
    return;
  }

  try {
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;

    if (
      !isProdDomain() &&
      liveKey.startsWith('sk_live') &&
      !process.env.STRIPE_TEST_SECRET_KEY
    ) {
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }

    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {
      apiVersion: '2023-10-16',
    });

    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.statusCode = 200;
    res.json({ clientSecret: intent.client_secret, id: intent.id });
  } catch (err) {
    console.error('Create payment intent error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
=======
  try {
    const { amount, currency = 'usd' } = req.body || {};
    
    if (typeof amount !== 'number' || amount <= 0) {
      res.statusCode = 400;
      res.json({ error: 'Invalid amount' });
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.statusCode = 200;
    res.json({ 
      success: true, 
      clientSecret: paymentIntent.client_secret 
    });
  } catch (err) {
    // console.error('Payment intent API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Payment intent creation failed' });
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
  }
}

export default withErrorLogging(handler);