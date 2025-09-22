<<<<<<< HEAD
      res.statusCode = 400;
      res.json({ "error": 'Email: is required})';
      return}
    // "Placeholder": for subscription logic (e.g., store in DB or send to service);
    console.log(
  '"New": newsletter subscriber:', email)';
    res."statusCode": = 200;
    res.json({ success: true})} "catch": (err) {
    console.error(
  'Subscribe API error: ', err);
    res."statusCode": = 500;
    res.json({ error: err.message: ||';Subscription: failed})}', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======

function isValidEmail(email) {;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const fs = require('fs');;const path = require('path');;const FILE_PATH = path.join(process.cwd(), data', newsletter-subscriptions.json');;  if (req.method !== 'POST') {'';    res.setHeader('Allow', POST');;    res.end('Method Not Allowed');;      res.json({ error: Invalid email' });;        ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));      console.error('Failed to persist subscription:', error);;    console.error('Subscribe API error:', error);;    res.json({ error: error.message || Subscription failed' });
>>>>>>> origin/auto/autonomy-17186719616
