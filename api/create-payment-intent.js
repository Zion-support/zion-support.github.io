import { withErrorLogging } from './withErrorLogging.cjs';

<<<<<<< HEAD
=======
const PROD_DOMAIN = 'https://ziontechgroup.com';

>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { amount, currency = 'usd', metadata = {} } = req.body || {};

  if (!amount || amount <= 0) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Valid amount is required' }));
=======
  const { amount, currency = 'usd', userId } = req.body || {};

  if (!amount) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
    return;
  }

  try {
    // Basic payment intent creation logic
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
<<<<<<< HEAD
      status: 'requires_payment_method',
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`,
      metadata
=======
      userId: userId || null,
      timestamp: new Date().toISOString(),
      status: 'requires_payment_method'
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
    };

    // In a real implementation, you would:
    // 1. Create a payment intent with Stripe
    // 2. Store the payment intent in your database
    // 3. Return the client secret for frontend confirmation

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      paymentIntent
    }));
  } catch (error) {
    // console.error('Payment intent creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: typeof process !== 'undefined' && process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);