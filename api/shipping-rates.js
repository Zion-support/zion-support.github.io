const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { destination, weight, dimensions } = req.body;
    
    // Mock shipping rates calculation
    const baseRate = 10; // Base shipping rate
    const weightMultiplier = weight * 0.5; // $0.50 per pound
    const distanceMultiplier = destination === 'international' ? 2 : 1;
    
    const shippingRates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier),
        estimatedDays: destination === 'international' ? '7-14' : '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 1.5),
        estimatedDays: destination === 'international' ? '3-7' : '1-2'
      },
      {
        service: 'Overnight',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 2),
        estimatedDays: '1'
      }
    ];

    res.status(200).json({ shippingRates });
  } catch (error) {
    console.error('Shipping rates calculation failed:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
});
