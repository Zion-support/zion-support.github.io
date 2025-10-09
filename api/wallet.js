const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
    return res.status(400).json({ error: 'Action is required' });
  }

  try {
    switch (action) {
      case 'create': {
        // Create a new wallet
        const wallet = {
          id: 'wallet_' + Date.now().toString(),
          balance: 0,
          currency,
          createdAt: new Date().toISOString()
        };
        
        res.status(200).json({ 
          success: true, 
          message: 'Wallet created successfully',
          wallet 
        });
        break;
      }

      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for deposit' });
        }
        
        res.status(200).json({ 
          success: true, 
          message: 'Deposit processed successfully',
          amount,
          currency
        });
        break;

      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for withdrawal' });
        }
        
        res.status(200).json({ 
          success: true, 
          message: 'Withdrawal processed successfully',
          amount,
          currency
        });
        break;

      case 'balance':
        res.status(200).json({ 
          success: true, 
          balance: 0,
          currency
        });
        break;

      default:
        res.status(400).json({ error: 'Invalid action' });
    }
  } catch (err) {
    console.error('Error processing wallet action:', err);
    res.status(500).json({ error: 'Failed to process wallet action' });
  }
}

module.exports = withSentry(handler);