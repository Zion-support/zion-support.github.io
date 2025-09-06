<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const templates = {
  lulu: {
    sizes: [
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }
    ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  },
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }
    ]
  },
  amazon: {
    sizes: [
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }
    ]
  }
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates);
<<<<<<< HEAD
=======
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }
    ]
  },
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }
    ]
  },
  amazon: {
    sizes: [
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
