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

  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing data
    let data = [];
    if (fs.existsSync(file)) {
      const fileContent = fs.readFileSync(file, 'utf8');
      data = JSON.parse(fileContent);
    }

    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...req.body
    };

    data.push(newRequest);

    // Write updated data
    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, id: newRequest.id }));
  } catch (error) {
    console.error('Error processing onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({ error: 'Internal server error' }));
  }
}