import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  try {
    const { productId, userId } = req.body || {};

    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    // Create checkout session logic here
    const session = {
      id: 'session_' + Date.now(),
      productId,
      userId,
      status: 'pending'
    };

    res.status(200).json({ session });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default withErrorLogging(handler);