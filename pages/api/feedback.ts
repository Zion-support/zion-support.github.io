import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

interface FeedbackRecord {
  id: string;
  createdAtIso: string;
  user: string;
  rating: number;
  comment?: string;
  kind: string;
  context?: string;
}

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

async function tryWriteToFirestore(doc: FeedbackRecord) {
  const {
    FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY
  } = process.env as Record<string, string | undefined>;
  
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false;
  
  try {
    // Firebase logic would go here
    return true;
  } catch (e) {
    return false;
  }
}

function saveFeedbackFallback(doc: FeedbackRecord) {
  // Fallback storage logic would go here
  console.log('Saving feedback fallback:', doc);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return bad(res, 'Method not allowed', 405);
  }
  
  const { user, rating, comment, kind, context } = req.body;
  
  if (!user || !rating || !kind) {
    return bad(res, 'Missing required fields');
  }
  
  const doc: FeedbackRecord = {
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating,
    comment: comment || undefined,
    kind,
    context: context || undefined
  };
  
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  
  return ok(res, {
    id: doc.id
  });
}