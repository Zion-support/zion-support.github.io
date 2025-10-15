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
      return res.status(400).json({ error: "Action and userId are required" });
    }
    
    // Read existing wallets
    let wallets = [];
    try {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
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
    
    if (action === 'deposit' && amount > 0) {
      wallet.balance += amount;
    } else if (action === 'withdraw' && amount > 0) {
      if (wallet.balance >= amount) {
        wallet.balance -= amount;
      } else {
        return res.status(400).json({ error: 'Insufficient balance' });
      }
    }
    
    wallet.transactions.push(transaction);
    wallet.lastUpdated = new Date().toISOString();
    
    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    
    res.status(200).json({
      success: true,
      wallet: {
        userId: wallet.userId,
        balance: wallet.balance,
        currency: wallet.currency
      },
      transaction
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
