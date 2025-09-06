import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    // Mock file upload
    const safeName = 'uploaded-file.txt';
    const buffer = Buffer.from('Mock file content', 'utf8');
    const now = new Date().toISOString();
    
    const attachment = {
      id: `${Date.now()}-${safeName}`,
      fileName: safeName,
      fileSize: buffer.length,
      mimeType: 'text/plain',
      path: `/uploads/${id}/${safeName}`,
      uploadedAt: now,
      uploadedByUserId: 'user123'
    };

    res.status(200).json({ 
      success: true, 
      disputeId: id, 
      attachment 
    });
  } catch (error) {
    console.error('Dispute upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
}