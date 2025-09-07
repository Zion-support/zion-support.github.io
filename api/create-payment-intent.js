import Stripe from 'stripe';
import { withErrorLogging } from './withErrorLogging.cjs';

// const PROD_DOMAIN = 'app.ziontechgroup.com';

// function _isProdDomain() {
//   const url = process.env.URL || '';
//   try {
//     return new URL(url).hostname === PROD_DOMAIN;
//   } catch {
//     return false;
//   }
// }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    res.status(500).json({ error: 'Payment intent creation failed' });
  }
});