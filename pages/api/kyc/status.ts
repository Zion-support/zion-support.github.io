<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import type { KycProfile } from '../../../utils/kyc',
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc',
import fs from 'fs',
import path from 'path',
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join(DATA_DIR, 'profiles.json'),

function load(): Record<string KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8'),
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const { userId } = req.query as { userId?: string },
  if (!userId) return res.status(400).json({ error: 'Missing userId' }),
  const db = load(),
  const profile = db[userId],
  if (!profile) return res.status(404).json({ error: 'Profile not found' }),
  res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(profile.role),
    optionalDocuments: getOptionalDocuments(profile.role)})
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_KycProfile} from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const _FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {_try {
    const _raw = fs.readFileSync(FILE, _'utf8');
    return JSON.parse(raw);} catch {_return {};
  }
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const {_userId} = req.query as {_userId?: string};
  if (!userId) return res.status(400).json({_error: 'Missing userId'});
  const _db = load();
  const _profile = db[userId];
  if (!profile) return res.status(404).json({_error: 'Profile not found'});
  res.status(200).json({_ok: true, _profile, _requiredDocuments: getRequiredDocuments(profile.role), _optionalDocuments: getOptionalDocuments(profile.role)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}