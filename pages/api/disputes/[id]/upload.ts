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
    const now = new Date().toISOString();
    const safeName = 'uploaded-file.pdf';
    const fileId = `${Date.now()}-${safeName}`;

    const attachment = {
      id: fileId,
      fileName: safeName,
      fileSize: 1024,
      mimeType: 'application/pdf',
      path: `/uploads/${fileId}`,
      uploadedAt: now,
      uploadedByUserId: 'user-123'
    };

    res.status(200).json({
      success: true,
      attachment
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to upload file'
    });
  }
}