
import Stripe from 'stripe';

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

>>>>>>> origin/main

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

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
  }
}

export default withErrorLogging(handler);
>>>>>>> origin/main

