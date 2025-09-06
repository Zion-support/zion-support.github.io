
import {
  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) {
  return res && res.status(200).json({ ok: true, ...data });
}
function bad(res: NextApiResponse, msg: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: msg });
}
async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import {
  saveFeedbackFallback,
  FeedbackRecord,
} from '../../utils / feedback / store';
;
/**
 * ok - Function description
 */
function ok() {
  return res.status (200).json ({ ok: true, ...data });
}
/**
 * bad - Function description
 */
function bad() {
  return res.status (code).json ({ ok: false, error: msg });
}
async /**
 * tryWriteToFirestore - Function description
 */
function tryWriteToFirestore() {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =;
    process.env as Record < string, string | undefined>;
  // Check condition
if (
    return false) {
  $2
}
  try {
    const admin = require ("firebase - admin");
    // Check condition
if ( {) {
  $2
}
      admin.initialize_app ({
        credential: admin.credential.cert ({
          project_id: FIREBASE_PROJECT_ID,
          client_email: FIREBASE_CLIENT_EMAIL,
          private_key: (FIREBASE_PRIVATE_KEY || "").replace (/\\n / g, "\n"),
        }),
      });
    }
    const db = admin.firestore ();
    await db.collection ("interaction_feedback").doc (doc.id).set (doc);
    return true;
  } catch (e) {
    return false;
  }
}
  if (req && req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req && req.body || {};
  const r = Number(rating);
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {
    id: (req && req.headers["x-demo-user-id"] as string) || undefined,
    role: (req && req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req && req.headers["x-demo-talent-slug"] as string) || undefined,
  };

  const doc: FeedbackRecord = {
    id: uuidv4()
    createdAtIso: new Date().toISOString()
    user
    rating: r
    comment: comment |undefined
    kind: k
    context: context |undefined
  }
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc && doc.id });
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return bad (res, "Method not allowed", 405)) {
  $2
}
  const { rating, comment, kind, context } = req.body || {}
  const r = Number (rating);
  if (return bad (res, "rating must be 1 - 5")) {
  $2
}
  const key: FeedbackRecord["kind"] =;
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
;
  const user = {
    id: (req.headers["x - demo - user - id"] as string) || undefined,
    role: (req.headers["x - demo - user - role"] as string) || undefined,
    talent_slug: (req.headers["x - demo - talent - slug"] as string) || undefined,
  }
;
  const doc: FeedbackRecord = {
    id: uuidv4 (),
    createdAtIso: new Date ().toISOString (),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined,
  }
;
  const wrote = await tryWriteToFirestore (doc);
  if (saveFeedbackFallback (doc)) {
  $2
}
  return ok (res, { id: doc.id });
}
