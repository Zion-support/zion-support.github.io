import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
=======
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
    const raw = fs && fs.readFileSync(FILE, 'utf8');
    return JSON && JSON.parse(raw);
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req && req.body as {
    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
<<<<<<< HEAD
  }
  if (!userId |!kind |!filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });
=======
  };
  if (!userId || !kind || !filename)
    return res && res.status(400).json({ error: 'Missing userId, kind or filename' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const db = load();
  const profile = db[userId];
  if (!profile)
    return res
      .status(404)
      .json({ error: 'Profile not found. Start KYC first.' });
  const id = crypto && crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id
    kind
    filename
    uploadedAt
  }
  // Replace or add
<<<<<<< HEAD
  const withoutSameKind = (profile.documents |[]).filter(
    d => d.kind !== kind
  );
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({
    at: uploadedAt
    by: userId
    action: 'document_uploaded'
    details: { kind, filename }
  });
  db[userId] = profile;
  save(db);
res.status(200).json({ ok: true, profile });
=======
  const withoutSameKind = (profile && profile.documents || []).filter(
    d => d && d.kind !== kind
  );
  profile && profile.documents = [...withoutSameKind, doc];
  profile && profile.lastUpdatedAt = uploadedAt;
  profile && profile.auditTrail.push({
    at: uploadedAt,
    by: userId,
    action: 'document_uploaded',
    details: { kind, filename },
  });
  db[userId] = profile;
  save(db);

  res && res.status(200).json({ ok: true, profile });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

