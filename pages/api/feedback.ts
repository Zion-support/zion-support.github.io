<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store",
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;
import { saveFeedbackFallback, FeedbackRecord } from &quot;../../utils/feedback/store&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg }) }

async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>,
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,
  try {
<<<<<<< HEAD
    const admin = require("firebase-admin"),
=======
    const admin = require(&quot;firebase-admin&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
<<<<<<< HEAD
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})})
    }
    const db = admin.firestore(),
    await db.collection("interaction_feedback").doc(doc.id).set(doc),
    return true
=======
          privateKey: (FIREBASE_PRIVATE_KEY || "&quot;).replace(/\\n/g, &quot;\n&quot;)})});
    }
    const db = admin.firestore();
    await db.collection(&quot;interaction_feedback&quot;).doc(doc.id).set(doc);
    return true;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (e) {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return bad(res, "Method not allowed", 405),
  const { rating, comment, kind, context } = req.body || {},
  const r = Number(rating),
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5"),
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general",

  const user = {
    id: (req.headers["x-demo-user-id"] as string) || undefined,
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined},
=======
  if (req.method !== &quot;POST&quot;) return bad(res, &quot;Method not allowed&quot;, 405);
  const { rating, comment, kind, context } = req.body || {};
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, &quot;rating must be 1-5&quot;);
  const k: FeedbackRecord[&quot;kind&quot;] = kind === &quot;bug&quot; ? &quot;bug&quot; : kind === &quot;feature&quot; ? &quot;feature&quot; : &quot;general&quot;;

  const user = {
    id: (req.headers[&quot;x-demo-user-id&quot;] as string) || undefined,
    role: (req.headers[&quot;x-demo-user-role&quot;] as string) || undefined,
    talentSlug: (req.headers[&quot;x-demo-talent-slug"] as string) || undefined};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const doc: FeedbackRecord = {
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined},

  const wrote = await tryWriteToFirestore(doc),
  if (!wrote) saveFeedbackFallback(doc),
  return ok(res, { id: doc.id })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { v4 as uuidv4 } from "uuid",;
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store",;
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg }) }
;
async function tryWriteToFirestore(doc: FeedbackRecord) {;
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>,;
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,;
  try {;
    const admin = require("firebase-admin"),;
    if (admin.apps.length === 0) {;
      admin.initializeApp({;
        credential: admin.credential.cert({;
          projectId: FIREBASE_PROJECT_ID,;
          clientEmail: FIREBASE_CLIENT_EMAIL,;
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})});
    }
    const db = admin.firestore(),;
    await db.collection("interaction_feedback").doc(doc.id).set(doc),;
    return true;
  } catch (e) {;
    return false;
  }
}
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return bad(res, "Method not allowed", 405),;
  const { rating, comment, kind, context } = req.body || {},;
  const r = Number(rating),;
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5"),;
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general",;
  const user = {;
    id: (req.headers["x-demo-user-id"] as string) || undefined,;
    role: (req.headers["x-demo-user-role"] as string) || undefined,;
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined},;
  const doc: FeedbackRecord = {;
    id: uuidv4(),;
    createdAtIso: new Date().toISOString(),;
    user,;
    rating: r,;
    comment: comment || undefined,;
    kind: k,;
    context: context || undefined},;
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc.id });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}