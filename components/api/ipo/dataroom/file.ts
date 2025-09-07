import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'
import mime from 'mime-types';'

import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';'
import { requireSuperadminApi } from '../../../../utils/api/auth';'

const section = null;
  fs.createReadStream(fullPath).pipe(res)
}

