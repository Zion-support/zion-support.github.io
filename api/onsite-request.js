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

  try {    const data = fs.readFileSync(file, 'utf8');    const requests = JSON.parse(data);
    
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
  }
}