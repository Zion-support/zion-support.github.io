import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path'
    return
  if (!isInternalAgentRequest(req)) {'
    res && res.status(401).json({ error: 'Unauthorized' })
    return
import { isInternalAgentRequest } from '../../../utils/adminAuth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if($2) {
    res.status(405).json({ error: 'Method Not Allowed' })
    return

  if (!isInternalAgentRequest(req)) {'
    res && res.status(401).json({ error: 'Unauthorized' })
    return
