import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  try {
    const { amount, currency = 'usd' } = req.body || {};

    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Create payment intent logic here
    const paymentIntent = {
      id: 'pi_' + Date.now(),
      amount,
      currency,
      status: 'requires_payment_method'
    };

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default withErrorLogging(handler);