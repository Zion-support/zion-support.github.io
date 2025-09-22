export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Here you would typically:
    // 1. Save to newsletter database
    // 2. Add to email marketing service
    // 3. Send welcome email
    // 4. Log the subscription

    // For now, we'll just log the subscription
    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(200).json({ 
      message: 'Successfully subscribed to our newsletter!',
      success: true
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      message: 'Something went wrong. Please try again later.',
      success: false
    });
  }
}