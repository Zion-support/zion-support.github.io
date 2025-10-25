
// Simple wrapper function to replace withSentry
// const withSentry = (handler) => handler;

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, company, address, service, details } = req.body;
  
  if (!name || !email || !phone || !address) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name, email, phone, and address are required' }));
    return;
  }

  try {
    const request = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      location,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

      // Ensure data directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Onsite request submitted successfully',
      requestId: request.id
    }));
  } catch (error) {
    console.error('Error saving onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}

