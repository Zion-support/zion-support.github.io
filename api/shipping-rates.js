import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { 
    destination, 
    weight, 
    dimensions, 
    serviceType = 'standard',
    origin = 'US'
  } = req.body || {};

  if (!destination || !weight) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Destination and weight are required' 
    }));
    return;
  }

  try {
    // Basic shipping rates calculation logic
    const baseRates = {
      standard: 15.99,
      express: 29.99,
      overnight: 49.99,
      international: 39.99
    };

    const weightMultiplier = Math.ceil(weight / 5); // $5 per 5 lbs
    const baseRate = baseRates[serviceType] || baseRates.standard;
    const calculatedRate = baseRate + (weightMultiplier * 5);

    const shippingOptions = [
      {
        service: 'Standard Shipping',
        rate: calculatedRate,
        deliveryTime: '5-7 business days',
        description: 'Economical shipping option'
      },
      {
        service: 'Express Shipping',
        rate: calculatedRate * 1.5,
        deliveryTime: '2-3 business days',
        description: 'Faster delivery option'
      },
      {
        service: 'Overnight Shipping',
        rate: calculatedRate * 2,
        deliveryTime: '1 business day',
        description: 'Fastest delivery option'
      }
    ];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      destination,
      weight,
      serviceType,
      shippingOptions,
      timestamp: new Date().toISOString()
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

export default withErrorLogging(handler);