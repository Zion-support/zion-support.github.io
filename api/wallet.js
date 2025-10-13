export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { address, type, name, userId } = req.body || {};

  if (!address || !type) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
    return;
  }

  // Validate wallet type
  const validTypes = ['bitcoin', 'ethereum', 'litecoin', 'cardano', 'polkadot'];
  if (!validTypes.includes(type.toLowerCase())) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid wallet type' }));
    return;
  }

  try {
    const newWallet = {
      id: Date.now().toString(),
      address,
      type: type.toLowerCase(),
      name: name || `${type} Wallet`,
      userId: userId || 'anonymous',
      timestamp: new Date().toISOString(),
      status: 'active'
    };

    // In a real application, you would save to a database
    // For now, we'll just log the wallet creation
    console.log('New wallet created:', newWallet);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet created successfully',
      wallet: {
        id: newWallet.id,
        address: newWallet.address,
        type: newWallet.type,
        name: newWallet.name
      }
    }));
  } catch (error) {
    console.error('Error creating wallet:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create wallet',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}