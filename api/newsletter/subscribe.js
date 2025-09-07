const { withErrorLogging } = require('../../lib/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    
    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    // TODO: Implement actual newsletter subscription logic
    // This could involve adding to a database, sending to an email service, etc.
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);