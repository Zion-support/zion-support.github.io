// Removed unused withErrorLogging function

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { productId } = req.body;
  if (!productId) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
    const session = {
      status: 'pending'
    };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      session
    }));
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Failed to create checkout session'
    }));
  }
}