const { withErrorLogging } = require('./withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  try {
    // Here you would typically fetch wallet data
    // For now, we'll return mock data
    
    res.statusCode = 200;
    res.json({ 
      success: true,
      wallet: {
        balance: 0,
        currency: 'USD',
        transactions: []
      }
    });
  } catch (err) {
    console.error('Wallet API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to fetch wallet data' });
  }
}

module.exports = withErrorLogging(handler);