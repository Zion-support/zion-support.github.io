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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
        Authorization: `Bearer ${apiKey}`,
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
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