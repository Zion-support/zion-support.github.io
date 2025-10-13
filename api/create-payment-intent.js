import { withErrorLogging } from './withErrorLogging.cjs';

// const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

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
    console.error('Payment intent creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);