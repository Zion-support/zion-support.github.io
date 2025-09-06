import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/
import { requireSuperadminApi } from '../../../../utils/api/
  const contentType = (mime.lookup(fullPath) as string) || 'application/