export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      address, 
      city, 
      state, 
      zipCode, 
      country, 
      serviceType, 
      description, 
      preferredDate, 
      urgency 
    } = req.body || {};

    if (!name || !email || !phone || !company || !address || !serviceType) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Name, email, phone, company, address, and service type are required' 
      }));
      return;
    }

    const onsiteRequest = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      address,
      city,
      state,
      zipCode,
      country,
      serviceType,
      description,
      preferredDate,
      urgency,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real application, you would save this to a database
    console.log('Onsite request submitted:', onsiteRequest);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: onsiteRequest.id
    }));

  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}