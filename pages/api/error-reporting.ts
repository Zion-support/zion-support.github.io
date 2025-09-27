import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint for error reporting
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    
    // Log error details
    console.error('Client Error:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error reporting failed:', err);
    res.status(500).json({ error: "Internal server error" });
  }
}