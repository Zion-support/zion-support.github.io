const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
    res.statusCode = 400;
    res.json({ error: 'Action is required' });
    return;
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          res.statusCode = 400;
          res.json({ error: 'Amount is required for payment intent' });
          return;
        }

        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        const paymentIntent = {
          id: 'pi_' + timestamp,
          amount: Math.round(amount * 100),
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random,
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
        break;
      }

      case 'get_balance': {
        const balance = {
          available: 1000.0,
          pending: 0.0,
          currency: currency.toUpperCase(),
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;
      }

      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Wallet error:', error);
    res.statusCode = 500;
    res.json({ error: 'Wallet operation failed' });
  }
}

module.exports = withSentry(handler);