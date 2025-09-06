import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, fileType, fileData } = req.body;

    if (!userId || !fileType || !fileData) {
      return res.status(400).json({ error: 'User ID, file type, and file data are required' });
    }

    // Mock file upload processing
    const upload = {
      userId,
      fileType,
      fileId: Date.now().toString(),
      status: 'uploaded',
      uploadedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      upload
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to upload file'
    });
  }
}