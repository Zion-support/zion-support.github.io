import fs from 'fs';
import path from 'path';

// Simple wrapper function to replace withSentry
const withSentry = (handler) => handler;

export default withSentry(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, message, service } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // In a real application, you would:
    // 1. Save to your database
    // 2. Send email notification to your team
    // 3. Add to your CRM
    // 4. Send confirmation email to the client

    const requestData = {
      name,
      email,
      company,
      phone,
      message,
      service,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };

    console.log('Onsite request received:', requestData);

    // Mock success response
    res.status(200).json({ 
      success: true, 
      message: 'Request submitted successfully!' 
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
});