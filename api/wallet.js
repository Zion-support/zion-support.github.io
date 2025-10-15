// API endpoint for wallet operations;
import fs from 'fs';
import path from 'path';
;
const file = path.join(process.cwd(), 'data', 'wallets.json');
;
function handler(req, res) {};
  if (req.method !== "POST") {};
    return res.status(405).json({ error: "Method not allowed" });
<<<<<<< HEAD
  };
=======
  }

  try {
<<<<<<< HEAD
    const { action, amount, currency = 'USD', description } = req.body;

    if (!action) {
      return res.status(400).json({ error: "Action is required" });
    }

    // Ensure data directory exists
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Load existing wallet data
=======
    const { action, userId, amount, currency = 'USD' } = req.body;

    if (!action || !userId) {
      return res.status(400).json({ error: "Action and userId are required" });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Load existing wallets
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

<<<<<<< HEAD
    // Process wallet action
    const walletAction = {
      id: Date.now().toString(),
      action,
      amount,
      currency,
      description,
      timestamp: new Date().toISOString()
    };

    wallets.push(walletAction);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ success: true, message: "Wallet action processed successfully" });
=======
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

    // Process wallet action
    const transaction = {
      id: Date.now().toString(),
      action,
      amount: amount || 0,
      currency,
      timestamp: new Date().toISOString()
    };

    if (action === 'deposit') {
      wallet.balance += amount;
    } else if (action === 'withdraw') {
      if (wallet.balance < amount) {
        return res.status(400).json({ error: "Insufficient balance" });
      }
      wallet.balance -= amount;
    }

    wallet.transactions.push(transaction);

    // Save updated wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true,
      balance: wallet.balance,
      currency: wallet.currency,
      transaction
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: "Failed to process wallet operation" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
