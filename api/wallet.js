const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  try {
    // Wallet functionality would go here
    res.statusCode = 200;
    res.json({ message: 'Wallet endpoint' });
  } catch (err) {
    console.error('Wallet API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Internal server error' });
  }
}

module.exports = withSentry(handler);