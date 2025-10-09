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

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        shipment: {
          from_address: fromAddress,
          to_address: toAddress,
          parcel: parcel
        }
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: data.error || 'Failed to fetch rates' }));
      return;
    }

    res.statusCode = 200;
    res.json({ success: true, rates: data.rates });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
  }
}

module.exports = withSentry(handler);