import type { NextApiRequest, NextApiResponse } from 'next',;
;
const templates = {;
  lulu:{;
    sizes:[;
      { name:'US Letter', widthIn:8.5, heightIn:11, bleedIn:0.125, marginIn:0.75 },;
      { name:'A4', widthIn:8.27, heightIn:11.69, bleedIn:0.125, marginIn:0.75 }]},;
  blurb:{;
    sizes:[;
      { name:'Standard Portrait', widthIn:8, heightIn:10, bleedIn:0.125, marginIn:0.75 },;
      { name:'Large Square', widthIn:12, heightIn:12, bleedIn:0.125, marginIn:0.75 }]},;
  amazon:{;
    sizes:[;
      { name:'US Trade', widthIn:6, heightIn:9, bleedIn:0.125, marginIn:0.75 },;
      { name:'Letter', widthIn:8.5, heightIn:11, bleedIn:0.125, marginIn:0.75 }]}},;
;
export default function handler(_req:NextApiRequest, res:NextApiResponse) {;
  res.status(200).json(templates);import { NextApiRequest, NextApiResponse } from 'next';

const templates = {
  lulu: {
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
  
  res.status(200).json({ templates });
}