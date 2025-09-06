import type { NextApiRequest, NextApiResponse } from 'next'
import { readJson, writeJson } from '../../../utils/
  const redemptions = readJson<any[]>('tokens/
  writeJson('tokens/
    const reqs = readJson<any[]>('support/
    writeJson('support/