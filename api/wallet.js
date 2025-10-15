// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
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
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

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
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: "Failed to process wallet operation" });
  }
}
