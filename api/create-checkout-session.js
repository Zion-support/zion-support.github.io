<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const  withErrorLogging = (handler) => {
=======
const withErrorLogging = (handler) => {
>>>>>>> 3e833c3ad2c3ddcb3543c60cbab89bd9bae51a20
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
<<<<<<< HEAD
      console.error('API Error:', error);"
    }
  }
}
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {"
    return res.status(405).json({ error: 'Method not allowed' });"
=======
      console.error('API Error:', error);
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
    }
  };
};
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
>>>>>>> 3e833c3ad2c3ddcb3543c60cbab89bd9bae51a20
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  }
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const { amount, currency = 'usd' } = req.body;"
    // Mock checkout session creation
    const  session = {
      id= `cs_${Date.now()}`,
      amount,
      currency,
      status: 'open',"
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`
    }
    res.status(200).json({ session })
  } catch (error) {
    console.error('Checkout session creation failed=', error);"
    res.status(500).json({ error: 'Failed to create checkout session' });"
  }
})
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
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
      amount,
      currency,
      status: 'open',
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`
=======
    const { priceId, quantity = 1 } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    // Here you would integrate with your payment processor
    // For now, return a mock response
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      url: 'https://checkout.stripe.com/pay/cs_test_' + Math.random().toString(36).substr(2, 9),
      priceId,
      quantity
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
    };
    
    res.status(200).json({ session });
  } catch (error) {
<<<<<<< HEAD
    console.error('Checkout session creation failed:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
<<<<<<< HEAD
>>>>>>> 3e833c3ad2c3ddcb3543c60cbab89bd9bae51a20
=======
    console.error('Checkout session creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      message: error.message 
    });
  }
});
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint' });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
