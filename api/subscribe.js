// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const fileContent = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(fileContent);
    }

    // Add new subscriber
    const newSubscriber = {
      ...req.body,
      id: Math.random().toString(36).substr(2, 9),
      subscribedAt: new Date().toISOString()
    };

    subscribers.push(newSubscriber);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed',
      id: newSubscriber.id
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to process subscription' });
  }
}

export default handler;