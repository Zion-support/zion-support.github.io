import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https://ziontechgroup.com';

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

  if (!companyName || !contactName || !email || !phone || !serviceType) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Company name, contact name, email, phone, and service type are required' 
    }));
    return;
  }

  try {
    // Basic onsite request processing logic
    const requestData = {
      companyName,
      contactName,
      email,
      phone,
      address: address || '',
      serviceType,
      description: description || '',
      preferredDate: preferredDate || '',
      urgency: urgency || 'normal',
      timestamp: new Date().toISOString(),
      status: 'pending',
      requestId: `onsite_${Date.now()}`
    };

    // In a real implementation, you would:
    // 1. Validate the request data
    // 2. Store the request in your database
    // 3. Send notification emails to relevant team members
    // 4. Schedule the onsite visit
    // 5. Send confirmation email to the client

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: requestData.requestId,
      data: requestData
    }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process onsite request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);