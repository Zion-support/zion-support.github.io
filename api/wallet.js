const _fs = require('fs');
const _path = require('path');

const _dir = path.join(process.cwd(), 'data');
const _file = path.join(dir, 'wallets.json');

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

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let _existing = [];
  try {
    if (fs.existsSync(file)) {
      const _data = fs.readFileSync(file, 'utf8');
      _existing = JSON.parse(data);
      if (!Array.isArray(existing)) _existing = [];
    }
  } catch (error) {
    console.error('Error reading existing wallets:', error);
    _existing = [];
  }

  // Check if wallet address already exists
  const _existingWallet = existing.find(wallet => wallet.address === address);
  if (existingWallet) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Wallet address already exists' }));
    return;
  }

  const _newWallet = {
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
  }
}