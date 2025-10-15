<<<<<<< HEAD
// API endpoint for general subscription
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== "POST") {
=======
export default async (req, res) => {
  if (req.method !== 'POST') {
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name, source } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Ensure data directory exists
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Load existing subscribers
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
      id: Date.now().toString(),
      email,
      name: name || '',
      source: source || 'website',
      timestamp: new Date().toISOString()
    };

    subscribers.push(newSubscriber);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ success: true, message: "Successfully subscribed!" });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: "Failed to subscribe" });
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
