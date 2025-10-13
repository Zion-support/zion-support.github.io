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

<<<<<<< HEAD
  try {
    const data = fs.readFileSync(file, 'utf8');
    const requests = JSON.parse(data);
    
    const newRequest = {
      id: Date.now().toString(),
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      message: 'Onsite request submitted successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
    console.error('Error saving onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));

=======
const { name, email, phone, company, address, service, details } = req.body;
  
  if (!name || !email || !phone || !address) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name, email, phone, and address are required' }));
    return;
  }

  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing data
    let data = [];
    if (fs.existsSync(file)) {
      const fileData = fs.readFileSync(file, 'utf8');
      data = JSON.parse(fileData);
    }

    // Add new request
    const newRequest = {
      id: Date.now(),
      name,
      email,
      phone,
      company: company || '',
      address,
      service: service || 'General',
      details: details || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    data.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process onsite request' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
  }
}