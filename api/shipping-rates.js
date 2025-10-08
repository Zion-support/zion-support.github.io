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
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`EasyPost API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.statusCode = 200;
    res.json({ success: true, rates: data.rates || [] });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to fetch shipping rates' });
  }
}

module.exports = withSentry(handler);