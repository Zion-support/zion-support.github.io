// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, userId, amount, currency = 'USD' } = req.body;

    if (!action || !userId) {
      return res.status(400).json({ error: 'Action and userId are required' });
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

    // Find or create wallet for user
    let wallet = wallets.find(w => w.userId === userId);
    if (!wallet) {
      wallet = {
        userId,
        balance: 0,
        currency,
        transactions: [],
        createdAt: new Date().toISOString()
      };
      wallets.push(wallet);
    }

    // Process action
    const transaction = {
      id: Date.now().toString(),
      action,
      amount: amount || 0,
      currency,
      timestamp: new Date().toISOString()
    };

    if (action === 'add') {
      wallet.balance += amount;
    } else if (action === 'subtract') {
      wallet.balance -= amount;
    }

    wallet.transactions.push(transaction);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({
      message: 'Wallet operation completed successfully',
      balance: wallet.balance,
      currency: wallet.currency
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
}