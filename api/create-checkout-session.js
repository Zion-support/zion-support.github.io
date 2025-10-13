export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }
  
  const { productId, userId } = req.body || {};
  
  if (!productId) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
    // Mock checkout session creation
    const sessionId = `cs_${Date.now()}`;
    const sessionData = {
      id: sessionId,
      productId,
      userId: userId || null,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      sessionId,
      sessionData
    }));
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session'
    }));
  }
}