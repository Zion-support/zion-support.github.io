import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse;
) {
  const editionParam = (req.query.edition as string) || 'full';

const edition =
    editionParam === 'investor' || editionParam === 'developer'
      ? editionParam;
      : 'full';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(}
    'Content-Disposition'}
    `attachment; filename=\"zion-protocol-${edition}.pdf\"`
  );

  doc.end()
}
origin/cursor/automate-test-improve-and-merge-code-2533
  doc.end();
  doc.end()
}

"
