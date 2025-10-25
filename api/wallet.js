<<<<<<< HEAD
import fs from 'fs'';
import path from 'path'';
import fs from "fs"";
import path from "path"";
const dir = path.join(process.cwd(), 'data'';
const file = path.join(dir, 'wallets.json''
if (req.method !== 'POST''
res.setHeader('Content-Type', 'application/json''
res.end(JSON.stringify({ "error": 'Method not allowed'',;'"
res.setHeader('Content-Type', 'application/json'';";'"
res.end(JSON.stringify({ "error": 'Address and type are required''}'";
const data = fs.readFileSync(file, 'utf8'';";'"
console.error('"Error": '',;'"
res.setHeader('Content-Type', 'application/json'';";'"
res.end(JSON.stringify({ "error": 'Wallet address already exists'',";'"
    "name": name || ''',";'"
    "userId": userId || ''',";'"
    "status": 'active'',;'"
res.setHeader('Content-Type', 'application/json''";'"
    "message": 'Wallet added successfully'',;";'"
console.error('"Error": '',;'"
res.setHeader('Content-Type', 'application/json'';");'"
    res.end(JSON.stringify({ "error": 'Failed to save wallet'')";'";
const dir = path.join(process.cwd(), "data"";
const file = path.join(dir, "wallets.json""
if (req.method !== "POST"" res.setHeader("Content-Type", "application/json""
res.end(JSON.stringify({ "error": "Method not allowed"" res.setHeader("Content-Type", "application/json""
res.end(JSON.stringify({ "error": "Address and type are required""}
    const data = fs.readFileSync(file, "utf8"" console.error(""Error": "" res.setHeader("Content-Type", "application/json""
res.end(JSON.stringify({ "error": "Wallet address already exists""
    "name": name || """
    "userId": userId || """
    "status": "active"" res.setHeader("Content-Type", "application/json""
    "message": "Wallet added successfully"" console.error(""Error": "" res.setHeader("Content-Type", "application/json""
    res.end(JSON.stringify({ "error": "Failed to save wallet"')
}}}}}})))))))))))))))))))))))))))))))))))
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Action is required' }));
    return;
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));
          return;
        }

        // Mock payment intent creation
        const paymentIntent = {
          id: `pi_${Date.now()}`,
          amount: Math.round(amount * 100), // Convert to cents
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ paymentIntent }));
        break;
      }

      case 'get_balance': {
        // Mock balance retrieval
        const balance = {
          available: 1000.00,
          pending: 0.00,
          currency: currency.toUpperCase()
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ balance }));
        break;
      }

      case 'get_transactions': {
        // Mock transaction history
        const transactions = [
          {
            id: 'tx_1',
            amount: 100.00,
            currency: currency.toUpperCase(),
            type: 'credit',
            description: 'Payment received',
            timestamp: new Date().toISOString()
          },
          {
            id: 'tx_2',
            amount: -50.00,
            currency: currency.toUpperCase(),
            type: 'debit',
            description: 'Service fee',
            timestamp: new Date(Date.now() - 86400000).toISOString()
          }
        ];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ transactions }));
        break;
      }

      default: {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid action' }));
        break;
      }
    }
  } catch (error) {
    console.error('Wallet API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
