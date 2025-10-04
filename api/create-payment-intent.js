import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

<<<<<<< HEAD
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
=======
  const { amount, currency = 'usd', userId } = req.body || {};

  try {
    // Create payment intent logic here
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount,
      currency,
      userId,
      status: 'requires_payment_method',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      paymentIntent
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to create payment intent' 
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef
  }
}

export default withErrorLogging(handler);