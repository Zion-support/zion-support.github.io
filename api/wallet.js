import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'wallets.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
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
    const data = fs.readFileSync(file, 'utf8');
    const wallets = JSON.parse(data);
    
    if (wallets.find(wallet => wallet.address === address)) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Wallet address already exists' }));
      return;
    }
    
    const newWallet = {
      id: Date.now().toString(),
      address,
      type,
      name: name || '',
      userId: userId || '',
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    wallets.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet added successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save wallet' }));
  }
}