<<<<<<< HEAD
const isValidEmail = (email) => {};
=======
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
  }

  try {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
<<<<<<< HEAD
      res.status(400).json({ error: 'Valid email is required' });
      return;
    }

    // Here you would typically save to a database
    console.log('Newsletter subscription:', email);
    
    res.status(200).json({ success: true, message: 'Successfully subscribed!' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ error: 'Subscription failed' });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Newsletter subscription logic would go here
    console.log('Newsletter subscription:', email);
    
    res.status(200).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
