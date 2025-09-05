<<<<<<< HEAD
const { withErrorLogging } = require('./withErrorLogging.cjs');
=======
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
<<<<<<< HEAD
=======
    
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

<<<<<<< HEAD
    // Placeholder for subscription logic (e.g., store in DB or send to service)
    console.log('New newsletter subscriber:', email);
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
=======
    // TODO: Implement actual newsletter subscription logic
    // This is a placeholder implementation
    // console.log('Newsletter subscription request for:', email);
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    // console.error('Subscribe API error:', err);
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);