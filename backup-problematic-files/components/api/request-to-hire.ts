import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    return res.status(400).json({ error: any
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/
    // // //
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/