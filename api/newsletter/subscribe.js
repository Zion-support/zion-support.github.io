import { withSentry } from '@sentry/nextjs';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' }),
  }

  const { email, name, preferences } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' }),
  }

  try {
    // Here you would typically integrate with your email service provider
    // For now, we'll just log the subscription
    console.log('New newsletter subscription:', { email, name, preferences });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }),
  } catch (err) {
    console.error('Error subscribing to newsletter:', err);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' }),
  }
};

export default withSentry(handler);