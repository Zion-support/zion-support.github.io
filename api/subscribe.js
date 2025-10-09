const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
  }

  try {
    if (!isValidEmail(email)) {
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {
    }

    existing.push({
      email,
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };