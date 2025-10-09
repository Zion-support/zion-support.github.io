const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {/* TODO: Fix JSX expression */}
    } catch {/* TODO: Fix JSX expression */}
    }

    existing.push({/* TODO: Fix JSX expression */})
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({/* TODO: Fix JSX expression */})
  s: true });
  } catch (err) {/* TODO: Fix JSX expression */}
  r: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };
