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

  const { amount, currency = 'usd' } = req.body;
  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
    const paymentIntent = {
      status: 'requires_payment_method',
      amount: amount,
      currency: currency
    };

<<<<<<< HEAD
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(paymentIntent));
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
=======
    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch {
    //     res.statusCode = 500;
    res.json({ error: 'Failed to create payment intent' });
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }
});