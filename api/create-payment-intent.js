import { withErrorLogging } from './withErrorLogging.cjs'
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  const { amount, currency = 'usd' } = req.body || {}
  if (!amount) {
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Amount is required' }))
    return
  }

  try {
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      client_secret: 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9),
      created: Math.floor(Date.now() / 1000)
<<<<<<< HEAD
    };

    // In a real implementation, you would:
    // 1. Create a payment intent with Stripe
    // 2. Store the payment intent in your database
    // 3. Return the client secret for frontend confirmation

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      paymentIntent
    }));
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create payment intent',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
=======
    }
    res.statusCode = 200
    res.json({ paymentIntent })
  } catch (err) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error("Error:", err)
    }
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }))
>>>>>>> origin/main
  }
}

export default withErrorLogging(handler)