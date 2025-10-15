<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { country, weight, dimensions } = req.body;

    if (!country) {
      return res.status(400).json({ error: 'Country is required' });
    }

    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = (weight || 1) * 0.5;
    const countryMultiplier = country === 'US' ? 1 : 1.5;
    
    const rates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * countryMultiplier * 100) / 100,
        days: '5-7 business days'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * countryMultiplier * 1.5 * 100) / 100,
        days: '2-3 business days'
      },
      {
        service: 'Overnight',
        cost: Math.round((baseRate + weightMultiplier) * countryMultiplier * 2 * 100) / 100,
        days: '1 business day'
      }
    ];

    res.status(200).json({ 
      success: true,
      rates,
      country,
      weight: weight || 1
    });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
}
=======
// API endpoint for shipping rates

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
