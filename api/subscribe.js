export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // TODO: Implement email subscription logic
    console.log('Newsletter Subscription:', {
      email,
      name,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      subscriptionId: 'sub_' + Math.random().toString(36).substr(2, 9)
    });
  } catch (error) {
    console.error('Subscription Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}