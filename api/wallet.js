const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'wallets.json');
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
<<<<<<< HEAD
    return;
  }

  const { address, type, name, userId } = req.body || {};

=======
    return};
;
const { address, type, name, userId } = req.body || {};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!address || !type) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
<<<<<<< HEAD
    return;
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error reading existing wallets:', error);
    existing = [];
  }

  // Check if wallet address already exists
  const existingWallet = existing.find(wallet => wallet.address === address);
=======
    return};
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })};
;
let existing = [];
  try {
    if (fs.existsSync(file)) {;
const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = []};
  } catch (error) {
    // console.error removed for production
existing = []};
  // Check if wallet address already exists;
const existingWallet = existing.find(wallet => wallet.address === address);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (existingWallet) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Wallet address already exists' }));
<<<<<<< HEAD
    return;
  }

  const newWallet = {
=======
    return};
;
const newWallet = {
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    id: Date.now().toString(),
    address,
    type,
    name: name || '',
    userId: userId || '',
    timestamp: new Date().toISOString(),
    status: 'active'
  };
  existing.push(newWallet);
  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet added successfully',
      id: newWallet.id
    }));
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error saving wallet:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to save wallet' }));
  }
}
=======
    res.end(JSON.stringify({ error: 'Failed to save wallet' }))};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
