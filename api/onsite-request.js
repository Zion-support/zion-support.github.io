// import fs from 'fs';
// import path from 'path';

// Onsite request API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      address, 
      serviceType, 
      preferredDate, 
      message 
    } = req.body;

    // Validate required fields
    if (!companyName || !contactName || !email || !phone || !address) {
      return res.status(400).json({ 
        error: 'Company name, contact name, email, phone, and address are required' 
      });
    }

    // Create request object
    const newRequest = {
      id: Date.now().toString(),
      companyName,
      contactName,
      email,
      phone,
      address,
      serviceType: serviceType || 'General Consultation',
      preferredDate: preferredDate || 'Not specified',
      message: message || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real implementation, you would save this to a database
    // For now, we'll just log it
    console.log('Onsite request received:', newRequest);

    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      id: newRequest.id
    });

  } catch (_error) { // eslint-disable-line no-unused-vars
    console.error('Error processing onsite request:', _error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process request' }));
  }
}