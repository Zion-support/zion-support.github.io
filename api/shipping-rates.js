export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { weight, destination, origin } = req.body;
    
    if (!weight || !destination || !origin) {
      return res.status(400).json({ error: 'Weight, destination, and origin are required' });
    }
    
    // Mock shipping rates calculation
    const rates = [
      {
        service: 'Standard',
        cost: Math.floor(weight * 2.5) + 10,
        days: '3-5'
      },
      {
        service: 'Express',
        cost: Math.floor(weight * 4.0) + 20,
        days: '1-2'
      },
      {
        service: 'Overnight',
        cost: Math.floor(weight * 6.0) + 35,
        days: '1'
      }
    ];
    
    res.status(200).json({ rates });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
}