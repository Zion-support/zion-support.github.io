// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  try {
    const { action, walletId, amount, currency } = req.body;
    
    if (!action) {
      return res.status(400).json({ error: "Action is required" });
    }
    
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
    
    switch (action) {
      case 'create':
        const newWallet = {
          id: Date.now().toString(),
          balance: 0,
          currency: currency || 'USD',
          createdAt: new Date().toISOString()
        };
        wallets.push(newWallet);
        res.status(200).json({ success: true, wallet: newWallet });
        break;
        
      case 'get':
        const wallet = wallets.find(w => w.id === walletId);
        if (!wallet) {
          return res.status(404).json({ error: "Wallet not found" });
        }
        res.status(200).json({ success: true, wallet });
        break;
        
      default:
        res.status(400).json({ error: "Invalid action" });
    }
    
    // Save wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
  } catch (error) {
    console.error('Error processing wallet operation:', error);
    res.status(500).json({ error: "Failed to process wallet operation" });
  }
}
