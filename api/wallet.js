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
  }

  const { address, type, name, userId } = req.body || {};

  if (!address || !type) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
    return;
  }

  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Check if address already exists
    const existingWallet = wallets.find(wallet => wallet.address === address);
    if (existingWallet) {
      res.statusCode = 409;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Wallet address already exists',
        message: 'This wallet address is already registered'
      }));
      return;
    }

    // Add new wallet
    const newWallet = {
      id: `wallet_${Date.now()}`,
      address,
      type,
      name: name || 'Unnamed Wallet',
      userId: userId || null,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    wallets.push(newWallet);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet successfully registered',
      wallet: newWallet
    }));

  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to register wallet',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}