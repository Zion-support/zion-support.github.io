<<<<<<< HEAD
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, amount, currency } = req.body;

  try {
    // Wallet operations logic here
    console.log('Wallet operation:', { action, amount, currency });
    
    const result = {
      success: true,
      balance: 1000, // Mock balance
      transactionId: 'tx_' + Date.now()
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
});
=======
import fs from 'fs''
import path from 'path''
const dir = path.join(process.cwd(), 'data''
const file = path.join(dir, 'wallets.json''
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Address and type are required'',}
    const data = fs.readFileSync(file, 'utf8''
    console.error('"Error": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Wallet address already exists'',
    "name": name || ''',
    "userId": userId || ''',
    "status": 'active'',
    res.setHeader('Content-Type', 'application/json''
    "message": 'Wallet added successfully'',
    console.error('"Error": '',
    res.setHeader('Content-Type', 'application/json'';
    res.end(JSON.stringify({ "error": 'Failed to save wallet''
>>>>>>> origin/main
