import type { NextApiRequest, NextApiResponse } from "next";"
import type { KycProfile } from "../../../utils/kyc";"
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";"
import fs from "fs";"
import path from "path";"

const DATA_DIR = path.join(process.cwd(), "data", "kyc");"
const FILE = path.join(DATA_DIR, "profiles.json");"

function load(): Record<string, KycProfile> {
  }
  try {
    }
    const raw = fs.readFileSync(FILE, "utf8");"
    return JSON.parse(raw);
  } catch {
    }
    return {};
  }
}

export default function handler() {
  }
  if (req.method !== "GET")"
    return res.status(405).json({ "error": "Method not allowed" });"
  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status(400).json({ "error": "Missing userId" });"
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ "error": "Profile not found" });"
  res.status(200).json({
<<<<<<< HEAD
    }
    "ok": true,
    profile,
    "requiredDocuments": getRequiredDocuments(profile.role),
    "optionalDocuments": getOptionalDocuments(profile.role)
  });
=======
    ok: true
    profile
    requiredDocuments: getRequiredDocuments(profile.role)
    optionalDocuments: getOptionalDocuments(profile.role)
  })
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}
