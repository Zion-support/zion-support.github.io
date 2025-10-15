// API endpoint for general subscription
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'subscribers.json');

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed" 
    });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: "Failed to process subscription" });
  }
}
