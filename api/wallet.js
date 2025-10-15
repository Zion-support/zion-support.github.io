// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, walletAddress, amount, currency } = req.body;

    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallet data
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Process wallet operation
    const walletOperation = {
      id: Date.now().toString(),
      action,
      walletAddress: walletAddress || '',
      amount: amount || 0,
      currency: currency || 'USD',
      timestamp: new Date().toISOString()
    };

    wallets.push(walletOperation);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Wallet operation completed successfully',
      operationId: walletOperation.id
    });
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
}