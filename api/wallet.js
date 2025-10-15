// API endpoint for wallet operations
<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== 'POST') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint working' });'ursor/fix-errors-and-merge-to-main-d2b1
  }
  const newWallet = {
    id: Date.now().toString(),
    address,
    type,
    name: name || ','
    userId: userId || ','
    status: 'active','
    createdAt: new Date().toISOString()
  }
  try {
    wallets.push(newWallet)
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true,
      message: 'Wallet added successfully' 
    }))
  } catch (error) {
    console.error('Error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to save wallet' }))
=======
    name: name || '',}
    userId: userId || '',}
    status: 'active',}
    createdAt: new Date().toISOString()}
  };
  try {
    wallets.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({
      success: true,
      message: 'Wallet added successfully' '
    }));
  } catch (error) {
    console.error('Error:', error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save wallet' }));'
  }
}