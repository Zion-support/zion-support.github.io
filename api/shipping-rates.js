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
    const { destination, weight, dimensions } = req.body;

    // Mock shipping rates calculation
    const rates = [
      {
        service: 'Standard',
        cost: 15.99,
        estimatedDays: '5-7 business days'
      },
      {
        service: 'Express',
        cost: 29.99,
        estimatedDays: '2-3 business days'
      },
      {
        service: 'Overnight',
        cost: 49.99,
        estimatedDays: '1 business day'
      }
    ];

    res.status(200).json({
      success: true,
      rates: rates
    });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({
      error: 'Failed to calculate shipping rates',
      message: error.message
    });
  }
});