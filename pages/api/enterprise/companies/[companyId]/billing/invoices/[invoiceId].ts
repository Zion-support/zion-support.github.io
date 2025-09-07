import type { NextApiRequest, NextApiResponse } from 'next';
export const config = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query,
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {
    return res.status(400).json({ error: 'companyId and invoiceId required' })
  }

  if (req.method !== 'GET') return res.status(405).json($2);
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 = $2;
  const pdfBuffer = Buffer.from($2);
  res.setHeader($2);
  res.setHeader($2);
  res.status(200).send(pdfBuffer)
}