import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
  const isAdmin = req.headers['x-admin'] = = 'true'
  if (!isAdmin) return res.status(403).json({ error: any
  if (req.method = = 'GET'
    if (!targetType || Array.isArray(targetType) return res.status(400).json({ error: any
    if (!targetId || Array.isArray(targetId) return res.status(400).json({ error: any
  if (req.method = = 'POST'
    const authorId = String(req.headers['x-admin-user'] || 'admin'
    if (!targetType || !targetId || !text?.trim() return res.status(400).json({ error: any
  return res.status(405).json({ error: any