
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
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
    // Create checkout session logic here
    const session = {
      id: 'session_' + Date.now(),
      amount,
      currency,
      status: 'open'
    };

    res.status(200).json({ session });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
})