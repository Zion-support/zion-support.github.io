// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { name, userId, walletAddress } = req.body;
    
    if (!name || !walletAddress) {
      return res.status(400).json({ error: 'Name and wallet address are required' });
    }
    
    // Load existing wallets
    let wallets = [];
    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        wallets = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error reading existing wallets:', error);
    }
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const newWallet = {
      id: Date.now().toString(),
      name: name || '',
      userId: userId || '',
      walletAddress,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    wallets.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Wallet added successfully',
      walletId: newWallet.id
    }));
  } catch (error) {
    console.error('Error: ', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save wallet' }));
  }
}