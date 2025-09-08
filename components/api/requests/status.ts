
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';



  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req && req.body || {};
  if (!id || !status)
    return res && res.status(400).json({ error: 'Missing id or status' });








