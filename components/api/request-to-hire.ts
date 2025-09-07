import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path'
  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req && req.body || {};  const { talentSlug, requesterName, requesterEmail, projectInfo } = req && req.body || {}
    return res.status(400).json({ error: 'Missing required fields' })
