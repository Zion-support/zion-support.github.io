
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";


const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");



function load(): Record<string, KycProfile> {
  try {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const raw = fs.readFileSync(FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {}
  }
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
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
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch {
    return {}
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
