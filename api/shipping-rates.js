const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { weight, destination } = req.body || {};

  if (!weight || !destination) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields: weight and destination' });
    return;
  }

  try {
    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = weight * 0.5;
    const destinationMultiplier = destination === 'international' ? 2 : 1;
    
    const standardRate = baseRate + (weightMultiplier * destinationMultiplier);
    const expressRate = standardRate * 1.5;
    const overnightRate = standardRate * 2;

    const rates = {
      standard: {
        name: 'Standard Shipping',
        price: standardRate,
        estimatedDays: destination === 'international' ? '7-14' : '3-5'
      },
      express: {
        name: 'Express Shipping',
        price: expressRate,
        estimatedDays: destination === 'international' ? '3-7' : '1-2'
      },
      overnight: {
        name: 'Overnight Shipping',
        price: overnightRate,
        estimatedDays: '1'
      }
    };

    res.statusCode = 200;
    res.json({ success: true, rates });
  } catch {
    res.statusCode = 500;
    res.json({ error: 'Failed to calculate shipping rates' });
  }
}

module.exports = withSentry(handler);