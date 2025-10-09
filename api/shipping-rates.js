const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Shipping API key not configured' });
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
          parcel: parcel
        }
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(400).json({ error: 'Failed to get shipping rates' });
    }

    res.statusCode = 200;
    res.json({/* TODO: Fix JSX expression */})
  s: data.rates });
  } catch (err) {/* TODO: Fix JSX expression */}
  r: err.message });
  }
}

module.exports = withSentry(handler);
`