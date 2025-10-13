const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {'
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }


  if (!email) {'
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  if (!isValidEmail(email)) {'
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid email format' }));

    return;
  }

  try {
'
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, '
      message: 'Successfully subscribed to newsletter' 
    }));
  } catch (error) {
'
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ '
      error: 'Failed to subscribe to newsletter','
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));

  }
}'