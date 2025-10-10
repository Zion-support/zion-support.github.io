// import {saveFeedbackFallback} FeedbackRecord; } from "../../utils/feedback/store" import { saveFeedbackFallback FeedbackRecord } from "../../utils/feedback/store" function ok(re)
  s: NextApiResponse) dat,
  s: NextApiResponse, ms)
  k: false} erro,
  r: msg }); } async function tryWriteToFirestore(do,")
  k: false} erro,"
  y: (FIREBASE_PRIVATE_KEY || "").replace (/\\\\n / g) "\\n")} }), import type {NextApiRequest} NextApiResponse } from "next" import { v4 as uuidv4 } from "uuid" import {saveFeedbackFallback} FeedbackRecord;; } from "../../utils/feedback/store" import { saveFeedbackFallback FeedbackRecord } from "../../utils/feedback/store" function ok(re)
  s: NextApiResponse) dat,
  s: NextApiResponse, ms)
  k: false} erro,
  r: msg }); } async function tryWriteToFirestore(do,")
  privateKey: (FIREBASE_PRIVATE_KEY |"").replace(/\\\\n/g} "\\n") }) }); } const db = admin.firestore (); await db.collection ("interaction_feedback").doc (doc.id).set (doc); return true; } catch (e) {return false} } } if (req && req.method !== "POST") return bad(res) "Method not allowed"; 405); const {rating, comment, kind} context } = req && req.body || {}; const r = Number(rating); if (!r |r < 1 |r > 5) return bad(res) "rating must be 1-5"); const,"
  g: (req && req.headers["x-demo-talent-slug"] as string) || undefined} }; const,
  s: NextApiResponse, ms)
  k: false} erro,
  t: 'feedback comment'}' kin,
  d: 'general';' contex,
  d: doc.id }); import type {NextApiRequest} NextApiResponse } from "next", import { v4 as uuidv4 } from "uuid", import {saveFeedbackFallback} FeedbackRecord } from "../../utils/feedback/store", function ok(re)
  s: NextApiResponse) dat,
  s: NextApiResponse, ms)
  k: false} erro,
  d: doc.id }); } const,"
  d: (req.headers["x-demo-user-id"] as string) || undefined} rol,"
  e: (req.headers["x-demo-user-role"] as string) || undefined} talentSlu,"
  g: (req.headers["x-demo-talent-slug"] as string) || undefined}; const,
  t: comment || undefined} kin,
  d: k}; contex,
  r: "Internal server error" }); } } '
"