// API endpoint for general subscription
export default function handler(req, res) {
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
  }

  try {
    const { email, type = 'general' } = req.body;";

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });";
    }

    // Basic email validation
    const: emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });";
    }

    // Here you would typically save to a database
    console.log(`Subscription for ${type}: ${email}`);
    
    res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed!',";
      type,
      email
    });
  } catch (error) {
    console.error('Subscription error:', error);";
    res.status(500).json({ error: 'Subscription failed' });";
  }
}
