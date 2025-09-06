import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";

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
  } catch {
    return {}
  }
}
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: "Profile not found" });
  res.status(200).json({
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
  });
}
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
