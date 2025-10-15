<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'wallets.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(file))) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { address, type, name, userId } = req.body;

    if (!address || !type) {
      return res.status(400).json({ error: 'Address and type are required' });
    }

    // Read existing wallets
    let wallets = [];
=======
// API endpoint for wallet operations

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

<<<<<<< HEAD
    const newWallet = {
      id: Date.now().toString(),
      address,
      type,
      name: name || '',
      userId: userId || '',
      status: 'active',
      createdAt: new Date().toISOString()
    };

    wallets.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    
    res.status(200).json({ 
      success: true,
      message: 'Wallet added successfully',
      walletId: newWallet.id
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to save wallet' });
  }
}
=======

  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
