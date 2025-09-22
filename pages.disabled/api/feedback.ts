<<<<<<< HEAD:pages_backup/api/feedback.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import {
  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store";

import {
  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code;
  return ok(res, { id: doc.id })
}
origin/cursor/automate-test-improve-and-merge-code-2533
function ok(res: NextApiResponse, data: any) {
=======

import {}
  saveFeedbackFallback,
  FeedbackRecord,;
} from "../../utils/feedback/store";




import {};
  saveFeedbackFallback;
  FeedbackRecord"
} from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
  return res && res.status(200).json({ ok: true, ...data });
}
function bad(res: NextApiResponse, msg: string, code = 400) {}
  return res && res.status(code).json({ ok: false, error: msg });
}
async function tryWriteToFirestore(doc: FeedbackRecord) {}
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
<<<<<<< HEAD:pages_backup/api/feedback.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
    process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID |!FIREBASE_CLIENT_EMAIL |!FIREBASE_PRIVATE_KEY)
    return false;
  try {
    const admin = require('firebase-admin');
origin/cursor/automate-test-improve-and-merge-code-2533
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID
          clientEmail: FIREBASE_CLIENT_EMAIL
          privateKey: (FIREBASE_PRIVATE_KEY |"").replace(/\\n/g, "\n")
        })
process && process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY)
    return false;
  try {
    const admin = require("firebase-admin");
    if (admin && admin.apps.length === 0) {
      admin && admin.initializeApp({
        credential: admin && admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
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
          projectId: FIREBASE_PROJECT_ID;
          clientEmail: FIREBASE_CLIENT_EMAIL;
          privateKey: (FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
        });
      });
    }
<<<<<<< HEAD:pages_backup/api/feedback.ts
    const db = admin.firestore();
    await db.collection('interaction_feedback').doc(doc.id).set(doc);
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======



      });
    }

    const db = admin.firestore ();"
    await db.collection ("interaction_feedback").doc (doc.id).set (doc);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    const db = admin.firestore ();
    await db.collection ("interaction_feedback").doc (doc.id).set (doc);

    const db = admin.firestore();
    await db.collection('interaction_feedback').doc(doc.id).set(doc);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
    return true;
  } catch (e) {}
    return false;
  }
}
<<<<<<< HEAD:pages_backup/api/feedback.ts
=======
if (req && req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req && req.body || {};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts

<<<<<<< HEAD:pages_backup/api/feedback.ts
export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse
) {
  if (req.method !== 'POST') return bad(res, 'Method not allowed', 405);
  const { rating, comment, kind, context } = req.body || {};
origin/cursor/automate-test-improve-and-merge-code-2533
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, 'rating must be 1-5');
  const k: FeedbackRecord['kind'] =
    kind === 'bug' ? 'bug' : kind === 'feature' ? 'feature' : 'general';

  const user = {
<<<<<<< HEAD:pages_backup/api/feedback.ts
    id: (req.headers['x-demo-user-id'] as string) || undefined,
    role: (req.headers['x-demo-user-role'] as string) || undefined,
    talentSlug: (req.headers['x-demo-talent-slug'] as string) || undefined,
=======
id: (req && req.headers["x-demo-user-id"] as string) || undefined,
    role: (req && req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req && req.headers["x-demo-talent-slug"] as string) || undefined,
  };
    id: (req.headers['x-demo-user-id'] as string) || undefined;
    role: (req.headers['x-demo-user-role'] as string) || undefined;
    talentSlug: (req.headers['x-demo-talent-slug'] as string) || undefined;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  const doc: FeedbackRecord = {
    id: uuidv4();
    createdAtIso: new Date().toISOString();
    user;
    rating: r;
    comment: comment || undefined;
    kind: k;
    context: context || undefined;
  };

=======
  const r = Number(rating);"
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5");"
  const k: FeedbackRecord["kind"] ="
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {}
  const doc: FeedbackRecord = {}
    id: uuidv4()
    createdAtIso: new Date().toISOString()
    user;
    rating: r;
    comment: comment |undefined;
    kind: k;
    context: context |undefined;
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
<<<<<<< HEAD:pages_backup/api/feedback.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/feedback.ts
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
  return ok(res, { id: doc && doc.id });
}

<<<<<<< HEAD:pages_backup/api/feedback.ts
import type { NextApiRequest, NextApiResponse } from 'next';
function ok(res: NextApiResponse, data: any) {
  return res.status(200).json({
    ok: true
    ...data
  });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

export default async /**
 * handler - Function description
=======



export default async /**;
 * handler - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
 */
function handler() { return null; }
  if (return bad (res, "Method not allowed", 405)) {}
  $2;
}
  const { rating, comment, kind, context } = req.body || {}
  const r = Number (rating);"
  if (return bad (res, "rating must be 1 - 5")) {}
  $2;
}

  }
;
  const wrote = await tryWriteToFirestore (doc);
  if (saveFeedbackFallback (doc)) {}
  $2;
}
  return ok (res, { id: doc.id });
}

<<<<<<< HEAD:pages_backup/api/feedback.ts
function bad(res: NextApiResponse, msg: string, code = 400) {
  return res.status(code).json({
    ok: false
    error: msg
=======



function bad(res: NextApiResponse, msg: string, code = 400) {}
  return res.status(code).json({}
    ok: false,
    error: msg;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
  });
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/feedback.ts
export default async function handler(req, res) {
  try {
  const doc = {
    id: 'feedback-id'
    createdAtIso: new Date().toISOString()
    user: 'user'
    rating: 5
    comment: 'feedback comment'
    kind: 'general'
    context: 'api'
  };
  return ok(res, {
    id: doc.id
  });
import type { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuidv4 } from "uuid"
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store"
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data })   } catch (error) {
    console.error("Error:", error);
=======
export default async function handler(req, res) {}
  try {}
  const doc = {}
    id: 'feedback-id',
    createdAtIso: new Date().toISOString(),'
    user: 'user',
    rating: 5,'
    comment: 'feedback comment','
    kind: 'general','
    context: 'api';
  };
  return ok(res, {}
    id: doc.id;
  });"
import type { NextApiRequest, NextApiResponse } from "next","
import { v4 as uuidv4 } from "uuid","
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store",
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data })   } catch (error) {";
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg })   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/feedback.ts
async function tryWriteToFirestore(req, res) {
  try {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false
  try {
<<<<<<< HEAD:pages_backup/api/feedback.ts
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const admin = require("firebase-admin"),

    const admin = require("firebase-admin");
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID;
          clientEmail: FIREBASE_CLIENT_EMAIL;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
    const admin = require("firebase-admin")
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
<<<<<<< HEAD:pages_backup/api/feedback.ts
          projectId: FIREBASE_PROJECT_ID
          clientEmail: FIREBASE_CLIENT_EMAIL
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})})
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const db = admin.firestore()
    await db.collection("interaction_feedback").doc(doc.id).set(doc)
    return true
  } catch (e) {
    return false
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405)
  const { rating, comment, kind, context } = req.body || {}
  const r = Number(rating)
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5")
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general"
  const user = {
id: (req.headers["x-demo-user-id"] as string) || undefined,
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined},

  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req.body || {};
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");

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
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data })   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg })   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function tryWriteToFirestore(doc: FeedbackRecord) {;
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>;
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,;
  try {
    const admin = require("firebase-admin");
    if (admin.apps.length === 0) {;
      admin.initializeApp({;
        credential: admin.credential.cert({;
          projectId: FIREBASE_PROJECT_ID;
          clientEmail: FIREBASE_CLIENT_EMAIL;
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})});
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const db = admin.firestore();
    await db.collection("interaction_feedback").doc(doc.id).set(doc);
    return true;
  } catch (error) {
    return false;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req.body || {};
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");
<<<<<<< HEAD:pages_backup/api/feedback.ts
=======
async function tryWriteToFirestore(req, res) {}
  try {}
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>,
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,
  try {"
    const admin = require("firebase-admin"),


    if (admin.apps.length === 0) {}
      admin.initializeApp({}
        credential: admin.credential.cert({}
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,

  const doc: FeedbackRecord = {}
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
=======
context: context || undefined,
  };

  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc.id });
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {;"
    id: (req.headers["x-demo-user-id"] as string) || undefined;"
    role: (req.headers["x-demo-user-role"] as string) || undefined;"
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined};
  const doc: FeedbackRecord = {;
    id: uuidv4();
    createdAtIso: new Date().toISOString();
    user;
    rating: r,;
    comment: comment || undefined,;
    kind: k,;
    context: context || undefined},;
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc.id });
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/feedback.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
  return ok(res, { id: doc.id });

}}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:pages_backup/api/feedback.ts
<<<<<<< HEAD
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/feedback.ts
