// API endpoint for wallet operations
import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(), 'data', 'wallets.json')

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { action, walletAddress, amount } = req.body;
    
    if (!walletAddress) {
      return res.status(400).json({ error: "Wallet address is required" });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Process wallet operation
    switch (action) {
      case 'create':
        if (wallets.find(w => w.address === walletAddress)) {
          return res.status(400).json({ error: "Wallet already exists" });
        }
        wallets.push({
          address: walletAddress,
          balance: 0,
          createdAt: new Date().toISOString()
        });
        break;
      
      case 'deposit':
        const wallet = wallets.find(w => w.address === walletAddress);
        if (!wallet) {
          return res.status(404).json({ error: "Wallet not found" });
        }
        wallet.balance += amount || 0;
        break;
      
      default:
        return res.status(400).json({ error: "Invalid action" });
    }

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ message: "Wallet operation successful" });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}
