import { withErrorLogging } from './withErrorLogging.cjs';

// Sample shipping rates data
const shippingRates = {
  standard: {
    name: 'Standard Shipping',
    price: 9.99,
    estimatedDays: '5-7 business days',
    description: 'Economical shipping for standard packages'
  },
  express: {
    name: 'Express Shipping',
    price: 19.99,
    estimatedDays: '2-3 business days',
    description: 'Fast delivery for urgent orders'
  },
  overnight: {
    name: 'Overnight Shipping',
    price: 39.99,
    estimatedDays: '1 business day',
    description: 'Next-day delivery for critical shipments'
  },
  free: {
    name: 'Free Shipping',
    price: 0,
    estimatedDays: '7-10 business days',
    description: 'Free shipping on orders over $100',
    minOrderAmount: 100
  }
};

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { orderAmount = 0, weight = 1, destination = 'US' } = req.query || {};
    
    let availableRates = Object.entries(shippingRates).map(([key, rate]) => ({
      id: key,
      ...rate
    }));
    
    // Filter out free shipping if order amount is too low
    if (parseFloat(orderAmount) < 100) {
      availableRates = availableRates.filter(rate => rate.id !== 'free');
    }
    
    // Add destination-based adjustments
    if (destination !== 'US') {
      availableRates = availableRates.map(rate => ({
        ...rate,
        price: rate.price * 1.5, // 50% markup for international
        estimatedDays: rate.estimatedDays.replace('business days', 'business days (international)')
      }));
    }
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      rates: availableRates,
      destination,
      orderAmount: parseFloat(orderAmount),
      weight: parseFloat(weight)
    }));
  } catch (error) {
    console.error('Shipping rates API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to fetch shipping rates' }));
  }
}

export default withErrorLogging(handler);