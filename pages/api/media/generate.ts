import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
import type { NextApiRequest, NextApiResponse } from './next';
import { buildPressRelease  } from '../../../utils / media_kit';
;
export default async /**
 * handler - Function description
 */
function handler() {
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
    });
  }
}
}
