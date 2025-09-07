<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/export/templates.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/book/export/templates.ts


=======


ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';
;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/export/templates.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

const templates = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/book/export/templates.ts
=======



const templates = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const templates = {
  lulu: {
    sizes: [
{
        name: 'US Letter',
        widthIn: 8.5,
        heightIn: 11,
        bleedIn: 0.125,
        marginIn: 0.75,
      },
      {
        name: 'A4',
        widthIn: 8.27,
        heightIn: 11.69,
        bleedIn: 0.125,
        marginIn: 0.75,
      },
    ],
  },
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]}
  amazon: {
    sizes: [
      {
        name: 'US Trade',
        widthIn: 6,
        heightIn: 9,
        bleedIn: 0.125,
        marginIn: 0.75,
      },
      {
        name: 'Letter',
        widthIn: 8.5,
        heightIn: 11,
        bleedIn: 0.125,
        marginIn: 0.75,
      },
    ],
  },
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates);
origin/cursor/automate-test-improve-and-merge-code-2533

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates);
};
import type { NextApiRequest, NextApiResponse } from 'next';
const templates = {;
  lulu: {;
    sizes: [;
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 },;
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }]},;
  blurb: {;
    sizes: [;
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },;
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]},;
  amazon: {;
    sizes: [;
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 },;
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}};
export default function handler(req, res) {
  try {
  res.status(200).json(templates);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}




<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/export/templates.ts
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/book/export/templates.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
