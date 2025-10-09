const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
<<<<<<< HEAD
    return res.status(400).json({ error: 'Email is required' });
=======
<<<<<<< HEAD
    res.status(400).json({ error: 'Email is required' });
    return;
=======
    return res.status(400).json({ error: 'Email is required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
  }

  try {
    if (!isValidEmail(email)) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Invalid email' });
=======
<<<<<<< HEAD
      res.status(400).json({ error: 'Invalid email' });
      return;
=======
      return res.status(400).json({ error: 'Invalid email format' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {
<<<<<<< HEAD
      if (fs.existsSync(file)) {
        existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      }
    } catch (err) {
      console.error('Error reading existing subscriptions:', err);
=======
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
    } catch (err) {
      // File doesn't exist or is invalid, start with empty array
      console.log('No existing subscriptions found, starting fresh:', err.message);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    }

    existing.push({
      email,
<<<<<<< HEAD
      name: name || '',
=======
      name,
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
<<<<<<< HEAD
    res.json({ success: true, message: 'Successfully subscribed' });
  } catch (err) {
    console.error('Subscription error:', err);
=======
    res.json({ success: true });
  } catch (err) {
    console.error('Error subscribing:', err);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };