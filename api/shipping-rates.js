const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.status(500).json({ error: 'EasyPost API key not configured' });
      return;
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        shipment: {
          from_address: fromAddress,
          to_address: toAddress,
          parcel: parcel
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      res.status(400).json({ error: data.error || 'Failed to fetch rates' });
      return;
    }

    res.statusCode = 200;
    res.json({ success: true, rates: data.rates });
  } catch {
    res.status(500).json({ error: 'Failed to fetch shipping rates' });
  }
}

module.exports = withSentry(handler);