const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    // Mock checkout session creation
    const session = {
      id: `cs_${Date.now()}`,
      object: 'checkout.session',
      amount_total: amount * 100, // Convert to cents
      currency: currency,
      payment_status: 'unpaid',
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      created: Math.floor(Date.now() / 1000),
      expires_at: Math.floor(Date.now() / 1000) + 3600, // 1 hour
      livemode: false,
      mode: 'payment',
      payment_intent: `pi_${Date.now()}`,
      status: 'open'
    };

    res.status(200).json({
      success: true,
      session: session
    });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      message: error.message 
    });
  }
});