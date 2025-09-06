import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
  }
