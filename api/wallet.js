const { withErrorLogging } = require('./withErrorLogging.cjs');
import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  const { userId } = req.query || {};
  
  if (!userId) {
    res.statusCode = 400;
    res.json({ error: 'User ID is required' });
    return;
  }

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
try {
    const { userId } = req.query || {};

    if (!userId) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }

    // Fetch wallet data
    const wallet = {
      userId,
      balance: 0,
      currency: 'USD',
      transactions: [],
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({ wallet });
  } catch (err) {
    console.error('Wallet fetch error:', err);
    res.status(500).json({ error: err.message || 'Failed to fetch wallet' });
  }
}

module.exports = withErrorLogging(handler);
