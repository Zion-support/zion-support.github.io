import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const data = fs.readFileSync(file, 'utf8');
    const requests = JSON.parse(data);
    
    const newRequest = {
      id: Date.now().toString(),
      ...req.body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully'
    }));
  } catch (error) {
    console.error('Error:', error);
    console.error('Error saving onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({ error: 'Failed to save request' }));
  }
}