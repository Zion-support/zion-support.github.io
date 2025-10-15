import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.find(s => s.email === email)) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    subscribers.push({ 
      email, 
      name: name || '', 
      subscribedAt: new Date().toISOString() 
    });
    
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Error in newsletter subscribe handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}