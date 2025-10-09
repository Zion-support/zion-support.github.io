const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {/* TODO: Fix JSX expression */}
  r: 'Method not allowed' });
  }

  const {/* TODO: Fix JSX expression */}
  } = req.body || {};

  if (!name || !email) {/* TODO: Fix JSX expression */}
  r: 'Name and email are required' });
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {/* TODO: Fix JSX expression */}
  e: true });
  }

  let existing = [];

  try {/* TODO: Fix JSX expression */}
  } catch {/* TODO: Fix JSX expression */}
  }

  const newRequest = {/* TODO: Fix JSX expression */}
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({/* TODO: Fix JSX expression */})
  s: true });
}

module.exports = withSentry(handler);
