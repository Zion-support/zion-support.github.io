export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, company, address, service, preferredDate, message } = req.body || {}
    
    if (!name || !email || !phone || !company || !address) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Name, email, phone, company, and address are required' 
      }));
      return;
    }

    // Process onsite request
    console.log('Onsite request:', { 
      name, email, phone, company, address, service, preferredDate, message 
    })

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify team members
    // 4. Schedule appointment

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: Math.random().toString(36).substr(2, 9)
    }));

  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}