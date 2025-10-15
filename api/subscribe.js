// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name, company } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.find(sub => sub.email === email)) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    // Add new subscriber
    const newSubscriber = {
      id: Date.now(),
      email,
      name: name || '',
      company: company || '',
      subscribedAt: new Date().toISOString()
    };

    subscribers.push(newSubscriber);

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ 
      message: "Successfully subscribed!",
      subscriber: newSubscriber
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}
