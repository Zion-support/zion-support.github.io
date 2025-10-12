const fs = require('fs');
const path = require('path');

// Simple wrapper function to replace withSentry
// const withSentry = (handler) => handler;

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
    // Log error for debugging in development
      console.error('Error reading existing requests:', error);
    }
    existing = [];
  }

  };

  existing.push(newRequest);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
      id: newRequest.id
    }));
    // Log error for debugging in development
      console.error('Error saving onsite request:', error);
    }
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}
module.exports = handler;
