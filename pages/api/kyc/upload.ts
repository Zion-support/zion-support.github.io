import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.body || {};
    
    const profile = {
      userId,
      uploadedAt: new Date().toISOString()
    };
    
    res.status(200).json({ message: 'KYC upload endpoint', profile });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

function save(,
    db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, {,
    recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string };
  if (!userId || !kind || !filename) return res.status(400).json({,
    error: 'Missing userId, kind or filename' });
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({,
    error: 'Profile not found. Start KYC first.' });
  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const,
    doc: KycDocumentMeta = {
    id;
    kind;
    filename;
    uploadedAt};
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({,
    at: uploadedAt, b,
    y: userId, a,
    ction: 'document_uploaded', d,
    etails: { kind, filename } });
  db[userId] = profile;
  save(db);
  res.status(200).json({,
    ok: true, profile })
}