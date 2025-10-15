// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ _error: "Method not allowed" });
  }

  const { address, type, name, userId } = req.body;
  if (!address || !type) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
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

  try {
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
