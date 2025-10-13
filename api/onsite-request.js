import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, company, address, service, details } = req.body;
  
  if (!name || !email || !phone) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name, email, and phone are required' }));
    return;
  }

  try {
    const request = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || '',
      address: address || '',
      service: service || '',
      details: details || '',
      timestamp: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: request.id
    }));
  } catch (error) {
    console.error('Error processing onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process onsite request' }));
  }
}