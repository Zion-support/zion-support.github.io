const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');
const fs = require('fs');
const path = require('path');

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
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    // Save email to file (in production, use a database)
    const subscribersFile = path.join(process.cwd(), 'subscribers.json');
    let subscribers = [];
    
    if (fs.existsSync(subscribersFile)) {
      const data = fs.readFileSync(subscribersFile, 'utf8');
      subscribers = JSON.parse(data);
    }

    if (subscribers.includes(email)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-0588
      res.status(409).json({ error: 'Email already subscribed' });
      return;
    }

subscribers.push(email);
    fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      email 
    });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ error: 'Internal server error' });
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8302
  }
}

module.exports = withSentry(handler);