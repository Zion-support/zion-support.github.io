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
  const { name, email, company, phone, message, location } = req.body || {};

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let requests = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading existing requests:', error);
  }

  const newRequest = {
    id: Date.now().toString(),
    name: name || '',
    email: email || '',
    company: company || '',
    phone: phone || '',
    message: message || '',
    location: location || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  try {
    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

=======
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
    
>>>>>>> cursor/fix-errors-and-merge-to-main-5ae7
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      message: 'Onsite request submitted successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
<<<<<<< HEAD
=======
    console.error('Error saving onsite request:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-5ae7
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}
