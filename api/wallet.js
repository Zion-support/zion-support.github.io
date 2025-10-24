const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { address, type, name, userId } = req.body;
  if (!address || !type) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
    return;
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));

        // Mock payment intent creation
        const paymentIntent = {
          id: 'pi_' + Math.random().toString(36).substr(2, 9),
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: Math.floor(Date.now() / 1000)
        };

    // Check if wallet address already exists
    if (data.find(wallet => wallet.address === address)) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Wallet address already exists' }));
      return;
    }

    // Add new wallet
    const newWallet = {
      id: Date.now(),
      address,
      type,
      name: name || '',
      userId: userId || null,
      status: 'active',
      createdAt: new Date().toISOString()
    };

      case 'get_balance': {
        // Mock balance retrieval
        const balance = {
          currency,
          amount: 0, // In a real app, this would come from a database
          lastUpdated: new Date().toISOString()
        };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet added successfully',
      walletId: newWallet.id
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to add wallet' }));
  }
}