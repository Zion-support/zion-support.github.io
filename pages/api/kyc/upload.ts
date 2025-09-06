import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
<<<<<<< HEAD
<<<<<<< HEAD

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
    return JSON.parse(raw);
=======
    return JSON.parse(raw)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
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
=======
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
<<<<<<< HEAD
<<<<<<< HEAD
    uploadedAt,
=======
    uploadedAt
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
<<<<<<< HEAD
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
=======
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  db[userId] = profile;
  save(db);

<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true, profile });
=======
  res.status(200).json({ ok: true, profile })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ ok: true, profile })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
