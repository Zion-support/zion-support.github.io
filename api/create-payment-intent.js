const withErrorLogging  =  (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);

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