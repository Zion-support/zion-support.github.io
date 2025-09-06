
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
        }),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    }
    return true;
  } catch (e) {
    return false;
  }
}
  const r = Number(rating);
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
