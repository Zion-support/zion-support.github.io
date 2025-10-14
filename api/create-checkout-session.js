export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { priceId, quantity = 1 } = req.body;
    
    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }
    
    // Mock checkout session creation
    const session = {
      id: 'cs_' + Math.random().toString(36).substr(2, 9),
      url: `https://checkout.stripe.com/pay/${Math.random().toString(36).substr(2, 9)}`,
      priceId,
      quantity
    };
    
    res.status(200).json(session);
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}