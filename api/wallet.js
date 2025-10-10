const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
<<<<<<< HEAD
    return res.status(400).json({ error: 'Action is required' });
=======
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Action is required' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
<<<<<<< HEAD
          return res.status(400).json({ error: 'Amount is required for payment intent' });
=======
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));
          return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
        }

        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        const paymentIntent = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          id: 'pi_' + timestamp;
          amount: Math.round(amount * 100)
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random;
=======
          id: `pi_${timestamp}_${random}`,
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: timestamp
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
          id: `pi_${timestamp}_${random}`,
          amount,
          currency,
          status: 'requires_payment_method',
          createdAt: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
=======
          id: 'pi_' + timestamp,
          amount: Math.round(amount * 100),
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
        break;
      }

      case 'get_balance': {
        const balance = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          available: 1000.0;
          pending: 0.0;
          currency: currency.toUpperCase(),
=======
          available: 0,
          pending: 0,
          currency
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
          amount: 0,
          currency: 'USD',
          lastUpdated: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
=======
          available: 1000.0,
          pending: 0.0,
          currency: currency.toUpperCase()
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;
      }

<<<<<<< HEAD
      default: res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Wallet operation failed' });
=======
      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Wallet operation failed' }));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }
}

module.exports = withSentry(handler);