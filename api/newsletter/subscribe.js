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

<<<<<<< HEAD
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;

  try {
    // Newsletter subscription logic here
    console.log('Newsletter subscription:', { email, name });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});
=======
const isValidEmail = (email) => {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
export default async function handler(req, res) {
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Email is required'',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Invalid email format'',
    console.log('Newsletter "subscription": '',
    res.setHeader('Content-Type', 'application/json''
    "message": 'Successfully subscribed to newsletter'',
    console.error('Newsletter subscription "error": '',
    res.setHeader('Content-Type', 'application/json''
      "error": 'Failed to subscribe to newsletter'',
    "details": process.env.NODE_ENV === 'development''
>>>>>>> origin/main
