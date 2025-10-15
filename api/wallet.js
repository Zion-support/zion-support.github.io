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
      userId, 
      amount, 
      currency = 'usd',
      transactionType = 'deposit'
    } = req.body;
    
    // Validate required fields
    if (!userId || !amount) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Mock wallet transaction processing
    const transactionId = `txn_${Date.now()}`;
    const walletBalance = Math.random() * 10000; // Mock balance
    
    console.log('Wallet transaction:', { 
      transactionId, 
      userId, 
      amount, 
      currency,
      transactionType,
      timestamp: new Date().toISOString() 
    });
    
    // In a real application, you would update the database
    // and integrate with a payment processor
    
    res.status(200).json({
      success: true,
      transactionId: transactionId,
      balance: walletBalance,
      message: 'Transaction processed successfully'
    });
  } catch (error) {
    console.error('Wallet transaction error:', error);
    res.status(500).json({ 
      error: 'Failed to process wallet transaction',
      message: error.message 
    });
  }
});