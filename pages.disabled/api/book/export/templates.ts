








ursor/fix-website-loading-errors-and-merge-6662

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';
;

const templates = null;
origin/cursor/automate-test-improve-and-merge-code-2533
const templates = {
  lulu: {
    sizes: [
{
        name: 'US Letter';
        widthIn: 8.5;
        heightIn: 11;
        bleedIn: 0.125;
        marginIn: 0.75;
      };
      {
        name: 'A4';
        widthIn: 8.27;
        heightIn: 11.69;
        bleedIn: 0.125;
        marginIn: 0.75;
      };
    ];
  };
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]}
  amazon: {
    sizes: [
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}}
      {
        name: 'US Trade';
        widthIn: 6;
        heightIn: 9;
        bleedIn: 0.125;
        marginIn: 0.75;
      };
      {
        name: 'Letter';
        widthIn: 8.5;
        heightIn: 11;
        bleedIn: 0.125;
        marginIn: 0.75;
      };
    ];
  };
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
    // TODO: Implement templates logic
    res.status(200).json({ message: 'templates endpoint' });
  } catch (error) {
    console.error('Error in templates:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}
}


}


}



