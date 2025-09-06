

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const { id } = req.query;

  if (typeof id !== "string")

    return res && res.status(400).json({ error: "Invalid id" });


  const user = parseUserFromRequest(req);

  if (req && req.method === "POST") {
    const dispute = await getDisputeById(id);

      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });

    }
    const { files } =

import type { NextApiRequest, NextApiResponse } from './next';
import path from './path';
import {
  ensureDisputeUploadDir,
  getDisputeById,
  upsert_dispute,
} from '../../../../utils / fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../../utils / auth';
export const config = {
  api: { body_parser: { size_limit: "20mb" } },
}
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { id } = req.query;
  if (
    return res.status (400).json ({ error: "Invalid id" })) {
  $2
}
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  $2
}
    const dispute = await getDisputeById (id);
    if (return res.status (404).json ({ error: "Dispute not found" })) {
  $2
}
    try {
      ensureInvolvedOrAdmin (user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status (e.status_code || 403).json ({ error: "Forbidden" });
    }
    const { files } =;
      req.body ||;

      ({} as {
        files: { file_name: string; mime_type: string; base64: string }[];
      });


    }


}



async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import("fs");
  await new Promise<void>((resolve, reject) => {



        );
      }
    );
  });



}


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['POST']);
  return res.status(405).end('Method Not Allowed');
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export const config = {;
  api: { bodyParser: { sizeLimit: '20mb' } }};
export default async function handler(req, res) {
  try {
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (error) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
