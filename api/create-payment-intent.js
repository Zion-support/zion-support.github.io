import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
=======
  const { amount, currency = 'usd', userId } = req.body || {};

  if (!amount || amount <= 0) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Valid amount is required' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
    return;
  }

  try {
<<<<<<< HEAD
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      created: Math.floor(Date.now() / 1000)
=======
    // Basic payment intent creation logic
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      userId: userId || null,
      timestamp: new Date().toISOString(),
      status: 'requires_payment_method'
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch (_err) { // eslint-disable-line no-unused-vars
    // console.error("Error:", err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
=======
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
  }
}

export default withErrorLogging(handler);
