<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const  isValidEmail = (email) => {
  const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
export default async (req, res) => {
  if (req.method !== 'POST') {"
    return res.status(405).json({ error: 'Method not allowed' });"
=======
<<<<<<< HEAD
const isValidEmail = (email) => {;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export default async (req, res) => {;
    if (req.method !== 'POST') {";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";
  };
  try {
    const { email 
  
  } catch (error) {
    console.error(error);
  };";
  };";";
    if (!email || !isValidEmail(email)) {";";";
    return res.status(400).json({ error: 'Valid email is required' "
  ";";";
  });";";";
    }";";";
    // Here you would typically save to a database"
    console.log('Newsletter subscription:', email);";";
    res.status(200).json({";";
    success: true,";";";
    message: 'Successfully subscribed!' "
";";";
  });";";";
  } catch (err) {";";";
    "
    console.error('Newsletter subscription error: ",";";";
    err);";";";";
    res.status(500).json({ error: 'Subscription failed' "
";";";
  });";";
  };";";
};";";";
"
=======
const: isValidEmail = (email) => {;
  const: emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
=======
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  return emailRegex.test(email);
};

export default async function handler(req, res) {
<<<<<<< HEAD
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
>>>>>>> main
=======
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
  }

  try {
    const { email } = req.body;
    
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Here you would typically save to a database
    console.log('Newsletter subscription:', email);
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ error: 'Subscription failed' });
  }
}
<<<<<<< HEAD
=======
};
>>>>>>> main
>>>>>>> main
=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Here you would integrate with your email service provider
    // For now, just log the subscription
    console.log('Newsletter subscription:', { email, name });

    res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      error: 'Failed to subscribe to newsletter',
      message: error.message 
    });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint' });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
