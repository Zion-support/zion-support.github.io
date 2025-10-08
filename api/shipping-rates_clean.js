const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { weight, destination, dimensions } = req.body || {};

    if (!weight || !destination) {
      res.statusCode = 400;
      res.json({ error: 'Weight and destination are required' });
      return;
    }

    // Mock shipping rate calculation
    const baseRate = 10;
    const weightRate = weight * 0.5;
    const total = baseRate + weightRate;

    const shippingRates = [
      {
        service: 'Standard',
        deliveryDays: '5-7',
        cost: total,
      },
      {
        service: 'Express',
        deliveryDays: '2-3',
        cost: total * 1.5,
      },
      {
        service: 'Overnight',
        deliveryDays: '1',
        cost: total * 2.5,
      },
    ];

    res.statusCode = 200;
    res.json({ success: true, rates: shippingRates });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to calculate shipping rates' });
  }
}

module.exports = withSentry(handler);