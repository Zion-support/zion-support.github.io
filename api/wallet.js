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