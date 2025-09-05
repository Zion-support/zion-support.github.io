import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store",
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg }) }

async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>,
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,
  try {
    const admin = require("firebase-admin"),    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})})
    }
    const db = admin.firestore(),
    await db.collection("interaction_feedback").doc(doc.id).set(doc),
    return true  } catch (e) {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405),
  const { rating, comment, kind, context } = req.body || {},
  const r = Number(rating),
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5"),
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general",

  const user = {
    id: (req.headers["x-demo-user-id"] as string) || undefined,
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined},
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
import type {_NextApiRequest, _NextApiResponse} from "next";

function ok(_res: NextApiResponse, _data: unknown) {_return res.status(200).json({ ok: true, _...data}); }
function bad(_res: NextApiResponse, _msg: string, _code = 400) {_return res.status(code).json({ ok: false, _error: msg}); }

async function tryWriteToFirestore(_doc: FeedbackRecord) {_const { FIREBASE_PROJECT_ID, _FIREBASE_CLIENT_EMAIL, _FIREBASE_PRIVATE_KEY} = process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false;
  try {_const _admin = require("firebase-admin");
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID, _clientEmail: FIREBASE_CLIENT_EMAIL, _privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, _"\n")})});
    }
    const _db = admin.firestore();
    await db.collection("interaction_feedback").doc(doc.id).set(doc);
    return true;
  } catch (e) {_return false;}
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return bad(res, _"Method not allowed", _405);
  const { rating, _comment, _kind, _context} = req.body || {};
  const _r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";

  const _user = {_id: (req.headers["x-demo-user-id"] as string) || undefined, _role: (req.headers["x-demo-user-role"] as string) || undefined, _talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined};

  const doc: FeedbackRecord = {_id: uuidv4(), _createdAtIso: new Date().toISOString(), _user, _rating: r, _comment: comment || undefined, _kind: k, _context: context || undefined};

  const _wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, {_id: doc.id});
}