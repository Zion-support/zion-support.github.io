import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, documentType, fileData } = req.body || {};
    
    if (!userId || !documentType || !fileData) {
      return res.status(400).json({ error: 'User ID, document type, and file data are required' });
    }

    // Placeholder for KYC upload logic
    res.status(200).json({ success: true, message: 'Document uploaded' });
  } catch (error) {
    console.error('KYC upload error:', error);
    res.status(500).json({ error: 'Failed to upload document' });
  }
}