const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Action is required' }));
    return;
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));
          return;
        }

        const paymentIntent = {
          id: 'pi_' + Math.random().toString(36).substr(2, 9),
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: Math.floor(Date.now() / 1000)
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Payment intent created successfully',
          paymentIntent
        }));
        break;
      }

      case 'get_balance': {
        const balance = {
          available: 0,
          pending: 0,
          currency,
          lastUpdated: new Date().toISOString()
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Balance retrieved successfully',
          balance
        }));
        break;
      }

      default: {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid action' }));
        break;
      }
    }
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process wallet operation' }));
  }
}

module.exports = withSentry(handler);