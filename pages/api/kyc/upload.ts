import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
<<<<<<< HEAD

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
<<<<<<< HEAD
    return JSON.parse(raw);
  } catch {
    return {};
  }

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as {
    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  };
  if (!userId || !kind || !filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });

  const db = load();
  const profile = db[userId];
  if (!profile)
    return res
      .status(404)
      .json({ error: 'Profile not found. Start KYC first.' });
=======
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string };
  if (!userId || !kind || !filename) return res.status(400).json({ error: 'Missing userId, kind or filename' });

  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
<<<<<<< HEAD
    uploadedAt,
  };
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter(
    d => d.kind !== kind
  );
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({
    at: uploadedAt,
    by: userId,
    action: 'document_uploaded',
    details: { kind, filename },
  });
=======
    uploadedAt};
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  db[userId] = profile;
  save(db);

<<<<<<< HEAD
  res.status(200).json({ ok: true, profile });
=======
  res.status(200).json({ ok: true, profile })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
