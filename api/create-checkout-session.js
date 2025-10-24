const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PROD_DOMAIN = 'https://ziontechgroup.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { productId, userId, priceId, quantity = 1 } = req.body || {};

  if (!productId) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
    console.log('Creating checkout session for product:', productId);
    
    // Create a mock checkout session
    const sessionData = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      status: 'pending',
      productId: productId,
      userId: userId || null,
      timestamp: new Date().toISOString()
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      sessionId: sessionData.id,
      checkoutUrl: `${PROD_DOMAIN}/checkout?session=${sessionData.id}`,
      data: sessionData
    }));
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}
