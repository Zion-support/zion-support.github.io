// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, amount, walletId } = req.body;
    
    if (!action) {
      return res.status(400).json({ error: "Action is required" });
    }

    // Create data directory if it doesn't exist
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

    // Mock wallet operations
    const result = {
      success: true,
      action,
      amount: amount || 0,
      walletId: walletId || Date.now().toString(),
      timestamp: new Date().toISOString()
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: "Failed to process wallet operation" });
  }
}
