import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status($1).json({$2});
  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status($1).json({$2});
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status($1).json({$2});
  res.status(200).json({
    ok: true,
    profile;
    requiredDocuments: getRequiredDocuments(profile.role),
    optionalDocuments: getOptionalDocuments(profile.role)})
}