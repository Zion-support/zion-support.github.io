const { withErrorLogging } = require('./withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  try {
    // TODO: Get wallet information
    console.log('Wallet request');
    
    res.statusCode = 200;
    res.json({ 
      success: true,
      balance: 0,
      currency: 'USD'
    });
  } catch (err) {
    console.error('Wallet API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Wallet request failed' });
  }
}

module.exports = withErrorLogging(handler);