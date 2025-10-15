// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const fileContent = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(fileContent);
    }

    // Add new wallet
    const newWallet = {
      ...req.body,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      balance: 0
    };

    wallets.push(newWallet);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({
      success: true,
      message: 'Wallet created successfully',
      wallet: newWallet
    });
  } catch (error) {
    console.error('Wallet error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
}

export default handler;