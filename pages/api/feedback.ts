import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

interface FeedbackRecord {
  id: string;
  createdAtIso: string;
  user?: string;
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

  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
    return false;
  }

  try {
    // Mock Firebase write
    console.log('Writing to Firestore:', doc);
    return true;
  } catch (e) {
    return false;
  }
}

function saveFeedbackFallback(doc: FeedbackRecord) {
  // Mock fallback save
  console.log('Saving feedback fallback:', doc);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return bad(res, 'Method not allowed', 405);
  }

  try {
    const { user, rating, comment, kind, context } = req.body;

    if (!rating || !kind) {
      return bad(res, 'Rating and kind are required');
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
    if (!wrote) {
      saveFeedbackFallback(doc);
    }

    return ok(res, {
      id: doc.id
    });
  } catch (error) {
    console.error('Feedback error:', error);
    return bad(res, 'Failed to save feedback', 500);
  }
}