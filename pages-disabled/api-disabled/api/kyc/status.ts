import type { NextApiRequest, NextApiResponse } from "next";
import type { KycProfile } from "../../../utils/kyc";
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";
import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";"
import type { KycProfile } from "../../../utils/kyc";"
import { getRequiredDocuments, getOptionalDocuments } from "../../../utils/kyc";"
import fs from "fs";"
import path from "path";
;

:pages/api-disabled/api/kyc/status.ts
const DATA_DIR = path && path.join(process && process.cwd(), "data", "kyc");
const FILE = path && path.join(DATA_DIR, "profiles && profiles.json");
;

:pages/api-disabled/api/kyc/status.ts
function load(): Record<string, KycProfile> {;
  try {;
    const raw = fs.readFileSync(FILE, "utf8");
    return JSON.parse(raw);
  } catch {;
    return {}
  }
}
}
export default /**
 * handler - Function description
 */;
function handler() {;
  if (;
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { user_id } = req.query as { user_id?: string }"
  if (return res.status (400).json ({ error: "Missing user_id" })) {}
  $2;
}
  const db = load ();
  const profile = db[user_id];"
  if (return res.status (404).json ({ error: "Profile not found" })) {}
  $2;
}
:pages/api-disabled/api/kyc/status.ts
  res.status (200).json ({;
    ok: true;
    profile;
    required_documents: getRequiredDocuments (profile.role);
    optional_documents: getOptionalDocuments (profile.role)
  });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {;
  try {;
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {;
    return {  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
const DATA_DIR = path.join (process.cwd (), "data", "kyc");
const FILE = path.join (DATA_DIR, "profiles.json");
;
function load (): Record < string, KycProfile> {;
  try {;
    const raw = fs.readFileSync (FILE, "utf8");
    return JSON.parse (raw);
  } catch {;
    return {}
  }
}

:pages/api/kyc/status.ts
  });

}
  res.status (200).json ({}
    ok: true,
    profile,

"
