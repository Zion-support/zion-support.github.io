const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
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
    const { action, amount, currency = 'USD' } = req.body;

    if (!action) {
      return res.status(400).json({
        error: 'Missing required field: action'
      });
    }

    // Mock wallet operations
    let result;
    switch (action) {
      case 'balance':
        result = {
          balance: 1000.00,
          currency: currency
        };
        break;
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({
            error: 'Invalid amount for deposit'
          });
        }
        result = {
          success: true,
          newBalance: 1000.00 + amount,
          currency: currency
        };
        break;
      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({
            error: 'Invalid amount for withdrawal'
          });
        }
        if (amount > 1000.00) {
          return res.status(400).json({
            error: 'Insufficient funds'
          });
        }
        result = {
          success: true,
          newBalance: 1000.00 - amount,
          currency: currency
        };
        break;
      default:
        return res.status(400).json({
          error: 'Invalid action. Supported actions: balance, deposit, withdraw'
        });
    }

    res.status(200).json({
      success: true,
      ...result
    });

  } catch (error) {
    console.error('Wallet API error:', error);
    res.status(500).json({
      error: 'Failed to process wallet operation',
      message: error.message
    });
  }
});