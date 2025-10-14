// API endpoint for general subscription
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, subscriptionType = 'general', preferences = {} } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real implementation, you would:
    // 1. Validate email format
    // 2. Check if email already exists
    // 3. Add to appropriate mailing list
    // 4. Send confirmation email
    // 5. Update user preferences

    const subscription = {
      email,
      subscriptionType,
      preferences,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      subscriptionId: `sub_${Date.now()}`
    };

    // Mock response for development
    console.log('Subscription created:', subscription);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed',
      subscriptionId: subscription.subscriptionId,
      subscriptionType
    });

  } catch (error) {
    console.error('Error in subscription:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create subscription'
    });
  }
}