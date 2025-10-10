import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { action, userId, amount, currency = 'USD' } = req.body || {};

  if (!action || !userId) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Action and user ID are required' 
    }));
    return;
  }

  try {
    let result;
    
    switch (action) {
      case 'create':
        result = {
          walletId: 'wallet_' + Date.now(),
          userId,
          balance: 0,
          currency,
          status: 'active',
          createdAt: new Date().toISOString()
        };
        break;
        
      case 'deposit':
        if (!amount || amount <= 0) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Valid amount is required for deposit' }));
          return;
        }
        result = {
          transactionId: 'txn_' + Date.now(),
          userId,
          type: 'deposit',
          amount: parseFloat(amount),
          currency,
          status: 'completed',
          processedAt: new Date().toISOString()
        };
        break;
        
      case 'withdraw':
        if (!amount || amount <= 0) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Valid amount is required for withdrawal' }));
          return;
        }
        result = {
          transactionId: 'txn_' + Date.now(),
          userId,
          type: 'withdrawal',
          amount: parseFloat(amount),
          currency,
          status: 'pending',
          processedAt: new Date().toISOString()
        };
        break;
        
      case 'balance':
        result = {
          userId,
          balance: 0, // This would be fetched from database
          currency,
          lastUpdated: new Date().toISOString()
        };
        break;
        
      default:
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid action specified' }));
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Wallet operation completed successfully',
      result
    }));
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process wallet operation' }));
  }
}

export default withErrorLogging(handler);