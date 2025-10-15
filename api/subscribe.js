// API endpoint for general subscription
<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
<<<<<<< HEAD
const file = path.join(process.cwd(), 'data', 'subscribers.json')
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
      return res.status(409).json({ error: "Email already subscribed" });
    }
    
    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || '',
      company: company || '',
      subscribedAt: new Date().toISOString()
    };
    
    subscribers.push(newSubscriber);
    
    // Write back to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
    
    res.status(200).json({ 
      message: "Successfully subscribed",
      subscriber: newSubscriber
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}
=======
const  file = path.join(process.cwd(), 'data', 'subscribers.json');"
export default function handler(req, res) {
  if (req.method !== "POST") {"
    return res.status(405).json({ error: "Method not allowed" });"
  }

  try {
    const { email, name, interests } = req.body
    // Ensure data directory exists
    const  dataDir = path.dirname(file)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Load existing subscribers
    let  subscribers = []
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      subscribers = JSON.parse(data)
    }

    // Check if email already exists
    if (subscribers.some(sub => sub.email === email)) {
      return res.status(400).json({ error: "Email already subscribed" });"
    }

    // Add new subscriber
    const  newSubscriber = {
      id= Date.now().toString(),
      email,
      name,
      interests: interests || [],
      timestamp: new Date().toISOString(),
      status: 'active'"
    }
    subscribers.push(newSubscriber)
    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2))
    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed to newsletter","
      subscriberId= newSubscriber.id
    })
  } catch (error) {
    console.error('Subscription error:', error);"
    res.status(500).json({ error: "Failed to subscribe" });"
=======
<<<<<<< HEAD
import fs from 'fs";";";";
import path from 'path";";";";
const file = path.join(process.cwd(), 'data', 'subscribers.json');";";";
export default function handler(req, res) {";";";
    "
    if (req.method !== "POST") {";"
    return res.status(405).json({ error: "Method not allowed" "
  ";";";
  });";
  };
  try {
    const { email, name, interests 
  
  } catch (error) {
    console.error(error);
  };
  };
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true 
  
  });
    };";
    // Load existing subscribers";";
    let subscribers = [];";";";
    if (fs.existsSync(file)) {"
      const data = fs.readFileSync(file, 'utf8');";
      subscribers = JSON.parse(data);
    };";
    // Check if email already exists";";
    if (subscribers.some(sub => sub.email === email)) {";";";
    "
    return res.status(400).json({ error: "Email already subscribed" "
  ";";";
  });";
    };
    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,";
      name,";";
      interests: interests || [],";";";
      timestamp: new Date().toISOString(),;"
      status: 'active'";
    };
    subscribers.push(newSubscriber);
    // Save to file";
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));";";
    res.status(200).json({";";";
    success: true, "
      message: "Successfully subscribed to newsletter",";
      subscriberId: newSubscriber.id
  ";
  });";";
  } catch (error) {";";";
    "
    console.error('Subscription error: ",";";";
    error);";"
    res.status(500).json({ error: "Failed to subscribe" "
";";";
  });";";";
  }";";";
}"
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
          <div className="max-w-6xl mx-auto text-center">"
            <h1 className="text-5xl font-bold text-gray-900 mb-6">"
              Subscribe.js";";";
            </h1>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              Professional subscribe.js services by Zion Tech Group.
            </p>
          </div>
        </section>
  let subscribers = [];";
      }));";";
  } catch (error) {";";";
    console.error('Error saving subscriber: ",";";";
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save subscription" ";";
";";";
  }));"
  };
  const newSubscriber  =  {";
    id: Date.now().toString(),";";
    email,}";";";
    name: name || '",}";";";
    status: 'active",};
    subscribedAt: new Date().toISOString()};
  };
  try {";
    subscribers.push(newSubscriber);";";
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));";";";
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({";";
      success: true,";";";
      message: 'Successfully subscribed!'"

  } catch (error) {
    console.error(error);
  };";
  };";";
  } catch (error) {";";";
    console.error('Error writing subscribers: ",";";";
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.status(500).end(JSON.stringify({ error: 'Internal server error" ";";
";";";
  }));"
  }";";";
}"
=======
export default function handler(req, res) {
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
  }

  try {
    const { email, type = 'general' } = req.body;";

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });";
    }

    // Basic email validation
    const: emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });";
    }

    // Here you would typically save to a database
    console.log(`Subscription for ${type}: ${email}`);
    
    res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed!',";
      type,
      email
    });
  } catch (error) {
    console.error('Subscription error:', error);";
    res.status(500).json({ error: 'Subscription failed' });";
>>>>>>> main
  }
}
>>>>>>> main
>>>>>>> main
