import type { NextApiRequest, NextApiResponse } from 'next',
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
export const config = null;
    res.status(200).json({ ok: true })
  })
}
