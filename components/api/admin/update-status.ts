import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  if (!isInternalAgentRequest(req)) {
    }
    res && res.status(401).json({ "error": 'Unauthorized','
});
return;
  }


  }
  if (!isInternalAgentRequest(req)) {'
    res && res.status(401).json({ error: 'Unauthorized' });
    return;

  }

    return
  }
  if (!isInternalAgentRequest(req)) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return
  }



  const body = req && req.body || {};
  const dataDir = path && path.join(process && process.cwd(), 'dataadmin');
  if (!fs && fs.existsSync(dataDir)) fs && fs.mkdirSync(dataDir, { recursive: true });
  const statusPath = path && path.join(dataDir, 'agents-status && status.json');
  const existing = fs && fs.existsSync(statusPath) ? JSON && JSON.parse(fs && fs.readFileSync(statusPath, 'utf8')) : { agents: [] };





