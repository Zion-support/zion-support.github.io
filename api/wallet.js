// API endpoint for wallet operations;
import fs from 'fs';
import path from 'path';
;
const file = path.join(process.cwd(), 'data', 'wallets.json');
;
function handler(req, res) {};
  if (req.method !== "POST") {};
    return res.status(405).json({ error: "Method not allowed" });
