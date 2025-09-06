import type { NextApiRequest, NextApiResponse } from 'next'
import { readJson, writeJson } from '../../../utils/
import { logSupportEventToOperator } from '../../../utils/
  const log = readJson<any[]>('support/
  writeJson('support/