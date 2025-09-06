export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  
  // Mock upload logic
  const dispute = { attachments: [] };
  const safeName = 'mock-file.txt';
  const buffer = Buffer.from('mock content');
  const now = new Date().toISOString();
  const user = { id: 'mock-user' };
  
  dispute.attachments.push({
    id: `${Date.now()}-${safeName}`,
    fileName: safeName,
    fileSize: buffer.length,
    mimeType: 'application/octet-stream',
    path: '/mock/path',
    uploadedAt: now,
    uploadedByUserId: user.id
  });
  
  res.status(200).json({ message: 'Disputes Upload API' });
}