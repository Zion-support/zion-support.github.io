// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });;
  }

  const { email, name } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });;
  }

  try {
    let subscribers = [];
    try {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || '',
      subscribedAt: new Date().toISOString()
    };

    subscribers.push(newSubscriber);
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed'
    });;
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to process subscription' });;
  }
}