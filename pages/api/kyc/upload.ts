import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile, writeFile } from '../../../utils/fsdb';

interface KycDocumentMeta {
  id: string;
  kind: string;
  filename: string;
  uploadedAt: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, kind, filename } = req.body || {};
  if (!userId || !kind || !filename) {
    return res.status(400).json({ error: 'Missing userId, kind, or filename' });
  }

  const db = readFile('kyc-profiles.json', {});
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' });

  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
    uploadedAt
  };
  
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d: any) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });

  db[userId] = profile;
  writeFile('kyc-profiles.json', db);

  res.status(200).json({ ok: true, profile });
}