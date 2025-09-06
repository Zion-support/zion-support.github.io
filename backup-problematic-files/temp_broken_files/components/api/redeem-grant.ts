import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs-extra"
import path from "path"
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/