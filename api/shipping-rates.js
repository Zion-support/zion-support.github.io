<<<<<<< HEAD
export default async function handler(req, res) {
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> main
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { destination, weight } = req.body || {};
  
  if (!destination || !weight) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Destination and weight are required' }));
    return;
  }

  try {
    // Calculate shipping rates (mock calculation)
    const baseRate = 10;
    const weightMultiplier = parseFloat(weight) * 0.5;
    const destinationMultiplier = destination === 'international' ? 2 : 1;
    
    const rates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * destinationMultiplier),
        days: destination === 'international' ? '7-14' : '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * destinationMultiplier * 1.5),
        days: destination === 'international' ? '3-7' : '1-2'
      }
    ];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      rates,
      destination,
      weight
    }));

=======
  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel
        }
      })
    });

    if (!response.ok) {
      throw new Error(`EasyPost API error: ${response.status}`);
    }

    const data = await response.json();
    const rates = data.shipment.rates || [];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Shipping rates retrieved successfully',
      rates: rates.map(rate => ({
        id: rate.id,
        service: rate.service,
        carrier: rate.carrier,
        rate: rate.rate,
        currency: rate.currency,
        deliveryDays: rate.delivery_days
      }))
    }));
>>>>>>> main
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to calculate shipping rates' }));
  }
}
=======
    res.end(JSON.stringify({ error: 'Failed to retrieve shipping rates' }));
  }
}

module.exports = withSentry(handler);
>>>>>>> main
