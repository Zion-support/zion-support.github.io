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
          success: true,
          paymentIntent
        }));
        break;
      }

      case 'get_balance': {
        // Mock balance - in real app, fetch from database
        const balance = {
          currency,
          amount: 1000.00,
          lastUpdated: new Date().toISOString()
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          success: true,
          balance
        }));
        break;
      }

      case 'get_transactions': {
        // Mock transactions - in real app, fetch from database
        const transactions = [
          {
            id: 'tx_' + Date.now(),
            amount: 50.00,
            currency,
            type: 'credit',
            description: 'Payment received',
            timestamp: new Date().toISOString()
          }
        ];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          success: true,
          transactions
        }));
        break;
      }

      default:
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid action' }));
    }
  } catch (error) {
    console.error('Wallet API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = withSentry(handler);
