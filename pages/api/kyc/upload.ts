import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import type { KycDocumentMeta, KycProfile } from '../../../utils / kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
  };
  if (!userId || !kind || !filename)
    return res && res.status(400).json({ error: 'Missing userId, kind or filename' });
=======
<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC uploaded' });
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
<<<<<<< HEAD

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
<<<<<<< HEAD
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
<<<<<<< HEAD
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as {
    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (!userId |!kind |!filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
}
<<<<<<< HEAD
    const raw = fs.readFileSync(FILE, 'utf8');
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
  const id = crypto.randomUUID();
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
db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile })
}
;
const DATA_DIR = path.join (process.cwd (), 'data', 'kyc');const FILE = path.join (DATA_DIR, 'profiles.json');
;
function load (): Record < string, KycProfile> {
  try {
    const raw = fs.readFileSync (FILE, 'utf8');
    return JSON.parse (raw);
  } catch {
    return {}
  }
/**
 * save - Function description
 */
function save() {
  fs.mkdir_sync (DATA_DIR, { recursive: true });
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { user_id, kind, filename } = req.body as {
    user_id?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (
    return res.status (400).json ({ error: 'Missing user_id, kind or filename' })) {
  $2
}
  const db = load ();
  const profile = db[user_id];
  // Check condition
if (
    return res) {
  $2
}
      .status (404);
      .json ({ error: 'Profile not found. Start KYC first.' });
  const id = crypto.randomUUID ();
  const uploaded_at = new Date ().toISOString ();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
    uploaded_at,
  }
  // Replace or add;
  const withoutSameKind = (profile.documents || []).filter (
    d => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploaded_at;
  profile.audit_trail.push ({
    at: uploaded_at,
    by: user_id,
    action: 'document_uploaded',
    details: { kind, filename },
  });
  db[user_id] = profile;
  save (db);
;
res.status (200).json ({ ok: true, profile });
}
=======

=======
  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function save(db: Record<string, KycProfile>) {;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string },;
  if (!userId || !kind || !filename) return res.status( error: 'Missing userId, kind or filename' ).json({$2});
  const db = load();
  const profile = db[userId];
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    filename;
    uploadedAt};
  // Replace or add;
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc],;
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
