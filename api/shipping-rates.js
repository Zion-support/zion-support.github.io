export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
<<<<<<< HEAD

=======
    
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
<<<<<<< HEAD
        Authorization: `Bearer ${apiKey}`,
=======
        'Authorization': `Bearer ${apiKey}`,
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel
        }
      }),
    });

    const data = await response.json();
<<<<<<< HEAD

=======
    
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
    if (!response.ok) {
      res.statusCode = 500;
      res.json({ error: data.error || 'Failed to fetch rates' });
      return;
    }

    res.statusCode = 200;
    res.json({ rates: data.rates });
  } catch (err) {
    console.error('EasyPost error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}