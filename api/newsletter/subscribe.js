// Simple email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Here you would typically save to a database or email service
    // For now, we'll just log the subscription
    console.log('Newsletter subscription:', { email, name, timestamp: new Date().toISOString() });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to subscribe to newsletter. Please try again later.'
    });
  }
}