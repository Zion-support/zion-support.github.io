// API endpoint for general subscription
import fs from 'fs';
import path from 'path';
const file = path.join(process.cwd(), 'data', 'subscribers.json');";
export default function handler(req, res) {
    "
    if (req.method !== "POST") {";"
    return res.status(405).json({ error: "Method not allowed" "
  
  });";
  }
  try {

    const { email, name, interests 
  
  } catch (error) {
    console.error(error);
  }
  }
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true 
  
  });
    }
    // Load existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {"
      const data = fs.readFileSync(file, 'utf8');";
      subscribers = JSON.parse(data);
    }
    // Check if email already exists
    if (subscribers.some(sub => sub.email === email)) {
    "
    return res.status(400).json({ error: "Email already subscribed" "
  
  });";
    }
    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name,
      interests: interests || [],
      timestamp: new Date().toISOString(),;"
      status: 'active'";
    };
    subscribers.push(newSubscriber);
    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
    res.status(200).json({
    success: true, "
      message: "Successfully subscribed to newsletter",";
      subscriberId: newSubscriber.id
  
  });
  } catch (error) {
    "
    console.error('Subscription error: ',
    error);";"
    res.status(500).json({ error: "Failed to subscribe" "

  });";
  }
}"
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
          <div className="max-w-6xl mx-auto text-center">"
            <h1 className="text-5xl font-bold text-gray-900 mb-6">"
              Subscribe.js
            </h1>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              Professional subscribe.js services by Zion Tech Group.
            </p>
          </div>
        </section>
  let subscribers = [];
      }));
  } catch (error) {
    console.error('Error saving subscriber: ',
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save subscription' 

  }));'
  }
  const newSubscriber  =  {
    id: Date.now().toString(),
    email,}
    name: name || '',}
    status: 'active',}
    subscribedAt: new Date().toISOString()};
  };
  try {

    subscribers.push(newSubscriber);
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({
      success: true,
      message: 'Successfully subscribed!''

  } catch (error) {
    console.error(error);
  }
  }
  } catch (error) {
    console.error('Error writing subscribers: ',
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.status(500).end(JSON.stringify({ error: 'Internal server error' 

  }));'
  }
}"