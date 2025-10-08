=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    res.end('Method Not Allowed');
    return;
  }

  try {
    // Wallet functionality would go here
=======
    // Wallet functionality implementation would go here
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
    // Wallet functionality would go here
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
=======
    // Wallet functionality implementation
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    // Wallet functionality implementation
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
    // Wallet functionality implementation would go here
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
    // Wallet functionality would go here
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    // Wallet functionality implementation
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    // Wallet functionality would go here
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
    // Wallet functionality implementation
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
    // Wallet functionality would go here
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
    // Wallet functionality implementation
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  } catch (err) {
    console.error('Wallet API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Wallet operation failed' });
  }
}

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
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
      case 'create_payment_intent':
        if (!amount) {
          res.statusCode = 400;
          res.json({ error: 'Amount is required for payment intent' });
          return;
        }
        
        // Mock payment intent creation
        const paymentIntent = {
          id: `pi_${Date.now()}`,
          amount: Math.round(amount * 100), // Convert to cents
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
        break;

      case 'get_balance':
        // Mock balance retrieval
        const balance = {
          available: 1000.00,
          pending: 0.00,
          currency: currency.toUpperCase()
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;

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
=======
  try {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    // Wallet functionality would go here
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
  } catch (err) {
    console.error('Wallet error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
module.exports = withErrorLogging(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
