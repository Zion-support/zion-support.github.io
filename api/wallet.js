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
    // Find or create wallet for user
    let wallet = wallets.find(w => w.userId === userId);
    if (!wallet) {
      wallet = {
        id: Date.now().toString(),
        userId,
        balance: 0,
        currency,
        transactions: [],
        createdAt: new Date().toISOString()
      };
      wallets.push(wallet);
    }
    // Process action
    switch (action) {
      case 'deposit':
        wallet.balance += amount;
        wallet.transactions.push({
          id: Date.now().toString(),
          type: 'deposit',
          amount,
          currency,
          timestamp: new Date().toISOString()
        });
        break;
      case 'withdraw':
        if (wallet.balance < amount) {
          return res.status(400).json({ error: "Insufficient balance" });
        }
        wallet.balance -= amount;
        wallet.transactions.push({
          id: Date.now().toString(),
          type: 'withdraw',
          amount,
          currency,
          timestamp: new Date().toISOString()
        });
        break;
      default:
        return res.status(400).json({ error: "Invalid action" });
    }
    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    res.status(200).json({ 
      success: true, 
      wallet {
        id: wallet.id,
        userId: wallet.userId,
        balance: wallet.balance,
        currency: wallet.currency
      }
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: "Failed to process wallet operation" });
  }
}