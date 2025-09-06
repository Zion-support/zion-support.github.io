import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, region, service } = req.body || {};
  
  const user = `Topic: ${prompt || 'general'} Region: ${region || 'global'} Service focus: ${service || 'general'} Audience: buyers looking to hire talent or rent equipment Tone: professional, modern, trustworthy`;
  
  res.status(200).json({ 
    content: 'SEO content generated',
    user 
  });
}