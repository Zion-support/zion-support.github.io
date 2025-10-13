import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'wallets.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { address, type, name, userId } = req.body;
  if (!address || !type) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).end(JSON.stringify({ error: 'Address and type are required' }));
    return;
  }

  let wallets = [];
  try {
    const data = fs.readFileSync(file, 'utf8');
    wallets = JSON.parse(data);
  } catch (error) {
    console.error('Error:', error);
  }

  if (wallets.find(wallet => wallet.address === address)) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).end(JSON.stringify({ error: 'Wallet address already exists' }));
    return;
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

  try {
    wallets.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify({
      success: true,
      message: 'Wallet added successfully'
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({ error: 'Failed to save wallet' }));
  }
}