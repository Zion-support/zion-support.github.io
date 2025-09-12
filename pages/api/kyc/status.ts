
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");



function load(): Record<string, KycProfile> {
  try {
<<<<<<< HEAD

    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)

<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch {
    return {}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}


=======

import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";
import path from "path";
const DATA_DIR = path.join(process.cwd(), "data", "kyc");
const FILE = path.join(DATA_DIR, "profiles.json");
function load(): Record<string, KycProfile> {
  try {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const raw = fs.readFileSync(FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {}
  }
}
<<<<<<< HEAD
if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  });

}

=======
    ok: true, profile,
    requiredDocuments: getRequiredDocuments(profile.role),
    optionalDocuments: getOptionalDocuments(profile.role),
  });
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  } catch {
    return {}
  }
}


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
