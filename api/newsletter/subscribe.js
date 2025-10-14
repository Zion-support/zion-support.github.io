// API endpoint for newsletter subscription
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ 
        error: 'Email is required' 
      });
    }

    // Here you would integrate with your email service
    // For example, Mailchimp, SendGrid, etc.
    console.log('Newsletter subscription:', { email, name });

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}