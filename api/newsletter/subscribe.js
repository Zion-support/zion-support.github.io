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

  const { email } = req.body;
  if (!email) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  if (!isValidEmail(email)) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid email format' }));
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    return;
  }

  try {
<<<<<<< HEAD

    console.log('Newsletter subscription:', email);

=======
console.log('Newsletter subscription:', email);
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }));
  } catch (error) {
<<<<<<< HEAD

    console.error('Newsletter subscription error:', error);
=======
console.error('Newsletter subscription error:', error);
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
  }
}