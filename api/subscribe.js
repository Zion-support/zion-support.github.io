const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
<<<<<<< HEAD
=======
    return res.status(400).json({ error: 'Email is required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  try {
    if (!isValidEmail(email)) {
<<<<<<< HEAD
=======
      return res.status(400).json({ error: 'Invalid email' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

<<<<<<< HEAD
    const subscription = {
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('Subscription created:', subscription);
=======
    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    existing.push({)
      email)
      name: name || ''),
      source),
      if (fs.existsSync(file)) {
        existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      }
    } catch (error) {
      console.error('Error reading existing subscriptions:', error);
    }

      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
    } catch {
      // File doesn't exist or is invalid, start with empty array
    }

    existing.push({
      email,
      name,
      source,
    existing.push({
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
      subscribedAt: new Date().toISOString()
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab

    res.statusCode = 200;
<<<<<<< HEAD
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to newsletter',
      subscription
    }));
  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
=======
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Subscription error:', err);
    res.status(500).json({ error: err.message || 'Subscription failed' });
    res.json({ success: true });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Subscription failed' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
  }
}

module.exports = handler;