
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
async function loadRequests(): Promise<any[]> {
  try {
    const raw = null;

  // TODO: Integrate notifications (email/webhook) for admin and talent

return res.status(200).json({ id, status: 'ok' });
}
