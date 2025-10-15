import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { address, balance } = req.body;
    
    if (!address) {
      return res.status(400).json({ error: 'Wallet address is required' });
    }

    const file = path.join(process.cwd(), 'data', 'wallets.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Add or update wallet
    const existingIndex = wallets.findIndex(w => w.address === address);
    if (existingIndex >= 0) {
      wallets[existingIndex] = { address, balance: balance || 0, updatedAt: new Date().toISOString() };
    } else {
      wallets.push({ address, balance: balance || 0, createdAt: new Date().toISOString() });
    }

    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ success: true, message: 'Wallet updated successfully' });
  } catch (err) {
    console.error('Error in wallet handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}