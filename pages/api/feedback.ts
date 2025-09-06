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

async function tryWriteToFirestore(doc: any) {
  const {
    FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY
  } = process.env as Record<string, string | undefined>;
  
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false;
  
  try {
    // Firebase initialization would go here
    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const doc = {
    id: 'temp-id',
    createdAtIso: new Date().toISOString(),
    user: 'anonymous',
    rating: 5,
    comment: req.body?.comment || undefined,
    kind: 'general',
    context: req.body?.context || undefined
  };
  
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) {
    // Fallback handling would go here
  }
  
  return ok(res, {
    id: doc.id
  });
}