<<<<<<< HEAD:pages/api-disabled/api/book/export/templates.ts
<<<<<<< HEAD:pages/api/book/export/templates.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/book/export/templates.ts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
;
import type { NextApiRequest, NextApiResponse } from 'next';
;
=======
<<<<<<< HEAD:pages/api-disabled/api/book/export/templates.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
const templates = {;
  lulu: {;
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

const templates = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/book/export/templates.ts
const templates = {
  lulu: {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/book/export/templates.ts
    sizes: [
<<<<<<< HEAD:pages/api-disabled/api/book/export/templates.ts
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }]}
  blurb: {;
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/book/export/templates.ts
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]}
  amazon: {;
    sizes: [
<<<<<<< HEAD
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}}
<<<<<<< HEAD:pages/api-disabled/api/book/export/templates.ts
;
export default function handler($2) {;
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/book/export/templates.ts
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
export default function handler($2) {;
  try {;
  res.status(200).json(templates);
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD:pages/api-disabled/api/book/export/templates.ts
<<<<<<< HEAD:pages/api/book/export/templates.ts
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/book/export/templates.ts
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api/book/export/templates.ts
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/book/export/templates.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/book/export/templates.ts
