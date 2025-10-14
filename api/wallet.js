export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { action, amount, currency = 'USD' } = req.body;
    
    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }
    
    // Mock wallet operations
    const wallet = {
      id: 'wallet_' + Math.random().toString(36).substr(2, 9),
      balance: Math.floor(Math.random() * 10000),
      currency,
      status: 'active'
    };
    
    console.log('Wallet operation:', { action, amount, currency });
    
    res.status(200).json(wallet);
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
}