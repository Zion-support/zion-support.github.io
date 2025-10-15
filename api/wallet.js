// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, userId, amount, currency = 'USD', name } = req.body;

    if (!action || !userId) {
      return res.status(400).json({ error: 'Action and userId are required' });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Load existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    let wallet = wallets.find(w => w.userId === userId);

    switch (action) {
      case 'create':
        if (wallet) {
          return res.status(400).json({ error: 'Wallet already exists for this user' });
        }
        wallet = {
          id: Date.now().toString(),
          userId,
          name: name || 'Default Wallet',
          balance: 0,
          currency,
          status: 'active',
          createdAt: new Date().toISOString()
        };
        wallets.push(wallet);
        break;

      case 'deposit':
        if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
        }
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required' });
        }
        wallet.balance += amount;
        break;

      case 'withdraw':
        if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
        }
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required' });
        }
        if (wallet.balance < amount) {
          return res.status(400).json({ error: 'Insufficient balance' });
        }
        wallet.balance -= amount;
        break;

      case 'balance':
        if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
        }
        return res.status(200).json({ 
          success: true, 
          balance: wallet.balance,
          currency: wallet.currency
        });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    // Save updated wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true, 
      message: `Wallet ${action} successful`,
      wallet: wallet
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ 
      error: 'Failed to process wallet operation',
      message: error.message 
    });
  }
}