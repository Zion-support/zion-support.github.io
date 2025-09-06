import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { disputeId } = req.query;
    const { file } = req.body;
    
    // File upload logic would go here
    const safeName = file?.name || 'upload';
    const now = new Date().toISOString();
    
    const attachment = {
      id: `${Date.now()}-${safeName}`,
      fileName: safeName,
      fileSize: file?.size || 0,
      mimeType: file?.type || 'application/octet-stream',
      path: `/uploads/${disputeId}/${safeName}`,
      uploadedAt: now,
      uploadedByUserId: 'user-id'
    };
    
    res.status(200).json({ attachment });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}