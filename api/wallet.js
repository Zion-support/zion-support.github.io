const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { walletAddress, userId, action } = req.body || {};

    if (!walletAddress || !action) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Wallet address and action are required' }));
      return;
    }

    // Process wallet action
    // In a real application, you would:
    // 1. Validate the wallet address
    // 2. Connect to blockchain
    // 3. Perform the requested action (connect, disconnect, etc.)
    // 4. Update user's wallet information in database

    const walletData = {
      address: walletAddress,
      userId: userId || null,
      action,
      timestamp: new Date().toISOString(),
      status: 'success'
    };

    console.log('Wallet action processed:', walletData);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet action completed successfully',
      data: walletData
    }));

  } catch (error) {
    console.error('Wallet action error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process wallet action',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

module.exports = withSentry(handler);