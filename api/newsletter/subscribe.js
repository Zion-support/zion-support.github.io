// Newsletter subscription API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // In a real application, you would:
    // 1. Validate the email format
    // 2. Check if email already exists
    // 3. Store in your database
    // 4. Send confirmation email
    // 5. Add to your email marketing service (Mailchimp, ConvertKit, etc.)

    // console.log removed for production
    console.log('Newsletter subscription:', {
      email: req.body.email,
      timestamp: new Date().toISOString()
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      email 
    }));
  } catch (error) {
    // console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
  }
}
