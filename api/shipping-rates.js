const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
<<<<<<< HEAD
      return res.status(500).json({ error: 'EasyPost API key not configured' });
=======
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        shipment: {
<<<<<<< HEAD
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
          from_address: fromAddress,
          to_address: toAddress,
          parcel: parcel
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
      }),
    });

    const data = await response.json();

    if (!response.ok) {
<<<<<<< HEAD
      return res.status(400).json({ error: data.error || 'Failed to fetch rates' });
=======
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: data.error || 'Failed to fetch rates' }));
      return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    }

    res.statusCode = 200;
    res.json({ success: true, rates: data.rates });
  } catch (err) {
<<<<<<< HEAD
    console.error('Shipping rates error:', err);
    res.status(500).json({ error: err.message });
=======
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }
}

module.exports = withSentry(handler);