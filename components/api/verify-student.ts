<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from \"next\";"
import fs from \"fs-extra\";"
import path from \"path\";"
import { authenticateRequest, enforceRateLimit, recordRequest } from \"../../utils/api/partnerAuth\";

;
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json"),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now($2);
  const auth = await authenticateRequest($2);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest($2);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader($2);
    await recordRequest($2);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { email, programTrack } = req.body || {},
  if (!email) {
    await recordRequest($2);
    return res.status(400).json({ error: "email required" })
  }
  const talents = $2;
  const match = $2;
  const verified = Boolean($2);
  await recordRequest($2);
  return res.status(200).json({ verified })
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from \"next\;
import fs from \"fs-extra\";
import path from \path\";"
import { authenticateRequest, enforceRateLimit, recordRequest } from \../../utils/api/partnerAuth\;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======


import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs - extra';
import path from 'path';
import {


  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;

} from '../../utils/api/partnerAuth';




const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'

<<<<<<< HEAD
) {
  try {
  const started = Date && Date.now();
  const auth = await authenticateRequest(req),
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
) {
=======
const TALENTS_FILE = path && path.join(
  process && process.cwd(),
  'data',
  'talents',
  'talents && talents.json'
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import type { NextApiRequest, NextApiResponse } from \'next\';"
import fs from \'fs-extra\';"
import path from \'path\';"
import { authenticateRequest, enforceRateLimit, recordRequest } from \'../../utils/api/partnerAuth\';
>>>>>>> origin/chore/fix-lint-and-merge

const TALENTS_FILE = null;
  return res.status(200).json({ ok: true });
}
const TALENTS_FILE = null;
  return res.status(200).json({ verified })
}

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs-extra';'
import path from 'path';'

import {
} from '../../utils/api/partnerAuth';'

const TALENTS_FILE = path.join(;
  process.cwd()
  'data''
  'talents''
  'talents.json''
);

export default async function handler() {
}
return res.status(401).json({ "error": 'Unauthorized',;'
});
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    }
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
return res.status(429).json({ "error": 'Rate limit exceeded',;'
});
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
<<<<<<< HEAD
  try {};
=======
  try {}
=======
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);
    return res && res.status(429).json({ error: 'Rate limit exceeded' });
  }

  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);
    return res && res.status(405).json({ error: 'Method Not Allowed' });  }
  const { email, programTrack } = req && req.body || {};
  if (!email) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'email required' });
const TALENTS_FILE = path && path.join(process && process.cwd(), "data", "talents", "talents && talents.json");
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const started = Date && Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {}
    return res && res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {}
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);"
    return res && res.status(429).json({ error: "Rate limit exceeded" })
  }"
  if (req && req.method !== "POST") {"
    res && res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);"
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
  );'
=======
<<<<<<< HEAD
=======
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { email, programTrack } = req && req.body || {};
  if (!email) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'email required' });
  const talents = (await fs && fs.pathExists(TALENTS_FILE))
    ? await fs && fs.readJSON(TALENTS_FILE)
<<<<<<< HEAD
    : [];
  const match = talents && talents.find(
    (t: any) =>
      t && t.email === email && (!programTrack || t && t.programTrack === programTrack)
=======

    : [];
  const match = talents && talents.find(
    (t: any) =>

      t && t.email === email && (!programTrack || t && t.programTrack === programTrack)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const verified = Boolean(match && match.certificationStatus === 'completed');
  await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 200);
  return res && res.status(200).json({ verified });  return res && res.status(200).json({ verified })
}
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {'
    }
    res.setHeader('Allow', 'POST');'
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
return res.status(405).json({ "error": 'Method Not Allowed',;'
});
  }
  const { email, programTrack } = req.body |{}
  if (!email) {
    }
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
return res.status(400).json({ "error": 'email required',;'
});
  }

const talents = (await fs.pathExists(TALENTS_FILE));
    ? await fs.readJSON(TALENTS_FILE)
    : [];

const match = talents.find(;
    ("t": any) =>
      t.email === email && (!programTrack |t.programTrack === programTrack)
  );

const verified = Boolean(match && match.certificationStatus === 'completed');'
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified });
origin/cursor/automate-test-improve-and-merge-code-2533

=======
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: "email required" })
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack)), const verified = Boolean(match && match.certificationStatus === "completed"),
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified })
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  authenticate_request,
  enforceRateLimit,
  record_request,'
} from '../../utils / api / partner_auth';
;
const TALENTS_FILE = path.join (
  process.cwd (),'
  'data','
  'talents','
  'talents.json');
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  const started = Date.now ();
  const auth = await authenticate_request (req),
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (401).json ({ error: 'Unauthorized' });
  }
  if ()) {) {}
  $2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429);'
    return res.status (429).json ({ error: 'Rate limit exceeded' });
  }
  // Check condition;
if ( {) {}
  $2;
}'
    res.set_header ('Allow', 'POST');
    await record_request (req, res, auth.partner, auth.api_key, started, 405);'
    return res.status (405).json ({ error: 'Method Not Allowed' });  }
  const { email, program_track } = req.body || {}
  // Check condition;
if ( {) {}
  $2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400);'
    return res.status (400).json ({ error: 'email required' });"
const TALENTS_FILE = path.join (process.cwd (), "data", "talents", "talents.json");
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  const started = Date.now ();
  const auth = await authenticate_request (req);
  // Check condition;
if ( {) {}
  $2;
}"
    return res.status (401).json ({ error: "Unauthorized" });
  }
  if ()) {) {}
  $2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429);"
    return res.status (429).json ({ error: "Rate limit exceeded" });
  }
  // Check condition;
if ( {) {}
  $2;
}"
    res.set_header ("Allow", "POST");
    await record_request (req, res, auth.partner, auth.api_key, started, 405);"
    return res.status (405).json ({ error: "Method Not Allowed" });
  }
  const { email, program_track } = req.body || {}
  // Check condition;
if ( {) {}
  $2;
}
await record_request (req, res, auth.partner, auth.api_key, started, 400);'
    return res.status (400).json ({ error: 'email required' });
  const talents = (await fs.path_exists (TALENTS_FILE));
    ? await fs.readJSON (TALENTS_FILE);
    : [];
  const match = talents.find (
    (t: any) =>;
      t.email === email && (!program_track || t.program_track === program_track));'
  const verified = Boolean (match && match.certification_status === 'completed');
  await record_request (req, res, auth.partner, auth.api_key, started, 200);
  return res.status (200).json ({ verified });  return res.status (200).json ({ verified });
<<<<<<< HEAD
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now()
  const auth = await authenticateRequest(req)
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429),
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405),
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { email, programTrack } = req.body || {},
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "email required" })
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : []
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack))
  const verified = Boolean(match && match.certificationStatus === "completed")
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200),
  return res.status(200).json({ verified })
  }
  const { email, programTrack } = req.body || {},
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "email required" })
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : []
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack))
  const verified = Boolean(match && match.certificationStatus === "completed")
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200),
  return res.status(200).json({ verified })
import type {_NextApiRequest, _NextApiResponse} from "next";
import fs from "fs-extra";
import path from "path";

const _TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _started = Date.now();
  const _auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized"});
  }
  if (!(await enforceRateLimit(auth.apiKey))) {_await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _429);
    return res.status(429).json({ error: "Rate limit exceeded"});
  }
  if (req.method !== "POST") {_res.setHeader("Allow", _"POST");
    await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _405);
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const {_email, _programTrack} = req.body || {};
  if (!email) {_await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _400);
    return res.status(400).json({ error: "email required"});
  }
  const _talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const _match = talents.find(_(t: unknown) => t.email === email && (!programTrack || t.programTrack === programTrack));
  const _verified = Boolean(match && match.certificationStatus === "completed");
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({_verified});

}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
}
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);


import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
import {
  authenticateRequest
  enforceRateLimit
  recordRequest;
  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;
} from '../../utils/api/partnerAuth';

const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  const started = Date.now();
  const auth = await authenticateRequest(req)
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: 'Method Not Allowed' });  }
  const { email, programTrack } = req.body |{}
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'email required' });
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { email, programTrack } = req.body |{}
  if (!email) {
await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'email required' });
  const talents = (await fs.pathExists(TALENTS_FILE))
    ? await fs.readJSON(TALENTS_FILE)
    : [];
  const match = talents.find(
    (t: any) =>
      t.email === email && (!programTrack |t.programTrack === programTrack)
  );
  const verified = Boolean(match && match.certificationStatus === 'completed');
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified });  return res.status(200).json({ verified })
}

}
}
}
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { email, programTrack } = req.body || {};
  if (!email) {}
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
}
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
return res.status(405).json({ "error": 'Method Not Allowed',;'
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

import {}
} from '../../utils/api/partnerAuth';

<<<<<<< HEAD
const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'
);

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
if (!auth) {}
    return res.status(401).json({ error: 'Unauthorized'}
});
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);}
    return res.status(429).json({ error: 'Rate limit exceeded'}
});
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);}
    return res.status(405).json({ error: 'Method Not Allowed'}
>>>>>>> origin/chore/fix-lint-and-merge
});
  }

const { email, programTrack } = req.body |{}
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);}
return res.status(400).json({ error: 'email required'}
});
  }

const talents = (await fs.pathExists(TALENTS_FILE))
    ? await fs.readJSON(TALENTS_FILE)
    : [];

const match = talents.find(
    (t: any) =>
      t.email === email && (!programTrack |t.programTrack === programTrack)
  );

const verified = Boolean(match && match.certificationStatus === 'completed');
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified });
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533

=======

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
