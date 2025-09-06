import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  try {
    const { user, rating, comment, kind, context } = req.body;
    
    const doc = {
      id: Date.now().toString(),
      createdAtIso: new Date().toISOString(),
      user,
      rating,
      comment: comment || undefined,
      kind,
      context: context || undefined
    };
    
    res.status(200).json({
      ok: true,
      id: doc.id
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: 'Internal server error'
    });
  }
}