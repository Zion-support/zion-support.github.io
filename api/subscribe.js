// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  try {
    const { email, name, interests } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    
    // Read existing subscribers
    let subscribers = [];
    try {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }
    
    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || '',
      interests: interests || [],
      subscribedAt: new Date().toISOString()
    };
    
    subscribers.push(newSubscriber);
    
    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
    
    res.status(200).json({
      success: true,
      message: 'Successfully subscribed',
      subscriberId: newSubscriber.id
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
