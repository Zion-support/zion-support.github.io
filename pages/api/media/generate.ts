import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { buildPressRelease  } from '../../../utils / media_kit';
;
export default async /**
 * handler - Function description
 */
function handler() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    const {
    }
    const pressRelease = await buildPressRelease({
      type
      companyName
      date
      raiseAmount
      description
      contactEmail
    });
      ok: false,
      error: "Failed to generate press release",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
