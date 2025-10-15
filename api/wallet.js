const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, amount } = req.body;
    
    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    let result;
    
    switch (action) {
      case 'balance':
        result = {
          balance: 1000,
          currency: 'USD'
        };
        break;
        
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for deposit' });
        }
        result = {
          success: true,
          newBalance: 1000 + amount,
          transactionId: `dep_${Date.now()}`
        };
        break;
        
      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for withdrawal' });
        }
        if (amount > 1000) {
          return res.status(400).json({ error: 'Insufficient funds' });
        }
        result = {
          success: true,
          newBalance: 1000 - amount,
          transactionId: `wit_${Date.now()}`
        };
        break;
        
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    res.status(200).json(result);
  } catch {
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
});