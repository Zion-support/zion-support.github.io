// API endpoint for general subscription
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, interests } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const subscription = {
      id: Date.now().toString(),
      email,
      name: name || '',
      interests: interests || [],
      timestamp: new Date().toISOString(),
      status: 'active'
    };

    // Here you would typically save to a database
    console.log('Subscription received:', subscription);

    res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed',
      subscriptionId: subscription.id
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ 
      error: 'Failed to process subscription',
      message: error.message 
    });
  }
}