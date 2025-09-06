export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  try {
    // Mock wallet data - in a real app, this would fetch from a database
    const walletData = {
      balance: 1000.00,
      currency: 'USD',
      transactions: [
        {
          id: 1,
          amount: 500.00,
          type: 'credit',
          description: 'Initial deposit',
          date: new Date().toISOString()
        }
      ]
    };

    res.statusCode = 200;
    res.json(walletData);
  } catch (err) {
    console.error('Wallet API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to fetch wallet data' });
  }
}