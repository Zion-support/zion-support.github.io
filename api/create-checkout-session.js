const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
<<<<<<< HEAD
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
<<<<<<< HEAD
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
=======
      res.status(500).json({ error: 'Internal server error' });
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
    }
  };
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
<<<<<<< HEAD
    // Placeholder for Stripe checkout session creation
    const { amount, currency = 'usd' } = req.body;
    
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // In a real implementation, you would create a Stripe checkout session here
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      url: 'https://checkout.stripe.com/test',
      amount: amount,
      currency: currency
    };

    res.status(200).json({ session });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
=======
export default withErrorLogging;
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
    // Stripe checkout session creation logic would go here
    res.status(200).json({ message: 'Checkout session created' });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
