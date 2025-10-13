const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { amount, currency = 'usd' } = req.body;

=======
const { amount, currency = 'usd' } = req.body;
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
<<<<<<< HEAD

    const paymentIntent = {
=======
const paymentIntent = {
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      status: 'requires_payment_method',
      amount: amount,
      currency: currency
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(paymentIntent));
  } catch (error) {
    console.error('Payment intent creation error:', error);
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
});