const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body || {};

    if (!email) {
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
  }
}

export default withSentry(handler);