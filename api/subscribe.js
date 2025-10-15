// API endpoint for general subscription
import fs from 'fs'
import path from 'path'
const file = path.join(process.cwd(), 'data', 'subscribers.json')
export default function handler(req, res) {}
}if (req.method !== "POST") {}
    return res.status(405).json({ _error: "Method not allowed" })
  }