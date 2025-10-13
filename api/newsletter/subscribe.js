const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
<<<<<<< HEAD
    return;
  }

  try {
    const { email } = req.body || {};

=======
    return};
  try {;
const { email } = req.body || {};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Email is required' }));
<<<<<<< HEAD
      return;
    }

=======
      return};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
<<<<<<< HEAD
      return;
    }

=======
      return};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Save subscription logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send confirmation email
<<<<<<< HEAD

    // // console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });
    // console.log removed for production
    console.log('Newsletter subscription:', {
      email: req.body.email,

<<<<<<< HEAD
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Newsletter subscription error:', error);
=======
=======
    // console.log removed for production
    console.log('Newsletter subscription:', {
      email: req.body.email,
      timestamp: new Date().toISOString()
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      email 
    }));

  } catch (error) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Newsletter subscription error:', error);
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
<<<<<<< HEAD
      details: process.env.NODE_ENV === 'development' ? _error.message : undefined
=======
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }));
  }
}

<<<<<<< HEAD
module.exports = withSentry(handler);
=======
=======
    }))};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
module.exports = withSentry(handler);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
