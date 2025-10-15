// API endpoint for shipping rates
export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { origin, destination, weight } = req.query;

    if (!origin || !destination || !weight) {
      return res.status(400).json({ 
        error: 'Origin, destination, and weight are required' 
      });
    }

    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = parseFloat(weight as string) * 0.5;
    const distanceMultiplier = 1.2;
    
    const rates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 100) / 100,
        estimatedDays: '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 1.5 * 100) / 100,
        estimatedDays: '1-2'
      }
    ];

    res.status(200).json({ 
      success: true,
      rates,
      origin,
      destination,
      weight
    });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ 
      error: 'Failed to calculate shipping rates',
      message: error.message 
    });
  }
}