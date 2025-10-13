// Simple email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Email is required' }));
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }
<<<<<<< HEAD
    // Save subscription logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send confirmation email
    console.log('Newsletter subscription:', {
      email: req.body.email,
      timestamp: new Date().toISOString()
<<<<<<< HEAD
    });
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-b847
=======
});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, message: 'Successfully subscribed to newsletter' }));

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
=======

    // Here you would typically save to a database
    // For now, we'll just log the email
    console.log('Newsletter subscription:', email);

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }));

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
}));
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

export default handler;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
}

export default handler;

<<<<<<< HEAD
}
=======


}}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3a0
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
=======
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
