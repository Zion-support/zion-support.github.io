// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const subscribe = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name, source = 'general' } = req.body;
    
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Load existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.some(sub => sub.email === email)) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString()
    };

    subscribers.push(newSubscriber);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    return res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed',
      subscriber: newSubscriber
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Failed to process subscription' });
  }
};

export default withErrorLogging(subscribe);
