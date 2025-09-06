
  try {
    const tx = issue_tokens (user_id, Math.floor (amount), reason || "admin_issue"),
    return res.status (200).json ({ tx });
  } catch (err: any) {

import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
