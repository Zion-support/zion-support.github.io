export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, preferences } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid email format' }));
    return;
  }

  try {
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || '',
      preferences: preferences || {},
      timestamp: new Date().toISOString(),
      status: 'active'
    };

    // In a real application, you would save to a database
    // For now, we'll just log the subscription
    console.log('New subscription:', newSubscriber);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed',
      subscriber: {
        id: newSubscriber.id,
        email: newSubscriber.email
      }
    }));
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process subscription',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}