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

<<<<<<< HEAD
  const { address, type, userId } = req.body;
  
=======
  const { address, type, name, userId } = req.body;
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
  if (!address || !type) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
    return;
  }

<<<<<<< HEAD
  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing data
    let data = [];
    if (fs.existsSync(file)) {
      const fileData = fs.readFileSync(file, 'utf8');
      data = JSON.parse(fileData);
    }

    // Add new wallet
    const newWallet = {
      id: Date.now(),
      address,
      type,
      userId: userId || null,
      status: 'active',
      createdAt: new Date().toISOString()
    };

    data.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet added successfully',
      walletId: newWallet.id
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to add wallet' }));
=======
    res.end(JSON.stringify({ error: 'Failed to save wallet' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
  }
}