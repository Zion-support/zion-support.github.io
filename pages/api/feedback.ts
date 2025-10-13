import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  saveFeedbackFallback,
  FeedbackRecord,
} from "../../utils/feedback/store"
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store"
function ok(res: NextApiResponse, data: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return res && res.status(200).json({ ok: true, ...data })
}
function bad(res: NextApiResponse, msg: string, code = 400) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return res && res.status(code).json({ ok: false, error: msg })
}
async function tryWriteToFirestore(doc: FeedbackRecord) {;
const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
    process && process.env as Record<string, string | undefined>
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY)
    return false
  try {;
const admin = require("firebase-admin"
    if (admin && admin.apps.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      admin && admin.initializeApp({
  // TODO: Add properties
}
  // TODO: Add properties
}
        credential: admin && admin.credential.cert({
  // TODO: Add properties
}
  // TODO: Add properties
}
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || ""\n"),"firebase - admin")"").replace (/\\n / g, "),"
        }),
      })
    }
    const db = admin.firestore ()
    await db.collection (").doc (doc.id).set (doc)"
    return true
  } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return false
  }
  if (req && req.method !== ") return bad(res, "Method not allowed";
const { rating, comment, kind, context } = req && req.body || {}
  const r = Number(rating)
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5";
const k: FeedbackRecord["kind"
    kind === "bug"bug" : kind === " ? "feature"general";"x-demo-user-id"] as string) || undefined,"x-demo-user-role"] as string) || undefined,"x-demo-talent-slug"] as string) || undefined,"Method not allowed", 405)) {"rating must be 1 - 5")) {"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"next",";
import { v4 as uuidv4 } from "uuid";";
import { saveFeedbackFallback, FeedbackRecord } from ",";"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"firebase-admin"),"POST") return bad(res, ", 405);";
const { rating, comment, kind, context } = req.body || {}
  const r = Number(rating)
  if (!r || r < 1 || r > 5) return bad(res, ")"

}}))))