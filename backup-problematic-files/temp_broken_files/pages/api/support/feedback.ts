import type { NextApiRequest, NextApiResponse } from 'next'
import { readJson, writeJson } from '../../../utils/
  const feedback = readJson<any[]>('support/
  writeJson('support/