import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { amount, currency = 'usd' } = req.body || {};
    
    if (!amount) {
      res.statusCode = 400;
      res.json({ error: 'Missing amount' });
      return;
    }

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.statusCode = 200;
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

export default withErrorLogging(handler);