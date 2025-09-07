

import type { NextApiRequest, NextApiResponse } from \"next\","
import fs from \"fs-extra\";"
import path from \"path\";"
import { authenticateRequest, enforceRateLimit, recordRequest } from \"../../utils/api/partnerAuth\";"
import { v4 as uuidv4 } from \"uuid\";

const REDEMPTIONS_FILE = null;
  return res.status(201).json({ id: record.id, redeemedAt: now })
}
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs - extra';
import path from 'path';
import {}
} from '../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

const REDEMPTIONS_FILE = path.join(
  process.cwd()
  'data'
  'partners'
  'grant-redemptions.json'
);

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  if (!auth) {}
    return res && res.status(401).json({ error: 'Unauthorized'}
});
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);}
    return res && res.status(429).json({ error: 'Rate limit exceeded'}
});
  }

  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);}
    return res && res.status(405).json({ error: 'Method Not Allowed'}
});  }

const { studentEmail, grantCode, courseId } = req && req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);}
    return res && res.status(400).json({ error: 'Missing required fields'}
});

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
}
    return res.status(405).json({ error: 'Method Not Allowed'}
});
  }

const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {}
  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);}
return res.status(400).json({ error: 'Missing required fields'}
});
  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE));

const records = (await fs.pathExists(REDEMPTIONS_FILE))
    ? await fs.readJSON(REDEMPTIONS_FILE)
"
  if (req.method !== \"POST\") {"
    res.setHeader(\"Allow\", \"POST\");}
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);}"
    return res.status(405).json({ error: \"Method Not Allowed\" })
 
}

  if (!studentEmail || !grantCode || !courseId) {
    : [];

const now = new Date().toISOString();

const record = {
    id: uuidv4(),

    partnerId: auth.partner.id,
    studentEmail,
    grantCode,
    courseId}
    redeemedAt: now}
  };

  records.push(record);
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2}
});
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id, redeemedAt: now}
});

"