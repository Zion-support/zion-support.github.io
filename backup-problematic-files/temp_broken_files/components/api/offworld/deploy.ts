import type { NextApiRequest, NextApiResponse } from 'next'
import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'
import { addDirectory } from '@/utils/offworld/
      return res.status(500).json({ error: 'Export failed, no out/