import type { NextApiRequest, NextApiResponse } from 'next';

function ok(res: NextApiResponse, data: any) {
  return res.status(200).json({
    ok: true,
    ...data
  });
}

function bad(res: NextApiResponse, msg: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: msg
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const doc = {
    id: 'feedback-id',
    createdAtIso: new Date().toISOString(),
    user: 'user',
    rating: 5,
    comment: 'feedback comment',
    kind: 'general',
    context: 'api'
  };
  
  return ok(res, {
    id: doc.id
  });
}