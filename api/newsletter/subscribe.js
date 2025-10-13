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
  const { email } = req.body;  if (!email) {
=======
  const { email } = req.body;
  if (!email) {
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  if (!isValidEmail(email)) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid email format' }));
    return;
  }

  try {
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    console.log('Newsletter subscription:', email);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }));
  } catch (error) {
<<<<<<< HEAD

    console.error('Newsletter subscription error:', error);    res.setHeader('Content-Type', 'application/json');
=======
    console.error('Newsletter subscription error:', error);
    res.setHeader('Content-Type', 'application/json');
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}