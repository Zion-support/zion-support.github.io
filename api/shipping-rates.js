const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
    }

    if (!fromAddress || !toAddress || !parcel) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'fromAddress, toAddress, and parcel are required' }));
      return;
    }

    // Mock shipping rates for demo purposes
    const mockRates = [
      {
        service: 'Standard',
        carrier: 'UPS',
        rate: 12.50,
        delivery_days: 3
      },
      {
        service: 'Express',
        carrier: 'UPS',
        rate: 25.00,
        delivery_days: 1
      },
      {
        service: 'Ground',
        carrier: 'FedEx',
        rate: 15.75,
        delivery_days: 2
      }
    ];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Shipping rates retrieved successfully',
      rates: mockRates
    }));
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to get shipping rates' }));
  }
}

module.exports = withSentry(handler);