// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { action, userId, amount } = req.body;
  
  if (!action || !userId) {
    return res.status(400).json({ error: "Action and userId are required" });
  }

  try {
    let wallets = [];
    try {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    let wallet = wallets.find(w => w.userId === userId);
    
    if (!wallet) {
      wallet = {
        userId,
        balance: 0,
        transactions: [],
        createdAt: new Date().toISOString()
      };
      wallets.push(wallet);
    }

    if (action === 'add' && amount) {
      wallet.balance += amount;
      wallet.transactions.push({
        type: 'credit',
        amount,
        timestamp: new Date().toISOString()
      });
    } else if (action === 'subtract' && amount) {
      if (wallet.balance >= amount) {
        wallet.balance -= amount;
        wallet.transactions.push({
          type: 'debit',
          amount,
          timestamp: new Date().toISOString()
        });
      } else {
        return res.status(400).json({ error: 'Insufficient balance' });
      }
    }

    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({
      success: true,
      balance: wallet.balance,
      message: 'Wallet operation completed'
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
