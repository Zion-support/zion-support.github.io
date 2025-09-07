<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
export const config = {
  }
  "api": {
    }
    "responseLimit": false
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
    responseLimit: false
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
};

export default async function handler() {
  }
  const { companyId, invoiceId } = req.query;

  if (
    !companyId ||
    typeof companyId !== "string" ||"
    !invoiceId ||
    typeof invoiceId !== "string""
  ) {
    }
    return res.status(400).json({ "error": "companyId and invoiceId required" });"
  }

<<<<<<< HEAD
  if (req.method !== "GET")"
    return res.status(405).json({ "error": "method_not_allowed" });"
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {
    return res.status(400).json({ error: 'companyId and invoiceId required' })
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  // Minimal PDF bytes (single-page PDF saying Invoice). This is a static placeholder.
const pdfBase64 =;
    "JVBERi0xLjMKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA1NQogPj4Kc3RyZWFtCkJUIC9GMSAyNCBUZgovVGYgMTIwIDEyMCBUZAooSW52b2ljZSAjKElELSB7aW52b2ljZUlkfSkpIFQKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTYgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTY0IDAwMDAwIG4gCjAwMDAwMDAyNjggMDAwMDAgbiAKdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovU2l6ZSA1Cj4+CnN0YXJ0eHJlZgozNzIKJSVFT0Y=";"
  const pdfBuffer = Buffer.from(pdfBase64, "base64");"

  res.setHeader("Content-Type", "application/pdf");"
  res.setHeader(
    "Content-Disposition","
    `attachment; filename="invoice-${invoiceId}.pdf"`,`
  );
  res.status(200).send(pdfBuffer);
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ invoice: 'generated' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
}}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
