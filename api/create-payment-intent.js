const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Amount is required' }));
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
<<<<<<< HEAD
    });
=======
      status: 'requires_payment_method',
      client_secret: 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9),
      created: Math.floor(Date.now() / 1000)
    };

    // In a real implementation, you would:
    // 1. Create a payment intent with Stripe
    // 2. Store the payment intent in your database
    // 3. Return the client secret for frontend confirmation
>>>>>>> cursor/delete-records-30ea

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ clientSecret: paymentIntent.client_secret }));

  } catch (error) {
    console.error('Stripe payment intent error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Internal server error' }));
=======
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
>>>>>>> cursor/delete-records-30ea
  }
}
