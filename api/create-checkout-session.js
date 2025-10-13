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
    res.setHeader('Content-Type', 'application/json');
    }));
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Checkout session creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session',
      details: process.env.NODE_ENV === 'development' ? _error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);