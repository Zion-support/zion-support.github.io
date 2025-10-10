const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'shipping-rates.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { destination, weight, dimensions } = req.body || {};

  if (!destination || !weight) {
    return res.status(400).json({ error: 'Destination and weight are required' });
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    // Read existing shipping rates
    let shippingRates = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      shippingRates = JSON.parse(data);
    }

    // Calculate shipping rates based on destination and weight
    const baseRates = {
      'US': { standard: 5.99, express: 12.99, overnight: 24.99 },
      'CA': { standard: 8.99, express: 16.99, overnight: 32.99 },
      'UK': { standard: 12.99, express: 22.99, overnight: 39.99 },
      'EU': { standard: 14.99, express: 24.99, overnight: 44.99 },
      'AU': { standard: 18.99, express: 32.99, overnight: 59.99 }
    };

    const country = destination.country || 'US';
    const baseRate = baseRates[country] || baseRates['US'];
    
    // Weight-based adjustments
    const weightMultiplier = Math.ceil(weight / 5); // Every 5 lbs adds to cost
    
    const calculatedRates = {
      standard: (baseRate.standard * weightMultiplier).toFixed(2),
      express: (baseRate.express * weightMultiplier).toFixed(2),
      overnight: (baseRate.overnight * weightMultiplier).toFixed(2)
    };

    const rateRequest = {
      id: `rate_${Date.now()}`,
      destination,
      weight,
      dimensions: dimensions || {},
      rates: calculatedRates,
      requestedAt: new Date().toISOString()
    };

    shippingRates.push(rateRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(shippingRates, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Shipping rates calculated successfully',
      rates: calculatedRates,
      requestId: rateRequest.id
    }));

  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to calculate shipping rates',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}