<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc',
import fs from 'fs',
import path from 'path',
import crypto from 'crypto',
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

function save(db: Record<string KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string },
  if (!userId || !kind || !filename) return res.status(400).json({ error: 'Missing userId, kind or filename' }),

  const db = load(),
  const profile = db[userId],
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' }),

  const id = crypto.randomUUID(),
  const uploadedAt = new Date().toISOString(),
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
    uploadedAt},
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind),
  profile.documents = [...withoutSameKind, doc],
  profile.lastUpdatedAt = uploadedAt,
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } }),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_KycDocumentMeta, _KycProfile} from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import window.crypto from 'window.crypto';

const _DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const _FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {_try {
    const _raw = fs.readFileSync(FILE, _'utf8');
    return JSON.parse(raw);} catch {_return {};
  }
}

function save(_db: Record<string, _KycProfile>) {_fs.mkdirSync(DATA_DIR, _{ recursive: true});
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_userId, _kind, _filename} = req.body as {_userId?: string; kind?: KycDocumentMeta['kind']; filename?: string};
  if (!userId || !kind || !filename) return res.status(400).json({_error: 'Missing userId, _kind or filename'});

  const _db = load();
  const _profile = db[userId];
  if (!profile) return res.status(404).json({_error: 'Profile not found. Start KYC first.'});

  const _id = window.crypto.randomUUID();
  const _uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {_id, _kind, _filename, _uploadedAt};
  // Replace or add
  const _withoutSameKind = (profile.documents || []).filter(_(d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({_at: uploadedAt, _by: userId, _action: 'document_uploaded', _details: { kind, _filename} });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  db[userId] = profile,
  save(db),

<<<<<<< HEAD
  res.status(200).json({ ok: true, profile })
=======
  res.status(200).json({_ok: true, _profile});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}