import { withErrorLogging } from '../../withErrorLogging.cjs';

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Here you would integrate with your newsletter service
    // For now, just return success
    res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      email: email 
    });
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    res.status(500).json({ 
      error: 'Subscription failed',
      message: error.message 
    });
  }
});