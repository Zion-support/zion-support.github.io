import { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';
;

const templates = null;



const templates = null;
origin/cursor/automate-test-improve-and-merge-code-2533


const templates = {
  lulu: {
    sizes: [
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }
    ]
  },
  amazon: {
    sizes: [
      { name: 'A4', width: 210, height: 297 },
      { name: 'A5', width: 148, height: 210 }
    ]
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json(templates);
} 
