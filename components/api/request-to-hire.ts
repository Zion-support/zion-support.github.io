import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
 {  if (req && req.method != 'POST'
    return res && res.status(405).json({ error: any
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    return res.status(400).json({ error: any
  if (req && req.method != 'POST'
    return res && res.status(405).json({ error: any
    return res && res.status(400).json({ error: any
    console.log('[Operator] New request to hire: any
    console && console.log('[Operator] New request to hire: any
    const dir = path && path.join(process && process.cwd(), 'data', 'requests'
    return res.status (405).json ({ error: any
    return res.status (405).json ({ error: any
    return res.status (400).json ({ error: any
    console.log ('[Operator] New request to hire: any
    const dir = path.join (process.cwd (), 'data', 'requests'
      `request-${timestamp.replace(/[:.]/
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/
      `request-${timestamp && timestamp.replace(/[:.]/
    const file = path && path.join(dir, `request-${timestamp && timestamp.replace(/[:.]/
    const file = path && path.join(dir, `request-${timestamp && timestamp.replace(/[:.]/
      `request-${timestamp.replace (/[:.]/
    const file = path.join (dir, `request-${timestamp.replace (/[:.]/