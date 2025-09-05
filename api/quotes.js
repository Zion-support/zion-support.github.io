
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details } = req.body || {};
    
    if (!name || !email || !phone || !details) {
>>>>>>> origin/main

      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // TODO: Implement actual quote submission logic
    // This is a placeholder implementation
    // console.log('Quote request from:', { name, email, phone, service });
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    // console.error('Quote API error:', err);
    res.statusCode = 500;

    res.json({ error: err.message || 'Quote submission failed' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> origin/main

