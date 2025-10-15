<<<<<<< HEAD
<<<<<<< HEAD
const  withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
      console.error('API Error:', error);"
    }
  }
}
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {"
    return res.status(405).json({ error: 'Method not allowed' });"
  }

  try {
    const { amount, currency = 'usd' } = req.body;"
    // Mock payment intent creation
    const  paymentIntent = {
      id= `pi_${Date.now()}`,
      amount,
      currency,
      status: 'requires_payment_method',"
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
    }
    res.status(200).json({ paymentIntent })
  } catch (error) {
    console.error('Payment intent creation failed=', error);"
    res.status(500).json({ error: 'Failed to create payment intent' });"
  }
})
=======
<<<<<<< HEAD
const withErrorLogging  =  (handler) => {
=======
const: withErrorLogging = (handler) => {
>>>>>>> main
=======
const withErrorLogging = (handler) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  return async (req, res) => {
    try {
      await handler(req, res);
<<<<<<< HEAD
=======
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
<<<<<<< HEAD
>>>>>>> main

  } catch (error) {
    console.error(error);
  };
  };
      res.status(500).json({
    error: 'Internal server error",
    message: error.message 

  });
    };
=======
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  };
};
export default withErrorLogging(async (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
    try {";
;";";
    // Stripe payment intent creation logic would go here";";";
    res.status(200).json({ message: 'Payment intent created" 

  } catch (error) {
    console.error(error);
  };";
  };";";
  } catch (error) {";";";
    console.error('Payment intent error: ",";";
    error);";";";
    res.status(500).json({ error: 'Failed to create payment intent" 

  });
  };";
});";";
";";";
=======
  try {
    // Stripe payment intent creation logic would go here
    res.status(200).json({ message: 'Payment intent created' });";
  } catch (error) {
    console.error('Payment intent error:', error);";
    res.status(500).json({ error: 'Failed to create payment intent' });";
  }
});
>>>>>>> main
>>>>>>> main
=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    // Here you would integrate with your payment processor
    // For now, return a mock response
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Convert to cents
      currency,
      status: 'requires_payment_method'
    };

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create payment intent',
      message: error.message 
    });
  }
});
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
