const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { amount, currency = 'usd', userId } = req.body || {};

  if (!amount || amount <= 0) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Valid amount is required' }));
=======
  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
>>>>>>> main
    return;
  }

  try {
<<<<<<< HEAD
    // Basic payment intent creation logic
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      userId: userId || null,
      timestamp: new Date().toISOString(),
      status: 'requires_payment_method'
=======
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      created: Math.floor(Date.now() / 1000)
>>>>>>> main
    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}
