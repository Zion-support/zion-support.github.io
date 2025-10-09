// Subscribe API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Process subscription logic here
    // In a real application, you would:
    // 1. Validate email format
    // 2. Check if already subscribed
    // 3. Store in database
    // 4. Send welcome email
    // 5. Add to mailing list

    console.log('Subscription request received:', { email, name });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to our newsletter!' 
    });
  } catch (err) {
    console.error('Failed to process subscription:', err);
    res.status(500).json({ error: 'Failed to process subscription' });
  }
}