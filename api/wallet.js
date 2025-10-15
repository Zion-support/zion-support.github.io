// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, walletId, amount } = req.body;

    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Process wallet action
    switch (action) {
      case 'create':
        const newWallet = {
          id: Date.now().toString(),
          balance: 0,
          createdAt: new Date().toISOString()
        };
        wallets.push(newWallet);
        break;
      
      case 'update':
        if (!walletId || !amount) {
          return res.status(400).json({ error: 'Wallet ID and amount are required' });
        }
        const wallet = wallets.find(w => w.id === walletId);
        if (wallet) {
          wallet.balance = amount;
        }
        break;
      
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    // Save wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true,
      message: 'Wallet operation completed successfully' 
    });
  } catch (error) {
    console.error('Error processing wallet operation:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
}