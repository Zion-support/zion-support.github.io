export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  
  // Mock PDF buffer
  const pdfBuffer = Buffer.from('Mock PDF content');
  res.status(200).send(pdfBuffer);
}