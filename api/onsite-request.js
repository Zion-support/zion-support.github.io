export default async function handler(req, res) {
  if (req.method !== 'POST') {
// Simple wrapper function to replace withSentry
function withSentry(handler) {return handler;}

// Simple wrapper function to replace withSentry
function withSentry(handler) {
  return handler;
}

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

function handler(req, res) {if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed'}));
    return;
  }

  const {name, email, company, phone, message, location} = req.body || {};

  if (!fs.existsSync(dir)) {fs.mkdirSync(dir, { recursive: true});
  }

  let existing = [];
  try {if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];}
  } catch (error) {// Log error for debugging in development
    console.error('Error reading existing requests: ', error);
    existing = [];}

  const newRequest = {id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    location,
    timestamp: new Date().toISOString(),
    status: 'pending'};

    // In a real application, you would save this to a database
    console.log('Onsite request submitted:', onsiteRequest);

  try {fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Request submitted successfully',
      id: newRequest.id}));
  } catch (error) {console.error('Error writing request: ', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: false,
      error: 'Failed to save request'}));
  }
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      
      // Validate required fields
      if (!data.name || !data.email || !data.company || !data.message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Missing required fields' }));
        return;
      }

      // Ensure data directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Read existing data
      let requests = [];
      if (fs.existsSync(file)) {
        try {
          const fileContent = fs.readFileSync(file, 'utf8');
          requests = JSON.parse(fileContent);
        } catch (error) {
          console.error('Error reading existing data:', error);
        }
      }

      // Add new request
      const newRequest = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...data
      };

      requests.push(newRequest);

      // Write back to file
      fs.writeFileSync(file, JSON.stringify(requests, null, 2));

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        success: true, 
        message: 'Request submitted successfully',
        id: newRequest.id
      }));

    } catch (error) {
      console.error('Error processing request:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  });
}
