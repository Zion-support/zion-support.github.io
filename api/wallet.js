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
    let result;

    switch (action) {
      case 'create':
        result = {
          walletId: 'wallet_' + Date.now(),
          balance: 0,
          currency,
          status: 'active',
          createdAt: new Date().toISOString()
        };
        break;

      case 'deposit':
        if (!amount || amount <= 0) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Valid amount is required for deposit' }));
          return;
        }
        result = {
          walletId: 'wallet_' + Date.now(),
          amount,
          currency,
          status: 'deposited',
          transactionId: 'tx_' + Date.now(),
          createdAt: new Date().toISOString()
        };
        break;

      case 'withdraw':
        if (!amount || amount <= 0) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Valid amount is required for withdrawal' }));
          return;
        }
        result = {
          walletId: 'wallet_' + Date.now(),
          amount,
          currency,
          status: 'withdrawn',
          transactionId: 'tx_' + Date.now(),
          createdAt: new Date().toISOString()
        };
        break;

      case 'balance':
        result = {
          walletId: 'wallet_' + Date.now(),
          balance: 1000.00, // Mock balance
          currency,
          lastUpdated: new Date().toISOString()
        };
        break;

      default:
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid action. Supported actions: create, deposit, withdraw, balance' }));
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: `Wallet ${action} completed successfully`,
      result
    }));
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process wallet operation' }));
  }
}

module.exports = withSentry(handler);