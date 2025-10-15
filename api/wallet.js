// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, walletAddress, amount, currency } = req.body;

    if (!action || !walletAddress) {
      return res.status(400).json({ error: 'Action and wallet address are required' });
    }

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Add new wallet operation
    const newOperation = {
      id: Date.now(),
      action,
      walletAddress,
      amount: amount || 0,
      currency: currency || 'USD',
      timestamp: new Date().toISOString()
    };

    wallets.push(newOperation);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Wallet operation recorded successfully',
      operationId: newOperation.id
    });
  } catch (error) {
    console.error('Error processing wallet operation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default handler;
