
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const data = req.body;
    
    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.message) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Missing required fields' }));
      return;
    }

    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data
    };

    // In a real application, you would save this to a database
    console.log('Onsite request submitted:', newRequest);

    res.statusCode = 200;
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Request submitted successfully',
      id: newRequest.id
    }));

  } catch (error) {
    console.error('Error processing request:', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

