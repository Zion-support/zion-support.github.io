const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      destination, 
      weight, 
      dimensions,
      serviceType = 'standard'
    } = req.body;
    
    // Validate required fields
    if (!destination || !weight) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Mock shipping rate calculation
    const baseRate = 10; // Base shipping rate
    const weightMultiplier = weight * 0.5; // $0.50 per pound
    const distanceMultiplier = destination === 'international' ? 2 : 1;
    const serviceMultiplier = serviceType === 'express' ? 1.5 : 1;
    
    const totalRate = (baseRate + weightMultiplier) * distanceMultiplier * serviceMultiplier;
    
    const shippingRates = [
      {
        service: 'Standard',
        rate: totalRate,
        estimatedDays: destination === 'international' ? '7-14' : '3-5'
      },
      {
        service: 'Express',
        rate: totalRate * 1.5,
        estimatedDays: destination === 'international' ? '3-7' : '1-2'
      }
    ];
    
    res.status(200).json({
      success: true,
      rates: shippingRates
    });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ 
      error: 'Failed to calculate shipping rates',
      message: error.message 
    });
  }
});