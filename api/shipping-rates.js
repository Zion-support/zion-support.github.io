// API endpoint for shipping rates
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { destination, weight } = req.body;

    if (!destination || !weight) {
      return res.status(400).json({ error: 'Destination and weight are required' });
    }

    // Calculate shipping rate
    const distanceMultiplier = destination === 'US' ? 1 : 2;
    const baseRate = 10;
    const rate = baseRate + (weight * 0.5 * distanceMultiplier);

    res.status(200).json({ 
      success: true,
      rate: rate,
      message: 'Shipping rate calculated successfully' 
    });
  } catch (error) {
    console.error('Shipping rate error:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rate' });
  }
};