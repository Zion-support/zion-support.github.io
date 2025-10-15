// API endpoint for general subscription;
import fs from 'fs';
import path from 'path';
;
const file = path.join(process.cwd(), 'data', 'subscribers.json');
;
function handler(req, res) {};
  if (req.method !== "POST") {};
    return res.status(405).json({ error: "Method not allowed" });
<<<<<<< HEAD
  };
=======
  }

  try {
<<<<<<< HEAD
    const { email, name } = req.body;
=======
    const { email, name, source } = req.body;
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Ensure data directory exists
<<<<<<< HEAD
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
=======
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
    }

    // Load existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
<<<<<<< HEAD
    if (subscribers.find(sub => sub.email === email)) {
=======
    if (subscribers.some(sub => sub.email === email)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      return res.status(400).json({ error: "Email already subscribed" });
    }

    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || '',
<<<<<<< HEAD
=======
      source: source || 'website',
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      timestamp: new Date().toISOString()
    };

    subscribers.push(newSubscriber);

<<<<<<< HEAD
    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ success: true, message: "Successfully subscribed!" });
=======
    // Save updated subscribers
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ 
      success: true,
      message: "Successfully subscribed" 
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: "Failed to subscribe" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
