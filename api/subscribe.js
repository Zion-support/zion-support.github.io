<<<<<<< HEAD
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, interests } = req.body;

  try {
    // Subscription logic here
    console.log('Subscription request:', { email, name, interests });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});
=======
import fs from 'fs''
import path from 'path''
const dir = path.join(process.cwd(), 'data''
const file = path.join(dir, 'subscribers.json''
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Email is required'',}
    const data = fs.readFileSync(file, 'utf8''
    console.error('"Error": '',
    console.error('Error reading existing "subscribers": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Email already subscribed'',
    "name": name || ''',
    "status": 'active'',
    res.setHeader('Content-Type', 'application/json''
    "message": 'Successfully subscribed to newsletter'',
    console.error('"Error": '',
    res.setHeader('Content-Type', 'application/json'';
    res.end(JSON.stringify({ "error": 'Failed to save subscription''
>>>>>>> origin/main
