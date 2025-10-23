const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { email } = req.body;
  if (!email) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
=======
    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email format' });
      return;
    }
    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    res.statusCode = 200;
    res.json({
      message: 'Successfully subscribed to newsletter',
      subscription,
    });
  } catch {
    //     res.statusCode = 500;
    res.json({ error: 'Failed to subscribe to newsletter' });
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }

  if (!isValidEmail(email)) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid email format' }));
    return;
  }

  try {
    console.log('Newsletter subscription:', email);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }));
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}