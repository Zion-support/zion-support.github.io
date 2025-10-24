export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { 
      destination, 
      weight, 
      dimensions, 
      serviceType = 'standard' 
    } = req.body || {};

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
        rate: rate.rate,
        currency: rate.currency,
        deliveryDays: rate.delivery_days,
        carrier: rate.carrier
      }))
    }));

  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to fetch shipping rates' }));
  }
}

module.exports = withSentry(handler);
