const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
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
        estimatedDays: '3-5'
      },
      {
        service: 'Express',
        cost: 25.99,
        estimatedDays: '1-2'
      },
      {
        service: 'Overnight',
        cost: 45.99,
        estimatedDays: '1'
      }
    ];
    
    res.status(200).json({ rates });
  } catch (error) {
    console.error('Shipping rates calculation failed:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
});
