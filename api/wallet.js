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

  const { action, amount, currency } = req.body;

  try {
    // Wallet operations logic here
    console.log('Wallet operation:', { action, amount, currency });
    
    const result = {
      success: true,
      balance: 1000, // Mock balance
      transactionId: 'tx_' + Date.now()
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
});