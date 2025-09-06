

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");



function load(): Record<string, KycProfile> {
  try {
<<<<<<< HEAD
=======

    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)

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
import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";
const DATA_DIR = path.join(process.cwd(), "data", "kyc");
const FILE = path.join(DATA_DIR, "profiles.json");
function load(): Record<string, KycProfile> {
  try {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD



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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
