import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {
    res.statusCode = 400;
    res.json({ error: 'Amount is required' });
    return;
  }

  try {
    const paymentIntent = {
      id: 'pi_' + Date.now(),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch {
//     console.error('Payment intent creation error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to create payment intent' });
  }
}

export default withErrorLogging(handler);
