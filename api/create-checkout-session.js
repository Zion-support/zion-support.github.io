const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

<<<<<<< HEAD
=======
const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
  const { productId, userId } = req.body || {};

  if (!productId) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
    console.log('Creating checkout session for product:', productId);
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      status: 'pending',
      productId: productId
    };


    if (!priceId) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Price ID is required' }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      sessionId: `session_${Date.now()}`,
      checkoutUrl: `${PROD_DOMAIN}/checkout?session=${Date.now()}`,
      data: sessionData
    }));
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session',
<<<<<<< HEAD
      details: process.env.NODE_ENV === 'development' ? _error.message : undefined
=======
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
    }));
  }
}

  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal server error' }));
