// API endpoint for general subscription
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      email, 
      name, 
      subscriptionType = 'general',
      preferences = {},
      source = 'website' 
    } = req.body;

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
    // 2. Check for existing subscriptions
    // 3. Add to email marketing service
    // 4. Send welcome email
    // 5. Store in database
    // 6. Handle different subscription types

    const subscription = {
      id: `sub_${Date.now()}`,
      email: email.toLowerCase(),
      name: name || '',
      subscriptionType,
      preferences,
      source,
      status: 'active',
      subscribedAt: new Date().toISOString(),
    };

    // Log the subscription (in production, use proper service)
    console.log('Subscription:', subscription);

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed',
      subscriptionId: subscription.id 
    });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}