export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { country, weight } = req.body || {};
    
    if (!country) {
      res.statusCode = 400;
      res.json({ error: 'Country is required' });
      return;
    }

    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = weight ? weight * 0.5 : 1;
    const shippingRate = baseRate * weightMultiplier;

    res.statusCode = 200;
    res.json({ 
      success: true,
      rate: shippingRate,
      currency: 'USD'
    });
  } catch (err) {
    console.error('Shipping rates API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
  }
}