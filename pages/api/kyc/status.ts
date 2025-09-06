<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";
<<<<<<< HEAD
=======
<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), "data", "kyc");
const FILE = path.join(DATA_DIR, "profiles.json");
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");

<<<<<<< HEAD
function load(): Record<string, KycProfile> {
  try {
    const raw = fs && fs.readFileSync(FILE, "utf8");
    return JSON && JSON.parse(raw);
  } catch {
    return {};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
<<<<<<< HEAD
    const raw = fs && fs.readFileSync(FILE, "utf8");
    return JSON && JSON.parse(raw);
=======
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import type { KycProfile } from "../../../utils / kyc";
import { getRequiredDocuments, getOptionalDocuments  } from '../../../utils / kyc';
import fs from './fs';
import path from './path';
;
const DATA_DIR = path.join (process.cwd (), "data", "kyc");
const FILE = path.join (DATA_DIR, "profiles.json");
;
function load (): Record < string, KycProfile> {
  try {
    const raw = fs.readFileSync (FILE, "utf8");
    return JSON.parse (raw);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch {
    return {}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  const { userId } = req.query as { userId?: string }
  if (!userId) return res.status(400).json({ error: "Missing userId" });
=======
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: "Profile not found" });
  res.status(200).json({
<<<<<<< HEAD
    ok: true
    profile
    requiredDocuments: getRequiredDocuments(profile.role)
    optionalDocuments: getOptionalDocuments(profile.role)
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { userId } = req && req.query as { userId?: string };
  if (!userId) return res && res.status(400).json({ error: "Missing userId" });
  const db = load();
  const profile = db[userId];
  if (!profile) return res && res.status(404).json({ error: "Profile not found" });
  res && res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(profile && profile.role),
    optionalDocuments: getOptionalDocuments(profile && profile.role),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
<<<<<<< HEAD
=======
}

=======
    ok: true, profile,
    requiredDocuments: getRequiredDocuments(profile.role),
    optionalDocuments: getOptionalDocuments(profile.role)})
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { user_id } = req.query as { user_id?: string }
  if (return res.status (400).json ({ error: "Missing user_id" })) {
  $2
}
  const db = load ();
  const profile = db[user_id];
  if (return res.status (404).json ({ error: "Profile not found" })) {
  $2
}
  res.status (200).json ({
    ok: true,
    profile,
    required_documents: getRequiredDocuments (profile.role),
    optional_documents: getOptionalDocuments (profile.role),
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
