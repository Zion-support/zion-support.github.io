// API endpoint for newsletter subscription
export default async function handler(req, res) {
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
    // 1. Validate the email
    // 2. Check if already subscribed
    // 3. Add to your email service (e.g., Mailchimp, ConvertKit)
    // 4. Send confirmation email
    // 5. Store in database

    const subscription = {
      id: `sub_${Date.now()}`,
      email: email.toLowerCase(),
      name: name || '',
      interests: interests,
      subscribedAt: new Date().toISOString(),
      status: 'pending_confirmation',
    };

    // Log the subscription (in production, use proper service)
    console.log('Newsletter Subscription:', subscription);

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      subscriptionId: subscription.id 
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}