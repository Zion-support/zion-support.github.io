import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { amount, currency = 'usd', userId } = req.body || {};
  
  if (!amount) {
    res.statusCode = 400;
    res.json({ error: 'Missing amount' });
    return;
  }

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
try {
    const { amount, currency = 'usd' } = req.body || {};

    if (!amount) {
      res.status(400).json({ error: 'Amount is required' });
      return;
    }

    // Create payment intent logic here
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Convert to cents
      currency,
      status: 'requires_payment_method'
    };

    res.status(200).json({ paymentIntent });
  } catch (err) {
    console.error('Payment intent error:', err);
    res.status(500).json({ error: err.message });
  }
}

export default withErrorLogging(handler);