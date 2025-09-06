
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
    responseLimit: false
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
    responseLimit: false,
  },;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { companyId, invoiceId } = req.query;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {


<<<<<<< HEAD
<<<<<<< HEAD
=======
if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "method_not_allowed" });
  const { companyId, invoiceId } = req.query;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (
    !companyId |
    typeof companyId !== "string" |
    !invoiceId |
    typeof invoiceId !== "string"
  ) {
    return res && res.status(400).json({ error: "companyId and invoiceId required" });
  }


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "method_not_allowed" });

  );
  res.status(200).send(pdfBuffer);
}

=======
    responseLimit: false}};

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="invoice-${invoiceId}.pdf"`,
  );
  res && res.status(200).send(pdfBuffer);
}
<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ invoice: 'PDF buffer' });
import type { NextApiRequest, NextApiResponse } from 'next';
export const config = {;
  api: {;
=======
<<<<<<< HEAD
responseLimit: false}};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    responseLimit: false}};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {
    return res.status(400).json({ error: 'companyId and invoiceId required' })
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const pdfBuffer = Buffer.from(pdfBase64, 'base64');
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="invoice-${invoiceId}.pdf"`);
  res.status(200).send(pdfBuffer)

}

import type { NextApiRequest, NextApiResponse } from './next';
export const config = {
  api: {
    response_limit: false,
  },
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { company_id, invoice_id } = req.query;
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "company_id and invoice_id required" });
  }
  if (
    return res.status (405).json ({ error: "method_not_allowed" })) {
  $2
}
  // Minimal PDF bytes (single - page PDF saying Invoice). This is a static placeholder.;
  const pdfBase64 =;
    "JVBERi0xLjMKJcTl8uXrp / Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4 + CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4 + CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo + PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4 + CnN0YXJ0eHJlZgozNzIKJSVFT0Y=";
  const pdf_buffer = Buffer.from (pdfBase64, "base64");
;
  res.set_header ("Content - Type", "application / pdf");
  res.set_header (
    "Content - Disposition",
    `attachment; filename="invoice-${invoice_id}.pdf"`,
  );
  res.status (200).send (pdf_buffer);
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
  );
  res && res.status(200).send(pdfBuffer);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ invoice: 'PDF buffer' });
import type { NextApiRequest, NextApiResponse } from 'next';
export const config = {;
  api: {;
    responseLimit: false}};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {
    return res.status(400).json({ error: 'companyId and invoiceId required' })
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const pdfBuffer = Buffer.from(pdfBase64, 'base64');

import type { NextApiRequest, NextApiResponse } from './next';
export const config = {
  api: {
    response_limit: false,
  },
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
