      id: Date.now().toString(),}
      ...req.body,}
      status: 'pending',}
      createdAt: new Date().toISOString()}
    };
    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({
    success: true,
    message: 'Onsite request submitted successfully' '

  }));
  } catch (error) {
    console.error('Error:', error);'
    console.error('Error saving onsite request:', error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save request' 
  
  }));'
  }
}
import fs from 'fs';
import path from 'path';
const dir = path.join(process.cwd(), 'data');";"
const file = path.join(dir, 'onsite-requests.json');";
export default async function handler(req, res) {
    "
    if (req.method !== 'POST') {";"
    res.setHeader('Content-Type', 'application/json');";
    res.end(JSON.stringify({ error: 'Method not allowed' "
  
  }));";
    return;
  }
  try {

    const { name, email, company, phone, message, serviceType, preferredDate 
  
  } catch (error) {
    console.error(error);
  }
  }
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true 
  
  });
    }
    // Load existing requests
    let requests = [];
    if (fs.existsSync(file)) {"
      const data = fs.readFileSync(file, 'utf8');";
      requests = JSON.parse(data);
    }
    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      serviceType,
      preferredDate,
      timestamp: new Date().toISOString(),;"
      status: 'pending'";
    };
    requests.push(newRequest);
    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));"
    res.setHeader('Content-Type', 'application/json');";
    res.end(JSON.stringify({
    success: true, "
      message: 'Onsite request submitted successfully',";
      requestId: newRequest.id
  
  }));
  } catch (error) {
    "
    console.error('Onsite request error: ',
    error);";"
    res.setHeader('Content-Type', 'application/json');";
    res.status(500).end(JSON.stringify({ "
      error: 'Failed to submit onsite request' ";

  }));
  }
}
"