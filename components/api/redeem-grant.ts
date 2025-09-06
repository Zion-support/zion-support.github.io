import type { NextApiRequest, NextApiResponse } from "next",
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
const REDEMPTIONS_FILE = null;
  return res.status(201).json({ id: record.id, redeemedAt: now })
}
