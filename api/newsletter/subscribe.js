// Newsletter subscription API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // In a real implementation, you would:
    // 1. Validate the email format
    // 2. Check if the email is already subscribed
    // 3. Add the email to your newsletter service (Mailchimp, ConvertKit, etc.)
    // 4. Send a confirmation email

    // For now, just log the subscription
    console.log('Newsletter subscription:', {
      email: req.body.email,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (_error) { // eslint-disable-line no-unused-vars
    console.error('Newsletter subscription error:', _error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Internal server error' 
    }));
  }
}