const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
    res.status(405).json({ error: 'Method not allowed' });
    return;
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
<<<<<<< HEAD
    return res.status(400).json({ error: 'Action is required' });
=======
    res.status(400).json({ error: 'Action is required' });
    return;
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
<<<<<<< HEAD
          return res.status(400).json({ error: 'Amount is required for payment intent' });
=======
          res.status(400).json({ error: 'Amount is required for payment intent' });
          return;
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
        }

        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        const paymentIntent = {
          id: `pi_${timestamp}_${random}`,
<<<<<<< HEAD
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: timestamp
=======
          amount,
          currency,
          status: 'requires_payment_method'
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
        break;
      }

      case 'get_balance': {
        const balance = {
<<<<<<< HEAD
          currency,
          available: 0,
          pending: 0,
          lastUpdated: Date.now()
=======
          amount: 0,
          currency: 'USD',
          lastUpdated: new Date().toISOString()
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;
      }

      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch (err) {
<<<<<<< HEAD
    console.error('Wallet operation error:', err);
=======
    console.error('Error in wallet operation:', err);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    res.status(500).json({ error: 'Wallet operation failed' });
  }
}

module.exports = withSentry(handler);