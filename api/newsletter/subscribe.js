// API endpoint for newsletter subscription
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, interests = [] } = req.body;

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
    // 3. Add to your email service (Mailchimp, ConvertKit, etc.)
    // 4. Send confirmation email

    const subscription = {
      email,
      name,
      interests,
      subscribedAt: new Date().toISOString(),
      status: 'pending'
    };

    // Mock response for development
    console.log('Newsletter subscription:', subscription);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscriptionId: `sub_${Date.now()}`
    });

  } catch (error) {
    console.error('Error in newsletter subscription:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to subscribe to newsletter'
    });
  }
}