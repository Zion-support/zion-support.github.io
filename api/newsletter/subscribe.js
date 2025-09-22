
function isValidEmail(email) {;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const fs = require('fs');;const path = require('path');;const FILE_PATH = path.join(process.cwd(), data', newsletter-subscriptions.json');;  if (req.method !== 'POST') {'';    res.setHeader('Allow', POST');;    res.end('Method Not Allowed');;      res.json({ error: Invalid email' });;        ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));      console.error('Failed to persist subscription:', error);;    console.error('Subscribe API error:', error);;    res.json({ error: error.message || Subscription failed' });
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

    // Here you would typically save to a database or send to an email service
    // For now, we'll just return success
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}
