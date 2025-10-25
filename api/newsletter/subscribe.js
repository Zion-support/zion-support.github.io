
<<<<<<< HEAD
=======
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
try{}
const { email } = req.body;
;
if (!email || !isValidEmail(email)) {;
return res.status(400).json({ error: "'Valid email is required' ",;});
    }"

<<<<<<< HEAD
    // Here you would typically save to a database;"'"
console.log('Newsletter subscription: "'",email);"
    res.status(200).json({;"'"
success: "true",message: "'Successfully subscribed!" )"
    ",});"
  } catch (err) {;"'"
console.error('Newsletter subscription error: "'",err);"'"
    res.status(500).json({ error: "'Subscription failed' ",});"
  }"
"'"
=======
  try {
    const { email } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Email is required' }));
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to newsletter',
      subscription
    }));

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
