// API endpoint for general subscription;
import fs from 'fs';
import path from 'path';
;
const file = path.join(process.cwd(), 'data', 'subscribers.json');
;
function handler(req, res) {};
  if (req.method !== "POST") {};
    return res.status(405).json({ error: "Method not allowed" });
