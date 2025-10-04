<<<<<<< HEAD
const { withErrorLogging } = require('./withErrorLogging.cjs');
=======
import { withErrorLogging } from './withErrorLogging.cjs';
>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

<<<<<<< HEAD
  try {
    const { userId } = req.query || {};
    
    if (!userId) {
      res.statusCode = 400;
      res.json({ error: 'User ID is required' });
      return;
    }

    // Mock wallet data (in production, fetch from database)
    const walletData = {
      userId,
      balance: 1000.00,
      currency: 'USD',
      transactions: [
        {
          id: 'tx_001',
          amount: 100.00,
          type: 'credit',
          description: 'Service payment',
          date: new Date().toISOString()
        }
      ]
    };

    res.statusCode = 200;
    res.json(walletData);
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to fetch wallet' });
  }
}

module.exports = withErrorLogging(handler);
=======
  const { userId } = req.query || {};

  try {
    // Fetch wallet data logic here
    const wallet = {
      id: `wallet_${userId}`,
      userId,
      balance: 0,
      currency: 'usd',
      transactions: [],
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      wallet
    });
  } catch (error) {
    console.error('Wallet fetch error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to fetch wallet' 
    });
  }
}

export default withErrorLogging(handler);
>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef
