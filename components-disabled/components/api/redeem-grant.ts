import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
    partnerId: auth.partner.id,
    studentEmail,
    grantCode,
    courseId,




  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {







=======
    redeemedAt: now,
  };
  records.push(record);
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id, redeemedAt: now });
}
