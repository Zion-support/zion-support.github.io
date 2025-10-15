

const file = path.join(process.cwd(), 'data', 'wallets.json');
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, userId, amount, currency = 'USD' } = req.body;
    if (!action || !userId) {
      return res.status(400).json({ 
        error: 'Action and user ID are required' 
      });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallets

    const wallet = wallets[userId];
    switch (action) {
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for deposit' });
        }
        wallet.balance += parseFloat(amount);
        wallet.transactions.push({
          type: 'deposit',
          amount: parseFloat(amount),
          timestamp: new Date().toISOString()
        });
        break;
      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for withdrawal' });
        }
        if (wallet.balance < parseFloat(amount)) {
          return res.status(400).json({ error: 'Insufficient balance' });
        }
        wallet.balance -= parseFloat(amount);
        wallet.transactions.push({
          type: 'withdrawal',
          amount: parseFloat(amount),
          timestamp: new Date().toISOString()
        });
        break;
      case 'balance':
        // Just return the balance
        break;
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    // Save updated wallets
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    res.status(200).json({ 
      success: true,
      balance: wallet.balance,
      currency: wallet.currency,
      action
    });
  } catch (error) {

