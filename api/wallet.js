const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'wallets.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
<<<<<<< HEAD
  }

  const { address, type, name, userId } = req.body || {};

  if (!address || !type) {
    return res.status(400).json({ error: 'Address and type are required' });
=======
>>>>>>> origin/main
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
<<<<<<< HEAD
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
=======
    const { walletAddress, userId, action } = req.body || {};

    if (!walletAddress || !action) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Wallet address and action are required' }));
      return;
>>>>>>> origin/main
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
<<<<<<< HEAD
    console.error('Error reading existing wallets:', error);
    existing = [];
  }

  // Check if wallet address already exists
  const existingWallet = existing.find(wallet => wallet.address === address);
  if (existingWallet) {
    return res.status(400).json({ error: 'Wallet address already exists' });
  }

  const newWallet = {
    id: Date.now().toString(),
    address,
    type,
    name: name || '',
    userId: userId || '',
    timestamp: new Date().toISOString(),
    status: 'active'
  };

  existing.push(newWallet);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet added successfully',
      id: newWallet.id
    }));
  } catch (error) {
    console.error('Error saving wallet:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save wallet' }));
=======
    console.error('Wallet action error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process wallet action',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
>>>>>>> origin/main
  }
}