import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { amount, currency = 'usd', metadata = {} } = req.body || {};

  if (!amount || amount <= 0) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Valid amount is required' }));
    return;
  }

  try {
    // Basic payment intent creation logic
    const paymentIntent = {
      id: 'pi_' + Date.now(),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      metadata,
      createdAt: new Date().toISOString()
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Payment intent created successfully',
      paymentIntent
    }));
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
}

export default withErrorLogging(handler);