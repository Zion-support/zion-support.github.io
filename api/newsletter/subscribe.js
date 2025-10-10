const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

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

  try {
    const { email } = req.body || {};

    if (!email) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
<<<<<<< HEAD
    // Save subscription logic here;
=======

    // Save subscription logic here
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    res.statusCode = 200;
<<<<<<< HEAD
    res.json({)
      message: 'Successfully subscribed to newsletter'),
      subscription),
    });
  } catch {
    //     res.statusCode = 500;
    res.json({ error: 'Failed to subscribe to newsletter' });
=======
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Email is required' }));
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString()
    };

    res.statusCode = 200;
    res.json({ success: true, subscription });
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }
}

export default withSentry(handler);