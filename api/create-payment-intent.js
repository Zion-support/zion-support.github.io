import { withErrorLogging } from './withErrorLogging.cjs';

<<<<<<< HEAD
// const PROD_DOMAIN = 'https://ziontechgroup.com';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  try {
    const { amount, currency = 'usd', productId } = req.body || {};

    if (!amount || !productId) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing required fields: amount, productId' }));
      return;
    }

    // Mock payment intent for development
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount * 100, // Convert to cents
      currency,
      status: 'requires_payment_method'
=======
  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      created: Math.floor(Date.now() / 1000)
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch (_err) { // eslint-disable-line no-unused-vars
    // console.error("Error:", err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);
=======
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
}

export default withErrorLogging(handler);
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
