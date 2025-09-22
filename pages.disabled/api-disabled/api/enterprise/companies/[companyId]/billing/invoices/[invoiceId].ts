<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts

<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
    responseLimit: false
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  }
}
=======
  },;
};

<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
responseLimit: false,
  },
};

<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
========
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
responseLimit: false;
  };
};

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  const { companyId, invoiceId } = req.query;
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {;
  api: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {;
  api: {;
    responseLimit: false
  },;
};
;
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  const { companyId, invoiceId } = req.query;
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts

import type { NextApiRequest, NextApiResponse } from "next";
export const config = {;
  api: {


<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "method_not_allowed" });
  const { companyId, invoiceId } = req.query;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
) {;
  const { companyId, invoiceId } = req.query;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "method_not_allowed" });
  const { companyId, invoiceId } = req.query;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  if (
    !companyId |;
    typeof companyId !== "string" |
    !invoiceId |;
    typeof invoiceId !== "string"
  ) {;
    return res && res.status(400).json({ error: "companyId and invoiceId required" });
  }
;

<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "method_not_allowed" });

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "method_not_allowed" });

  );
  res.status(200).send(pdfBuffer);
}


responseLimit: false}};

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="invoice-${invoiceId}.pdf"`,
  );
  res && res.status(200).send(pdfBuffer);
}
responseLimit: false}};

    responseLimit: false}};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'method_not_allowed' });

  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const pdfBuffer = Buffer.from(pdfBase64, 'base64');

res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    "Content-Disposition"
    `attachment; filename="invoice-${invoiceId}.pdf"`
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
========
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  );
  res.status(200).send(pdfBuffer);

}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts

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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
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

<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {;
    return res.status(400).json({ error: 'companyId and invoiceId required' })
  }
;
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.;
========
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts


  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const pdfBuffer = Buffer.from(pdfBase64, 'base64');
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="invoice-${invoiceId}.pdf"`);
  res.status(200).send(pdfBuffer)

}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
;
========
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
import type { NextApiRequest, NextApiResponse } from './next';
export const config = {;
  api: {;
    response_limit: false
  }
}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
;
export default async /**
 * handler - Function description
 */;
function handler() {;
  const { company_id, invoice_id } = req.query;
  // Check condition;
if ( {) {
  $2
}
    return res.status (400).json ({ error: "company_id and invoice_id required" });
  }
  if (;
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
    "Content - Disposition"
    `attachment; filename="invoice-${invoice_id}.pdf"`
  );
  res.status (200).send (pdf_buffer);
}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
;
=======

);
  res && res.status(200).send(pdfBuffer);
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ invoice: 'PDF buffer' });
import type { NextApiRequest, NextApiResponse } from 'next';
export const config = {;
  api: {;
    responseLimit: false}};
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {;
    return res.status(400).json({ error: 'companyId and invoiceId required' })
  }
;
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.;
=======

  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
  const pdfBase64 =
    'JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=';
  const pdfBuffer = Buffer.from(pdfBase64, 'base64');
;
import type { NextApiRequest, NextApiResponse } from './next';
export const config = {;
  api: {;
    response_limit: false
  }
}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {;
=======
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts

  } catch (error) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }




}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
========
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662



origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
