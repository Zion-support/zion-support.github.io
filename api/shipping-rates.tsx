// API endpoint for shipping rates
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock shipping rates data
    const { weight, destination, origin } = req.body;
    
    // Use the parameters to calculate rates (mock implementation)
    const baseRate = 10.99;
    const weightMultiplier = (weight || 1) * 0.5;
    const destinationMultiplier = destination === 'international' ? 1.5 : 1;
    
    const rates = [
      {
        service: 'Standard',
        price: Math.round((baseRate + weightMultiplier) * destinationMultiplier * 100) / 100,
        days: '5-7 business days'
      },
      {
        service: 'Express',
        price: Math.round((baseRate * 1.8 + weightMultiplier) * destinationMultiplier * 100) / 100,
        days: '2-3 business days'
      },
      {
        service: 'Overnight',
        price: Math.round((baseRate * 2.7 + weightMultiplier) * destinationMultiplier * 100) / 100,
        days: '1 business day'
      }
    ];

    res.status(200).json({ rates });
  } catch (err) {
    console.error('Shipping rates error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}