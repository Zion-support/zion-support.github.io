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
    // Basic checkout session creation logic
    const sessionData = {
      productId,
      userId: userId || null,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Mock session creation
    const sessionId = 'cs_' + Math.random().toString(36).substr(2, 9);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      sessionId,
      sessionData
    }));
  } catch (_error) { // eslint-disable-line no-unused-vars
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session'
    }));
  }
}
