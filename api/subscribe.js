const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
<<<<<<< HEAD
    return res.status(400).json({ error: 'Email is required' });
=======
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  try {
    if (!isValidEmail(email)) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Invalid email' });
=======
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email' }));
      return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {
<<<<<<< HEAD
<<<<<<< HEAD
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

<<<<<<< HEAD
    existing.push({)
      email)
      name: name || ''),
      source),
=======
      if (fs.existsSync(file)) {
        existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      }
    } catch (error) {
      console.error('Error reading existing subscriptions:', error);
    }

=======
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
    } catch {
      // File doesn't exist or is invalid, start with empty array
    }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    existing.push({
      email,
      name,
      source,
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
    existing.push({
      email,
      name: name || '',
      source,
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
      subscribedAt: new Date().toISOString(),
      status: 'active'
=======
      subscribedAt: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
<<<<<<< HEAD
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Subscription error:', err);
    res.status(500).json({ error: err.message || 'Subscription failed' });
=======
    res.json({ success: true });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Subscription failed' }));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }
}

module.exports = { handler };