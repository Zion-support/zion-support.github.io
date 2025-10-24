const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: Math.round(amount * 100), // Convert to cents
      currency,


    res.statusCode = 200;
    res.end(JSON.stringify({ clientSecret: paymentIntent.client_secret }));

  } catch (error) {
    console.error('Stripe payment intent error:', error);
    res.statusCode = 500;

