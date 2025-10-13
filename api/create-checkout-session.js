    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
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
<<<<<<< HEAD
    };

    // In a real implementation, you would:
    // 1. Create a session with your payment provider (Stripe, PayPal, etc.)
    // 2. Store session data in your database
    // 3. Return the session ID and checkout URL

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      sessionId: `session_${Date.now()}`,
      checkoutUrl: `${PROD_DOMAIN}/checkout?session=${Date.now()}`,
      sessionData
    }));
  } catch (error) {
    console.error('Checkout session creation error:', error);
=======
    res.setHeader('Content-Type', 'application/json');
    }));
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Checkout session creation error:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session',
<<<<<<< HEAD
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
=======
      details: process.env.NODE_ENV === 'development' ? _error.message : undefined
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
    }));
  }
}

export default withErrorLogging(handler);