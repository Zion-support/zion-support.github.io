export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { country } = req.body || {};
    
    if (!country) {
      res.statusCode = 400;
      res.json({ error: 'Country is required' });
      return;
    }

    // Mock shipping rates - in a real app, you'd calculate based on actual shipping providers
    const rates = [
      {
        service: 'Standard',
        price: 9.99,
        estimatedDays: '5-7'
      },
      {
        service: 'Express',
        price: 19.99,
        estimatedDays: '2-3'
      },
      {
        service: 'Overnight',
        price: 39.99,
        estimatedDays: '1'
      }
    ];

    res.statusCode = 200;
    res.json({ rates });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Shipping rates API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to get shipping rates' });
  }
}