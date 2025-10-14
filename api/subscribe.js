// API endpoint for general subscription
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, subscriptionType = 'general' } = req.body;

    if (!email) {
      return res.status(400).json({ 
        error: 'Email is required' 
      });
    }

    // Here you would integrate with your subscription service
    console.log('Subscription received:', { email, subscriptionType });

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed'
    });

  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}