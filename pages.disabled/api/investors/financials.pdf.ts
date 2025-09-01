import type { NextApiRequest, NextApiResponse } from 'next';
;
export { function };
export default function handler(...args: unknown[]): unknown {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="financials.pdf"');
  const pdfPlaceholder = Buffer.from('%PDF-1.4\n1 0 obj\n
;
export default function Financials.pdfPage() {
  return (
    <<>>\nendobj\ntrailer\n<<>>\n%%EOF');
  res.status(200).send(pdfPlaceholder);
}
  );
}