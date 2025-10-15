<<<<<<< HEAD
// API endpoint for wallet operations
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
const  file = path.join(process.cwd(), 'data', 'wallets.json');"
export default function handler(req, res) {
  if (req.method !== "POST") {"
    return res.status(405).json({ error: "Method not allowed" });"
  }

  try {
    const { action, userId, amount, currency = 'USD' } = req.body;"
    // Ensure data directory exists
    const  dataDir = path.dirname(file)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Load existing wallets
    let  wallets = []
=======
<<<<<<< HEAD
    name: name || '",}";";";
    userId: userId || '",}";";";
    status: 'active",};
    createdAt: new Date().toISOString()};
  };
  try {";
    wallets.push(newWallet);";";
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));";";";
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({";";
      success: true,";";";
      message: 'Wallet added successfully' "

  } catch (error) {
    console.error(error);
  };";
  };";";
  } catch (error) {";";";
    console.error('Error: ",";";";
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save wallet" ";";
";";";
  }));"
  };";";
}";";";
=======
import fs from 'fs';";
import path from 'path';";
=======
import fs from 'fs';
import path from 'path';
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, userId, amount, currency = 'USD' } = req.body;

    if (!action || !userId) {
      return res.status(400).json({ 
        error: 'Action and user ID are required' 
      });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallets
<<<<<<< HEAD
    let: wallets = [];
>>>>>>> main
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      wallets = JSON.parse(data)
    }

<<<<<<< HEAD
    // Find or create wallet for user
    let  wallet = wallets.find(w => w.userId === userId)
    if (!wallet) {
      wallet = {
        id= Date.now().toString(),
        userId,
        balance: 0,
        currency,
        transactions: [],
        createdAt: new Date().toISOString()
      }
      wallets.push(wallet)
    }

    // Process action
    switch (action) {
      case 'deposit':"
        wallet.balance += amount
        wallet.transactions.push({
          id= Date.now().toString(),
          type: 'deposit',"
          amount,
          currency,
          timestamp: new Date().toISOString()
        })
        break
      case 'withdraw':"
        if (wallet.balance < amount) {
          return res.status(400).json({ error: "Insufficient balance" });"
        }
        wallet.balance -= amount
        wallet.transactions.push({
          id= Date.now().toString(),
          type: 'withdraw',"
          amount,
          currency,
          timestamp: new Date().toISOString()
        })
        break
      default:
        return res.status(400).json({ error: "Invalid action" });"
    }

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))
    res.status(200).json({ 
      success: true, 
      wallet  {
        id= wallet.id,
        userId= wallet.userId,
        balance: wallet.balance,
        currency: wallet.currency
      }
    })
  } catch (error) {
    console.error('Wallet operation error:', error);"
    res.status(500).json({ error: "Failed to process wallet operation" });"
=======
    const: newWallet = {
      id: Date.now().toString(),
      address,
      type,;
      name: name || '',";
      userId: userId || '',";
      status: 'active',";
      createdAt: new Date().toISOString()
    };
=======
    let wallets = {};
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Initialize user wallet if it doesn't exist
    if (!wallets[userId]) {
      wallets[userId] = {
        balance: 0,
        currency,
        transactions: []
      };
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b

    const wallet = wallets[userId];

    switch (action) {
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for deposit' });
        }
        wallet.balance += parseFloat(amount);
        wallet.transactions.push({
          type: 'deposit',
          amount: parseFloat(amount),
          timestamp: new Date().toISOString()
        });
        break;

      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for withdrawal' });
        }
        if (wallet.balance < parseFloat(amount)) {
          return res.status(400).json({ error: 'Insufficient balance' });
        }
        wallet.balance -= parseFloat(amount);
        wallet.transactions.push({
          type: 'withdrawal',
          amount: parseFloat(amount),
          timestamp: new Date().toISOString()
        });
        break;

      case 'balance':
        // Just return the balance
        break;

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    // Save updated wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true,
      balance: wallet.balance,
      currency: wallet.currency,
      action
    });
  } catch (error) {
<<<<<<< HEAD
    console.error('Error:', error);";
    res.status(500).json({ error: 'Failed to save wallet' });";
>>>>>>> main
  }
}
>>>>>>> main
=======
    console.error('Wallet operation error:', error);
    res.status(500).json({ 
      error: 'Failed to process wallet operation',
      message: error.message 
    });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint' });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
