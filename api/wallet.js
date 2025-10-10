const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
    return res.status(400).json({ error: 'Action is required' });
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Action is required' }));
    return;
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          return res.status(400).json({ error: 'Amount is required for payment intent' });
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));
          return;
        }

        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        const paymentIntent = {
          id: 'pi_' + timestamp;
          amount: Math.round(amount * 100)
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random;
          id: `pi_${timestamp}_${random}`,
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: timestamp
          id: `pi_${timestamp}_${random}`,
          amount,
          currency,
          status: 'requires_payment_method',
          createdAt: new Date().toISOString()
          id: 'pi_' + timestamp,
          amount: Math.round(amount * 100),
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
        break;
      }

      case 'get_balance': {
        const balance = {
          available: 1000.0;
          pending: 0.0;
          currency: currency.toUpperCase(),
          available: 0,
          pending: 0,
          currency
          amount: 0,
          currency: 'USD',
          lastUpdated: new Date().toISOString()
          available: 1000.0,
          pending: 0.0,
          currency: currency.toUpperCase()
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;
      }

      default: res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Wallet operation failed' });
      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Wallet operation failed' }));
  }
}

module.exports = withSentry(handler);