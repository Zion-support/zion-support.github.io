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

  try {
    // Calculate shipping rates based on destination and weight
    const baseRate = 10; // Base shipping rate
    const weightMultiplier = weight * 0.5; // $0.50 per pound
    const distanceMultiplier = destination === 'US' ? 1 : 2; // International shipping costs more
    
    const calculatedRate = baseRate + (weightMultiplier * distanceMultiplier);
    
    const shippingRates = [
      {
        service: 'Standard',
        rate: calculatedRate,
        estimatedDays: destination === 'US' ? '3-5' : '7-14'
      },
      {
        service: 'Express',
        rate: calculatedRate * 1.5,
        estimatedDays: destination === 'US' ? '1-2' : '3-7'
      },
      {
        service: 'Overnight',
        rate: calculatedRate * 2,
        estimatedDays: destination === 'US' ? '1' : '2-3'
      }
    ];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      shippingRates 
    }));
  } catch (error) {
    console.error('Error calculating shipping rates:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to calculate shipping rates',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}