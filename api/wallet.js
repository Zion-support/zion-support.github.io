const { withErrorLogging } = require('./withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

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