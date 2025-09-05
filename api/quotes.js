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
<<<<<<< HEAD
    const { name, email, phone, details, country, service } = req.body || {};
=======
    const { name, email, phone, details } = req.body || {};
    
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

<<<<<<< HEAD
    console.log('New quote request:', {
      name,
      email,
      phone,
      details,
      country,
      service,
    });

    // In a real application you would store the quote and send a confirmation email here
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
=======
    // TODO: Implement actual quote submission logic
    // This is a placeholder implementation
    // console.log('Quote request from:', { name, email, phone, service });
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    // console.error('Quote API error:', err);
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}

module.exports = withErrorLogging(handler);