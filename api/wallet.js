// API endpoint for wallet operations
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Ensure data directory exists
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Add new wallet
    const newWallet = {
      id: Date.now().toString(),
      ...req.body,
      timestamp: new Date().toISOString()
    };

    wallets.push(newWallet);

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ success: true, id: newWallet.id });
  } catch (error) {
    console.error('Error saving wallet:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
