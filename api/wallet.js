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
    const { action, amount, currency = 'usd' } = req.body;
    
    // Mock wallet operations
    const wallet = {
      balance: 1000.00,
      currency,
      transactions: [
        {
          id: `txn_${Date.now()}`,
          amount,
          type: action,
          timestamp: new Date().toISOString()
        }
      ]
    };
    
    res.status(200).json({ wallet });
  } catch (error) {
    console.error('Wallet operation failed:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
});
