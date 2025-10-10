import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { 
    companyName, 
    contactName, 
    email, 
    phone, 
    address, 
    serviceType, 
    description, 
    preferredDate,
    urgency 
  } = req.body || {};

  if (!companyName || !contactName || !email || !serviceType) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Company name, contact name, email, and service type are required' 
    }));
    return;
  }

  try {
    // Basic onsite request processing logic
    const request = {
      id: 'onsite_' + Date.now(),
      companyName: companyName.trim(),
      contactName: contactName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone || '',
      address: address || '',
      serviceType,
      description: description || '',
      preferredDate: preferredDate || '',
      urgency: urgency || 'normal',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Log request for processing
    console.log('Onsite Service Request:', request);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Onsite service request submitted successfully',
      request: {
        id: request.id,
        status: request.status,
        estimatedResponseTime: '24-48 hours'
      }
    }));
  } catch (error) {
    console.error('Onsite request processing error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process onsite request' }));
  }
}

export default withErrorLogging(handler);