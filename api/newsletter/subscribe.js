const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, source = 'website' } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Here you would typically:
    // 1. Add email to your newsletter service (Mailchimp, ConvertKit, etc.)
    // 2. Store in database
    // 3. Send welcome email
    // 4. Track subscription analytics

    console.log('Newsletter subscription:', { email, name, source });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      error: 'Failed to subscribe to newsletter',
      message: error.message 
    });
  }
}