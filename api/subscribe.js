const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(400).json({ error: 'Email is required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  try {
    if (!isValidEmail(email)) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      return res.status(400).json({ error: 'Invalid email' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
=======
>>>>>>> origin/resolve-merge-conflicts
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
<<<<<<< HEAD
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
=======
    }

    existing.push({
      email,
      source,
      subscribedAt: new Date().toISOString()
    });
>>>>>>> origin/resolve-merge-conflicts

    res.statusCode = 200;
<<<<<<< HEAD
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
=======
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };
>>>>>>> origin/resolve-merge-conflicts
