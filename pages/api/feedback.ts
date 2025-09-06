<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
<<<<<<< HEAD
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {
  saveFeedbackFallback,
  FeedbackRecord,
} from "../../utils/feedback/store";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
    process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID |!FIREBASE_CLIENT_EMAIL |!FIREBASE_PRIVATE_KEY)
    return false;
  try {
    const admin = require("firebase-admin");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID
          clientEmail: FIREBASE_CLIENT_EMAIL
          privateKey: (FIREBASE_PRIVATE_KEY |"").replace(/\\n/g, "\n")
        })
<<<<<<< HEAD
        }),
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      });
    }
    const db = admin && admin.firestore();
    await db && db.collection("interaction_feedback").doc(doc && doc.id).set(doc);
    return true;
  } catch (e) {
    return false;
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req.body |{}
  const r = Number(rating);
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {
    id: (req.headers["x-demo-user-id"] as string) |undefined
    role: (req.headers["x-demo-user-role"] as string) |undefined
    talentSlug: (req.headers["x-demo-talent-slug"] as string) |undefined
  }
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
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  };

  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc && doc.id });
}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  const { rating, comment, kind, context } = req.body || {};
  const r = Number(rating);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";


  const doc: FeedbackRecord = {
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined,
  };

const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc.id });
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
