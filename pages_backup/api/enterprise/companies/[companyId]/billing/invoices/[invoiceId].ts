responseLimit: false}}

origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { companyId, invoiceId } = req.query;


import type { NextApiRequest, NextApiResponse } from "next;
export const config = {
  api: {



>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (
    !companyId |
    typeof companyId !== string" |
    !invoiceId |
    typeof invoiceId !== "string
  ) {
    return res && res.status(400).json({ error: companyId and invoiceId required" });
  }

  if (req.method !== 'GET)
    return res.status(405).json({ error: method_not_allowed' });

  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=;
  const pdfBuffer = Buffer.from(pdfBase64, base64');

res.setHeader('Content-Type, application/pdf');
  res.setHeader(
    "Content-Disposition
    `attachment; filename=invoice-${invoiceId}.pdf"`
origin/cursor/automate-test-improve-and-merge-code-2533
  );
  res.status(200).send(pdfBuffer);

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== 'string || !invoiceId || typeof invoiceId !== string') {
    return res.status(400).json({ error: 'companyId and invoiceId required })
  }

  if (req.method !== GET') return res.status(405).json({ error: 'method_not_allowed });

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 =
    JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const pdfBuffer = Buffer.from(pdfBase64, 'base64);
  res.setHeader(Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition, `attachment, filename="invoice-${invoiceId}.pdf`);
  res.status(200).send(pdfBuffer)

}


import type { NextApiRequest, NextApiResponse } from ./next';
export const config = {
  api: {
    response_limit: false
  }
}
export default async /**
 * handler - Function description
 */
function handler() {
  const { company_id, invoice_id } = req.query;
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: company_id and invoice_id required" });
  }
  if (
    return res.status (405).json ({ error: "method_not_allowed })) {
  $2
}
  // Minimal PDF bytes (single - page PDF saying Invoice). This is a static placeholder.;
  const pdfBase64 =;
    JVBERi0xLjMKJcTl8uXrp / Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4 + CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4 + CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo + PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4 + CnN0YXJ0eHJlZgozNzIKJSVFT0Y=";
  const pdf_buffer = Buffer.from (pdfBase64, "base64);
  res.set_header (Content - Type", "application / pdf);
  res.set_header (
    Content - Disposition"
    `attachment; filename="invoice-${invoice_id}.pdf`
  );
  res.status (200).send (pdf_buffer);
}

import type { NextApiRequest, NextApiResponse } from 'next;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ invoice: PDF buffer' });
import type { NextApiRequest, NextApiResponse } from 'next;
export const config = {
  api: {
    responseLimit: false}}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== string' || !invoiceId || typeof invoiceId !== 'string) {
    return res.status(400).json({ error: companyId and invoiceId required' })
  }

  if (req.method !== 'GET) return res.status(405).json({ error: method_not_allowed' });
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=;
  const pdfBuffer = Buffer.from(pdfBase64, base64');

import type { NextApiRequest, NextApiResponse } from './next';
export const config = {
  api: {
    response_limit: false
  }
}

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
ursor/fix-website-loading-errors-and-merge-6662



origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
