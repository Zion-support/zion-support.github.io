import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { file, fileName, fileType } = req.body;
    
    if (!file || !fileName) {
      return res.status(400).json({ error: 'File and file name are required' });
    }

    // Mock file upload
    const upload = {
      id: Date.now().toString(),
      fileName,
      fileType: fileType || 'application/octet-stream',
      size: file.length || 0,
      url: `https://storage.example.com/uploads/${fileName}`,
      uploadedAt: new Date().toISOString()
    };

    res.status(200).json(upload);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
}