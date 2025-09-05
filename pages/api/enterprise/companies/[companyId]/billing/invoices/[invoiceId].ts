import type {_NextApiRequest, _NextApiResponse} from 'next';

export const _config = {_api: {
    responseLimit: false}};

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { companyId, _invoiceId} = req.query;
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {_return res.status(400).json({ error: 'companyId and invoiceId required'});
  }

  if (req.method !== 'GET') return res.status(405).json({_error: 'method_not_allowed'});

  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const _pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const _pdfBuffer = Buffer.from(pdfBase64, 'base64');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="invoice-${_invoiceId}.pdf"`);
  res.status(200).send(pdfBuffer);
}