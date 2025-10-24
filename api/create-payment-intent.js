
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
<<<<<<< HEAD
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'usd' } = req.body;

  try {
    // Create payment intent logic here
    const paymentIntent = {
      id: 'pi_' + Date.now(),
      amount,
      currency,
      status: 'requires_payment_method'
    };

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
})
=======
      // eslint-disable-next-line no-console()
    console.error('API "Error": '',
      res.setHeader('Content-Type', 'application/json''
      res.end(JSON.stringify({ "error": 'Internal server error'',
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',}
  const { amount, currency = 'usd''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Amount is required'',
      "status": 'requires_payment_method'',
    res.setHeader('Content-Type', 'application/json''
    console.error('Payment intent creation "error": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Failed to create payment intent''
>>>>>>> origin/main
