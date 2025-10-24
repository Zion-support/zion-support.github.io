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
    res.end(JSON.stringify({ error: 'Action is required' }));

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));

        // Mock payment intent creation
        const paymentIntent = {
          id: 'pi_' + Math.random().toString(36).substr(2, 9),
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: Math.floor(Date.now() / 1000)
        };

        res.statusCode = 200;
        res.end(JSON.stringify({ paymentIntent }));
        break;

      case 'get_balance': {
        // Mock balance retrieval
        const balance = {
          currency,
          amount: 0, // In a real app, this would come from a database
          lastUpdated: new Date().toISOString()
        };

        res.end(JSON.stringify({ balance }));

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
            id: 'tx_2',
            amount: -50.00,
            type: 'debit',
            description: 'Service fee',
            timestamp: new Date(Date.now() - 86400000).toISOString()
        ];

        res.end(JSON.stringify({ transactions }));

      case 'add_funds': {
        if (!amount) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for adding funds' }));
          return;
        }

        // In a real app, this would update the database
        const transaction = {
          id: 'tx_' + Math.random().toString(36).substr(2, 9),
          amount: Math.round(amount * 100),
          currency,
          type: 'credit',
          status: 'completed',
          created: Math.floor(Date.now() / 1000)
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Funds added successfully',
          transaction
        }));
        break;
      }

      case 'withdraw_funds': {
        if (!amount) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for withdrawal' }));
          return;
        }

        // In a real app, this would check balance and update the database
        const transaction = {
          id: 'tx_' + Math.random().toString(36).substr(2, 9),
          amount: Math.round(amount * 100),
          currency,
          type: 'debit',
          status: 'completed',
          created: Math.floor(Date.now() / 1000)
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Funds withdrawn successfully',
          transaction
        }));
        break;
      }

      default: {
        res.end(JSON.stringify({ error: 'Invalid action' }));
  } catch (error) {
    console.error('Wallet API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = withSentry(handler);
