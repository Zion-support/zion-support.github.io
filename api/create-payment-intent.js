<<<<<<< HEAD
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  };
};

async function handler(req, res) {
=======
export default async function handler(req, res) {
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const { amount, currency = 'usd' } = req.body || {};

  if (!amount) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      created: Math.floor(Date.now() / 1000)
=======
  try {
    const { amount, currency = 'usd' } = req.body || {};
    
=======
  try {
    const { amount, currency = 'usd' } = req.body || {};

>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
    if (!amount) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Amount is required' }));
      return;
    }

    // Mock payment intent creation
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Convert to cents
      currency,
<<<<<<< HEAD
      status: 'requires_payment_method'
>>>>>>> cursor/fix-errors-and-merge-to-main-c5cd
=======
      status: 'requires_payment_method',
      client_secret: 'pi_' + Math.random().toString(36).substr(2, 9) + '_secret_' + Math.random().toString(36).substr(2, 9)
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
}

export default withErrorLogging(handler);
=======
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

export default withErrorLogging(handler);
>>>>>>> cursor/fix-errors-and-merge-to-main-c5cd
=======
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
