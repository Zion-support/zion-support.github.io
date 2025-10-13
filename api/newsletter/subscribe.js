// Simple email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // In a real application, you would:
    // 1. Save to your database
    // 2. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send a welcome email
    // 4. Add to your CRM

    console.log('Newsletter subscription:', { email, name });

    // Mock success response
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}