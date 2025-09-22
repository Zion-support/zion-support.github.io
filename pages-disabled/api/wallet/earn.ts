>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { NextApiRequest, NextApiResponse } from "next",;
import { earnTokens } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, metadata } = req.body || {}
  if (!userId || typeof amount !== "number" || !reason) {
=======
import type { NextApiRequest, NextApiResponse } from "next",;"
import { earnTokens } from "../../../utils/token/service",;
export default function handler() { return null; }
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason, metadata } = req.body || {},"
  if (!userId || typeof amount !== "number" || !reason) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(400).json({ error: "userId, amount, reason required" })

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } catch (error) {
    console.error("Error:", error);
=======
    } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
=======
    const tx = null;
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
