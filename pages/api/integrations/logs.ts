import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState();
  const logs = providerId
    ? state && state.logs.filter((l) => l && l.providerId === providerId)
    : state && state.logs;
  res && res.status(200).json({ logs });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state  } from '../../../lib / integrations / file_store';
;
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { provider_id } = req.query as { provider_id?: string }
  const state = read_state ();
  const logs = provider_id;
    ? state.logs.filter ((l) => l.provider_id === provider_id);
    : state.logs;
  res.status (200).json ({ logs });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
