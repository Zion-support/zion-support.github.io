const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.statusCode = 500;
      res.json({ error: 'EasyPost API key not configured' });
      return;
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      res.statusCode = response.status;
      res.json({ error: data.error || 'Failed to get shipping rates' });
      return;
    }

    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to get shipping rates' });
  }
}

module.exports = withSentry(handler);
