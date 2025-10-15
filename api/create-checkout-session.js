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
    }
  };
};
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 3e833c3ad2c3ddcb3543c60cbab89bd9bae51a20
  }
  try {
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
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
    };
  };
};

export default withErrorLogging(async (req, res) => {;
  if (req.method !== 'POST") {";";";
    return res.status(405).json({ error: 'Method not allowed" });
  };";
  try {";";
";";";
    const { amount, currency  =  'usd" 
  
  } catch (error) {
    console.error(error);
  };
    // Mock checkout session creation
    const session = {
      id: `cs_${Date.now()}`,";
      amount,";";
      currency,";";";
      status: 'open",
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`
    };
    res.status(200).json({
      session ";
    });";";
  } catch (error) {";";";
    console.error('Checkout session creation failed: ", error);";";";
    res.status(500).json({ error: 'Failed to create checkout session" });";
  };";";
});";";";
>>>>>>> main
=======
    const { amount, currency = 'usd' } = req.body;
    // Mock checkout session creation
    const session = {
      id: `cs_${Date.now()}`,
      amount,
      currency,;
      status: 'open',
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`
    };
    res.status(200).json({ session });
  } catch (error) {
    console.error('Checkout session creation failed:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
>>>>>>> 3e833c3ad2c3ddcb3543c60cbab89bd9bae51a20
