<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import {
  saveFeedbackFallback,
  FeedbackRecord,
} from "../../utils/feedback/store";


<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

    process && process.env as Record<string, string | undefined>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY)
    return false;
  try {
    const admin = require("firebase-admin");
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (admin && admin.apps.length === 0) {
      admin && admin.initializeApp({
        credential: admin && admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }),
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import {
  saveFeedbackFallback,
  FeedbackRecord,;
} from "../../utils/feedback/store";

import {
  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) {
  return res.status(200).json({ ok: true, ...data });
}
function bad(res: NextApiResponse, msg: string, code = 400) {
  return res.status(code).json({ ok: false, error: msg });
}
async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
    process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID |!FIREBASE_CLIENT_EMAIL |!FIREBASE_PRIVATE_KEY)
    return false;
  try {
    const admin = require("firebase-admin");
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID
          clientEmail: FIREBASE_CLIENT_EMAIL
          privateKey: (FIREBASE_PRIVATE_KEY |"").replace(/\\n/g, "\n")
        })
      });
    }
<<<<<<< HEAD
    const db = admin.firestore ();
    await db.collection ("interaction_feedback").doc (doc.id).set (doc);
=======
=======

        }),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const db = admin.firestore ();
    await db.collection ("interaction_feedback").doc (doc.id).set (doc);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return true;
  } catch (e) {
    return false;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req.body |{}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (req && req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req && req.body || {};

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const r = Number(rating);
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: (req && req.headers["x-demo-user-id"] as string) || undefined,
    role: (req && req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req && req.headers["x-demo-talent-slug"] as string) || undefined,
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
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

import type { NextApiRequest, NextApiResponse } from 'next';
function ok(res: NextApiResponse, data: any) {
  return res.status(200).json({
    ok: true,
    ...data
  });
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
function bad(res: NextApiResponse, msg: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: msg
  });
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
  const doc = {
    id: 'feedback-id',
    createdAtIso: new Date().toISOString(),
    user: 'user',
    rating: 5,
    comment: 'feedback comment',
    kind: 'general',
    context: 'api'
  };
  return ok(res, {
    id: doc.id
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store",
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
async function tryWriteToFirestore(req, res) {
  try {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>,
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,
  try {
    const admin = require("firebase-admin"),
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
        }),
      });
    }
    const db = admin.firestore();
    await db.collection("interaction_feedback").doc(doc.id).set(doc);
    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
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
    const db = admin.firestore(),
    await db.collection("interaction_feedback").doc(doc.id).set(doc),
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
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";

  const user = {
    id: (req.headers["x-demo-user-id"] as string) || undefined,
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined,
  };

  const doc: FeedbackRecord = {
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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

  }
;
  const wrote = await tryWriteToFirestore (doc);
  if (saveFeedbackFallback (doc)) {
  $2
}
  return ok (res, { id: doc.id });
}

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function bad(res: NextApiResponse, msg: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: msg
  });
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
  const doc = {
    id: 'feedback-id',
    createdAtIso: new Date().toISOString(),
    user: 'user',
    rating: 5,
    comment: 'feedback comment',
    kind: 'general',
    context: 'api'
  };
  return ok(res, {
    id: doc.id
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store",
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
async function tryWriteToFirestore(req, res) {
  try {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>,
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,
  try {
    const admin = require("firebase-admin"),


    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,


  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req.body || {};
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");

<<<<<<< HEAD
  };

  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc.id });
}
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {;
    id: (req.headers["x-demo-user-id"] as string) || undefined;
    role: (req.headers["x-demo-user-role"] as string) || undefined;
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
