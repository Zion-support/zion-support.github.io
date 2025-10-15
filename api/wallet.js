// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

function handler(req, res) {
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
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Find or create user wallet
    let userWallet = wallets.find(wallet => wallet.userId === userId);
    if (!userWallet) {
      userWallet = {
        userId,
        balance: 0,
        currency,
        transactions: [],
        createdAt: new Date().toISOString()
      };
      wallets.push(userWallet);
    }

    // Process wallet action
    switch (action) {
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: "Valid amount is required for deposit" });
        }
        userWallet.balance += amount;
        userWallet.transactions.push({
          id: Date.now().toString(),
          type: 'deposit',
          amount,
          currency,
          timestamp: new Date().toISOString()
        });
        break;
        
      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: "Valid amount is required for withdrawal" });
        }
        if (userWallet.balance < amount) {
          return res.status(400).json({ error: "Insufficient balance" });
        }
        userWallet.balance -= amount;
        userWallet.transactions.push({
          id: Date.now().toString(),
          type: 'withdrawal',
          amount,
          currency,
          timestamp: new Date().toISOString()
        });
        break;
        
      case 'balance':
        // Just return current balance
        break;
        
      default:
        return res.status(400).json({ error: "Invalid action" });
    }

    // Save wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true, 
      balance: userWallet.balance,
      currency: userWallet.currency,
      message: `Wallet ${action} successful`
    });

  } catch (error) {
    console.error('Wallet error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default handler;
