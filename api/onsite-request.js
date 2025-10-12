

// Simple wrapper function to replace withSentry

function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (error) {
    // Log error for debugging in development;
    console.error('Error reading existing requests:', error);
    existing = [];
  }

  existing.push(newRequest);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Request submitted successfully',
      id: newRequest.id 
    }));
  } catch (error) {
    console.error('Error writing request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: false, 
      error: 'Failed to save request' 
    }));
  }
}

module.exports = withSentry(handler);