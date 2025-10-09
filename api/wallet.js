const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
    res.status(400).json({ error: 'Action is required' });
    return;
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          res.status(400).json({ error: 'Amount is required for payment intent' });
          return;
        }

        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        const paymentIntent = {
          id: `pi_${timestamp}_${random}`,
          amount: amount * 100, // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: timestamp
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
        break;
      }

      case 'get_balance': {
        const balance = {
          currency,
          amount: 0, // Mock balance
          lastUpdated: Date.now()
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;
      }

      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch {
    res.status(500).json({ error: 'Wallet operation failed' });
  }
}

module.exports = withSentry(handler);
