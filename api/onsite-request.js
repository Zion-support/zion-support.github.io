
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
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit onsite request' }));
  }
}

