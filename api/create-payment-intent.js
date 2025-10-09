import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {
    res.status(400).json({ error: 'Amount is required' });
    return;
  }

  try {
    // Implementation for creating payment intent
    const paymentIntent = { id: 'pi_test', amount, currency };
    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch {
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
}

export default withErrorLogging(handler);
