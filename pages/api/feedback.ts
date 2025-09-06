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
    // Placeholder implementation
    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    
    const wrote = await tryWriteToFirestore(doc);
    if (!wrote) {
      // Fallback implementation
    }
    
    return ok(res, {
      id: doc.id
    });
  } catch (error) {
    return bad(res, 'Internal server error', 500);
  }
}