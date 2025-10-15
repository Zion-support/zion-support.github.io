// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name } = req.body;
    
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
    subscribers.push({
      email,
      name: name || '',
      subscribedAt: new Date().toISOString()
    });

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ message: "Successfully subscribed" });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: "Failed to subscribe" });
  }
}

export default handler;