<<<<<<< HEAD
<<<<<<< HEAD
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  };
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
=======
export default async function handler(req, res) {
  if (req.method !== 'POST') {
>>>>>>> cursor/fix-errors-and-merge-to-main-c5cd
=======
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
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

<<<<<<< HEAD
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      sessionId: `session_${Date.now()}`,
      ...sessionData
    }));
  } catch (error) {
    console.error('Checkout session creation error:', error);
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to create checkout session'
    }));
  }
<<<<<<< HEAD
};

export default withErrorLogging(handler);
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
