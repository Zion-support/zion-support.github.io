const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { weight, destination, serviceType = 'standard' } = req.body || {};

  if (!weight || !destination) {
    res.statusCode = 400;
    res.json({ error: 'Weight and destination are required' });
    return;
  }

  try {
    // Mock shipping rate calculation
    const baseRate = 5.0;
    const perPoundRate = 0.5;
    const calculatedRate = baseRate + (weight * perPoundRate);

    const serviceMultipliers = {
      standard: 1.0,
      express: 1.5,
      overnight: 2.5,
    };

    const multiplier = serviceMultipliers[serviceType] || 1.0;
    const finalRate = (calculatedRate * multiplier).toFixed(2);

    const shippingRate = {
      weight,
      destination,
      serviceType,
      rate: parseFloat(finalRate),
      currency: 'USD',
      estimatedDays: serviceType === 'overnight' ? 1 : serviceType === 'express' ? 2 : 5,
    };

    res.statusCode = 200;
    res.json({ success: true, shippingRate });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to calculate shipping rates' });
  }
}

module.exports = withSentry(handler);