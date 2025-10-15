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
    const { amount, currency = 'usd' } = req.body;
    
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Placeholder for Stripe payment intent creation
    const paymentIntent = {
      id: 'pi_test_' + Math.random().toString(36).substr(2, 9),
      amount: amount,
      currency: currency,
      status: 'requires_payment_method'
    };

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});
=======
export default withErrorLogging;
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
    // Stripe payment intent creation logic would go here
    res.status(200).json({ message: 'Payment intent created' });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
