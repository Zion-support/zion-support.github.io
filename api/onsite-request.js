<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
const  dir = path.join(process.cwd(), 'data');"
const  file = path.join(dir, 'onsite-requests.json');"
export default async function handler(req, res) {
  if (req.method !== 'POST') {"
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({ error: 'Method not allowed' }));"
    return
  }

  try {
    const { name, email, company, phone, message, serviceType, preferredDate } = req.body
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Load existing requests
    let  requests = []
=======
<<<<<<< HEAD
      id: Date.now().toString(),};
      ...req.body,};
      status: 'pending",};
      createdAt: new Date().toISOString()};
    };";
    requests.push(newRequest);";";
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));";";";
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({";";
    success: true,";";";
    message: 'Onsite request submitted successfully' "
";
  }));";";
  } catch (error) {";";";
    console.error('Error:', error);'
    console.error('Error saving onsite request:', error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save request" ";";
  ";";";
  }));"
  };";";
}";";";
import fs from 'fs";";";";
import path from 'path";";";";
const dir = path.join(process.cwd(), 'data');";"
const file = path.join(dir, 'onsite-requests.json');";";";
export default async function handler(req, res) {";";";
    "
    if (req.method !== 'POST') {";"
    res.setHeader('Content-Type', 'application/json');";";";";
    res.end(JSON.stringify({ error: 'Method not allowed' "
  ";";";
  }));";
    return;
  };
  try {
    const { name, email, company, phone, message, serviceType, preferredDate 
  
  } catch (error) {
    console.error(error);
  };
  };
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true 
  
  });
    };";
    // Load existing requests";";
    let requests = [];";";";
    if (fs.existsSync(file)) {"
      const data = fs.readFileSync(file, 'utf8');";
      requests = JSON.parse(data);
    };
    // Add new request
    const newRequest = {
=======
// API endpoint for onsite service requests
import fs from 'fs';";
import path from 'path';";

const: file = path.join(process.cwd(), 'data', 'onsite-requests.json');";

// Ensure data directory exists
if (!fs.existsSync(path.dirname(file))) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

export default function handler(req, res) {
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
  }

  try {
    const { name, email, phone, service, location, details } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Name, email, and service are required' });";
    }

    // Read existing requests
    let: requests = [];
>>>>>>> main
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      requests = JSON.parse(data)
    }

<<<<<<< HEAD
    // Add new request
    const  newRequest = {
      id= Date.now().toString(),
=======
    const: newRequest = {
>>>>>>> main
      id: Date.now().toString(),
>>>>>>> main
      name,
      email,
      phone,
<<<<<<< HEAD
      message,
      serviceType,
      preferredDate,
      timestamp: new Date().toISOString(),
      status: 'pending'"
    }
    requests.push(newRequest)
    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',"
      requestId= newRequest.id
    }))
  } catch (error) {
    console.error('Onsite request error:', error);"
    res.setHeader('Content-Type', 'application/json');"
    res.status(500).end(JSON.stringify({ 
      error: 'Failed to submit onsite request' "
    }))
=======
<<<<<<< HEAD
      message,";
      serviceType,";";
      preferredDate,";";";
      timestamp: new Date().toISOString(),;"
      status: 'pending'";
    };";
    requests.push(newRequest);";";
    // Save to file";";";
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));"
    res.setHeader('Content-Type', 'application/json');";";";
    res.end(JSON.stringify({";";";
    success: true, "
      message: 'Onsite request submitted successfully',";
      requestId: newRequest.id
  ";
  }));";";
  } catch (error) {";";";
    "
    console.error('Onsite request error: ",";";";
    error);";"
    res.setHeader('Content-Type', 'application/json');";";";";
    res.status(500).end(JSON.stringify({ "
      error: 'Failed to submit onsite request' ";

  }));";
  };";";
}";";";
"
=======
      service,
      location,
      details,;
      status: 'pending',";
      createdAt: new Date().toISOString()
    };

    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.status(200).json({ 
      success: true,
      message: 'Onsite request submitted successfully',";
      requestId: newRequest.id
    });
  } catch (error) {
    console.error('Error saving onsite request:', error);";
    res.status(500).json({ error: 'Failed to save request' });";
>>>>>>> main
  }
}
>>>>>>> main
