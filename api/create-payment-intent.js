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
