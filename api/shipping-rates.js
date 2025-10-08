const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { origin, destination, weight } = req.body || {};

  if (!origin || !destination || !weight) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields: origin, destination, weight' });
    return;
  }

  try {
    // Calculate shipping rates based on parameters
    const baseRate = 10;
    const weightRate = weight * 0.5;
    const total = baseRate + weightRate;

    res.statusCode = 200;
    res.json({
      rate: total,
      currency: 'USD',
      estimatedDays: '3-5 business days'
    });
  } catch (err) {
    console.error('Shipping rates error:', err);
    res.statusCode = 500;
    res.json({ error: 'Failed to calculate shipping rates' });
  }
}

module.exports = withSentry(handler);