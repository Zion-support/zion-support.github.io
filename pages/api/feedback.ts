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
    // Mock Firebase initialization
    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  
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
  
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) {
    // Mock fallback
  }
  
  return ok(res, {
    id: doc.id
  });
}