// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, userId, amount } = req.body;
    
    if (!action || !userId) {
      return res.status(400).json({ error: "Action and userId are required" });
    }

    // Read existing wallets
    let wallets = {};
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Initialize wallet if doesn't exist
    if (!wallets[userId]) {
      wallets[userId] = { balance: 0, transactions: [] };
    }

    // Process wallet operations
    switch (action) {
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: "Valid amount required for deposit" });
        }
        wallets[userId].balance += amount;
        wallets[userId].transactions.push({
          type: 'deposit',
          amount,
          timestamp: new Date().toISOString()
        });
        break;
      
      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: "Valid amount required for withdrawal" });
        }
        if (wallets[userId].balance < amount) {
          return res.status(400).json({ error: "Insufficient balance" });
        }
        wallets[userId].balance -= amount;
        wallets[userId].transactions.push({
          type: 'withdraw',
          amount,
          timestamp: new Date().toISOString()
        });
        break;
      
      case 'balance':
        return res.status(200).json({ balance: wallets[userId].balance });
      
      default:
        return res.status(400).json({ error: "Invalid action" });
    }

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      message: "Wallet operation successful",
      balance: wallets[userId].balance 
    });
  } catch (error) {
    console.error('Wallet error:', error);
    res.status(500).json({ error: "Failed to process wallet operation" });
  }
}

export default handler;