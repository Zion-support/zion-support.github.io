import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const user = parseUserFromRequest(req);
      );
    }
    return res && res.status(200).json({ disputes: filtered });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
      description,
    } = req && req.body || {};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const id = generateCaseId();
      description,
    } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    const id = generateCaseId ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    const dispute: DisputeCase = {

  res && res.setHeader("Allow", "GET,POST");
  return res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
=======
      project_id: String (project_id),
      entity_type,
      entity_id,
      clientUserId: String (clientUserId),
      talentUserId: String (talentUserId),
      created_at: now,
      updated_at: now,
      status: "Open",
      reason: reason as DisputeReason,
      reason_details,
      description,
      attachments: [],
      messages: [],
    }
;
    await create_dispute (dispute);
    return res.status (201).json ({ dispute });
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
