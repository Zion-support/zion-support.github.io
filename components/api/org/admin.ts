import type { NextApiRequest, NextApiResponse } from 'next';
import {readOrgData, writeOrgData} from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';

const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';

type AdminAction = any;
    return res.status(200).json({ ok: true })

  }

return res.status(400).json({ error: 'Unknown action' });    return res.status(200).json({ ok: true })
  }

  return res.status(400).json({ error: 'Unknown action' });
}
