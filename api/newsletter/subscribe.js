const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
  }

=======
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

=======
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
=======
    return res.status(405).json({ error: 'Method not allowed' });
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-1917
  try {
    const { email } = req.body || {};

    if (!email) {
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Save subscription logic here
    // const subscription = {
    //   email,
    //   subscribedAt: new Date().toISOString(),
    //   status: 'active'
    // };

    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Failed to subscribe to newsletter:', err);
=======
<<<<<<< HEAD
      res.status(400).json({ error: 'Email is required' });
      return;
    }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1917

      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    
    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      source: 'newsletter'

    };

    res.statusCode = 200;
    res.json({ success: true, subscription });
  } catch (err) {
    console.error('Error subscribing to newsletter:', err);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}

export default withSentry(handler);