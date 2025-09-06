import type { NextApiRequest, NextApiResponse } from 'next';

const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY;

interface FeedbackRecord {
  id: string;
  rating: number;
  comment?: string;
  kind: 'bug' | 'feature' | 'general';
  context?: Record<string, any>;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

function bad(res: NextApiResponse, message: string, status = 400) {
  return res.status(status).json({ error: message });
}

async function saveToFirebase(doc: FeedbackRecord): Promise<boolean> {
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false;
  try {
    const admin = require("firebase-admin");
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")
        })
      });
    }
    const db = admin.firestore();
    await db.collection("interaction_feedback").doc(doc.id).set(doc);
    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  
  const { rating, comment, kind, context } = req.body || {};
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");
  
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  
  const doc: FeedbackRecord = {
    id: `feedback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'] || undefined,
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string
  };

  const saved = await saveToFirebase(doc);
  if (!saved) {
    console.warn("Failed to save feedback to Firebase, but continuing");
  }

  return res.status(200).json({ success: true, id: doc.id });
}