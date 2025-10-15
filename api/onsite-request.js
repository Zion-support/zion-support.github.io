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

    // Save the request data
    const requestData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    };

    // Read existing data
    let existingData = [];
    if (fs.existsSync(file)) {
      const fileContent = fs.readFileSync(file, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    // Add new request
    existingData.push(requestData);

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(existingData, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully',
      id: requestData.id
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}