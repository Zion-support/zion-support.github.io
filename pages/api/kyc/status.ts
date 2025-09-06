<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";
const DATA_DIR = path.join(process.cwd(), "data", "kyc");
const FILE = path.join(DATA_DIR, "profiles.json");

const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");

function load(): Record<string, KycProfile> {
  try {
    const raw = fs && fs.readFileSync(FILE, "utf8");
    return JSON && JSON.parse(raw);
  } catch {
    return {};
function load(): Record<string, KycProfile> {
  try {
    const raw = fs && fs.readFileSync(FILE, "utf8");
    return JSON && JSON.parse(raw);
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
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  const { userId } = req.query as { userId?: string }
  if (!userId) return res.status(400).json({ error: "Missing userId" });
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: "Profile not found" });
  res.status(200).json({
    ok: true
    profile
    requiredDocuments: getRequiredDocuments(profile.role)
    optionalDocuments: getOptionalDocuments(profile.role)
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
  });
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
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
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    ok: true,;
    profile;
    requiredDocuments: getRequiredDocuments(profile.role);
    optionalDocuments: getOptionalDocuments(profile.role)});
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
