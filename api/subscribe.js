export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { email, name, interests } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // Mock subscription processing
    console.log('Subscription:', { email, name, interests });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to process subscription' });
  }
}