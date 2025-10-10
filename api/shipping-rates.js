const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'EasyPost API key not configured' });
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {,)
        'Content-Type': 'application/json',)
        Authorization: `Bearer ${apiKey}`,)
      })
      body: JSON.stringify({)
        shipment: {)
          to_address: toAddress;)
          from_address: fromAddress;,)
          parcel),
        })
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
          from_address: fromAddress,
          to_address: toAddress,
          parcel: parcel
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(400).json({ error: data.error || 'Failed to fetch rates' });
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: data.error || 'Failed to fetch rates' }));
      return;
    }

    res.statusCode = 200;
    res.json({ success: true, rates: data.rates });
  } catch (err) {
    console.error('Shipping rates error:', err);
    res.status(500).json({ error: err.message });
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

module.exports = withSentry(handler);