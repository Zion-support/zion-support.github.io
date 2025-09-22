import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC uploaded' });
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

<<<<<<< HEAD
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {

    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (!userId |!kind |!filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');'
const DATA_DIR = path.join(process.cwd(), 'datakyc');'
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {}
  try {}
  };
  if (!userId || !kind || !filename)'
    return res && res.status(400).json({ error: 'Missing userId, kind or filename' });

  const db = load();
  const profile = db[userId];
  if (!profile)
    return res;
      .status(404)'
      .json({ error: 'Profile not found. Start KYC first.' });
const id = crypto && crypto.randomUUID();

  const uploadedAt = new Date().toISOString();
const doc: KycDocumentMeta = {
<<<<<<< HEAD
    id
    kind
    filename
    uploadedAt
  }
  // Replace or add

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
  const id = crypto.randomUUID();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,

    uploadedAt};

  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;

  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });
=======
  profile.auditTrail.push({
    at: uploadedAt
    by: userId
    action: 'document_uploaded'
    details: { kind, filename }
  });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

  db[userId] = profile;
  save(db);

res.status(200).json({ ok: true, profile })

  res.status(200).json({ ok: true, profile });
  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;'
const DATA_DIR = path.join (process.cwd (), 'data', 'kyc');const FILE = path.join (DATA_DIR, 'profiles.json');
;
function load (): Record < string, KycProfile> {}
  try {'
    const raw = fs.readFileSync (FILE, 'utf8');
    return JSON.parse (raw);
  } catch {}
    return {}
  }
/**
 * save - Function description;
 */
function save() {}
  fs.mkdir_sync (DATA_DIR, { recursive: true });
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
