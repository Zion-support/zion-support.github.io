// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

const wallet = async (req, res) => {
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

    // Load existing wallets
    let wallets = {};
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Initialize user wallet if it doesn't exist
    if (!wallets[userId]) {
      wallets[userId] = {
        balance: 0,
        currency: 'USD',
        transactions: [],
        createdAt: new Date().toISOString()
      };
    }

    let response = {};

    switch (action) {
      case 'getBalance':
        response = {
          balance: wallets[userId].balance,
          currency: wallets[userId].currency
        };
        break;
      
      case 'addFunds':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required' });
        }
        wallets[userId].balance += amount;
        wallets[userId].transactions.push({
          id: Date.now().toString(),
          type: 'credit',
          amount,
          currency,
          timestamp: new Date().toISOString()
        });
        response = {
          newBalance: wallets[userId].balance,
          currency: wallets[userId].currency
        };
        break;
      
      case 'deductFunds':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required' });
        }
        if (wallets[userId].balance < amount) {
          return res.status(400).json({ error: 'Insufficient funds' });
        }
        wallets[userId].balance -= amount;
        wallets[userId].transactions.push({
          id: Date.now().toString(),
          type: 'debit',
          amount,
          currency,
          timestamp: new Date().toISOString()
        });
        response = {
          newBalance: wallets[userId].balance,
          currency: wallets[userId].currency
        };
        break;
      
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    // Save updated wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    return res.status(200).json({ 
      success: true,
      ...response
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    return res.status(500).json({ error: 'Failed to process wallet operation' });
  }
};

export default withErrorLogging(wallet);
