import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
<<<<<<< HEAD
<<<<<<< HEAD
const DATA_DIR = null;
  res.status(200).json({ ok: true, profile })
}
=======
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
=======

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { userId, kind, filename } = req.body as {
    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (!userId |!kind |!filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });
<<<<<<< HEAD
  const db = load();
=======

  
}

const db = load();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const profile = db[userId];
  if (!profile)
    return res
      .status(404)
      .json({ error: 'Profile not found. Start KYC first.' });
<<<<<<< HEAD
  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id
    kind
    filename
    uploadedAt
  }
=======

  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
    uploadedAt,
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // Replace or add
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
<<<<<<< HEAD
  db[userId] = profile;
  save(db);
res.status(200).json({ ok: true, profile });
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  db[userId] = profile;
  save(db);

  res.status(200).json({ ok: true, profile });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
