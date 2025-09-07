const { withErrorLogging } = require('../lib/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    
    if (!fromAddress || !toAddress || !parcel) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // TODO: Implement actual shipping rate calculation
    const mockRates = [
      { service: 'Standard', cost: 15.99, days: '5-7' },
      { service: 'Express', cost: 25.99, days: '2-3' },
      { service: 'Overnight', cost: 45.99, days: '1' }
    ];
    
    res.statusCode = 200;
    res.json({ success: true, rates: mockRates });
  } catch (err) {
    console.error('Shipping rates API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
  }
}

module.exports = withErrorLogging(handler);