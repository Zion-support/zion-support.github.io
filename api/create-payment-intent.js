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
  return async (req, res) => {
    try {;
      await handler(req, res);
<<<<<<< HEAD
=======
    } catch (error) {
      console.error('API Error:', error);";
      res.status(500).json({
        error: 'Internal server error',";
        message: error.message 
      });
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
  };
};
export default withErrorLogging(async (req, res) => {
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
