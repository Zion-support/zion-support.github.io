const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  // Mock wallet data for demonstration
  const walletData = {
    balance: '0.00',
    address: null,
    transactions: [],
  };

  res.statusCode = 200;
  res.json(walletData);
}

module.exports = withSentry(handler);