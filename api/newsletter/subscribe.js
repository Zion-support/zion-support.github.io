<<<<<<< HEAD
const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Email is required' }));
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

    // Save subscription logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send confirmation email

    // // console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });
=======
// Newsletter subscription API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // In a real application, you would:
    // 1. Validate the email format
    // 2. Check if email already exists
    // 3. Store in your database
    // 4. Send confirmation email
    // 5. Add to your email marketing service (Mailchimp, ConvertKit, etc.)

<<<<<<< HEAD
    // console.log removed for production
    console.log('Newsletter subscription:', {
      email: req.body.email,
=======
    console.log('Newsletter subscription:', {
      email,
      name,
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
      timestamp: new Date().toISOString()
    });
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      email 
    }));
<<<<<<< HEAD

  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? _error.message : undefined
    }));
  }
}

module.exports = withSentry(handler);
=======
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
  }
}
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
