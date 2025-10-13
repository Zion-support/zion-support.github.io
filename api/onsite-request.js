const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

// Simple wrapper function to replace withSentry
// const withSentry = (handler) => handler;

=======
// Simple wrapper function to replace withSentry;
// withSentry removed
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
<<<<<<< HEAD
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
=======
    return};
;
const { name, email, company, phone, message, location } = req.body || {};
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })};
;
let existing = [];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
<<<<<<< HEAD
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error reading existing requests:', error);
=======
<<<<<<< HEAD
      if (!Array.isArray(existing)) existing = []
  }
  } catch (error) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reading existing requests:', error)
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    existing = [];
  }

  const newRequest = {
=======
      if (!Array.isArray(existing)) existing = []};
  } catch (error) {
    // console.error removed for production
existing = []};
;
const newRequest = {
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    location,
    timestamp: new Date().toISOString(),
    status: 'pending'
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

=======
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  existing.push(newRequest);
  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
      id: newRequest.id
    }));
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error saving onsite request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}
<<<<<<< HEAD
=======
=======
    res.end(JSON.stringify({ error: 'Failed to save request' }))};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
module.exports = handler;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
