const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
<<<<<<< HEAD
      res.status(500).json({ error: 'EasyPost API key not configured' });
      return;
=======
      return res.status(500).json({ error: 'Shipping API key not configured' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
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
<<<<<<< HEAD
      res.status(400).json({ error: data.error || 'Failed to fetch rates' });
      return;
=======
      return res.status(400).json({ error: 'Failed to get shipping rates' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
    }

    res.statusCode = 200;
    res.json({ success: true, rates: data.rates });
  } catch (err) {
    console.error('Error fetching shipping rates:', err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = withSentry(handler);