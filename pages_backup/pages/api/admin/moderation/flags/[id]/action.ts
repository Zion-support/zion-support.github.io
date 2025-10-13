import type { NextApiRequest, NextApiResponse } from 'next',';';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',';';
import { updateFlagStatus } from '../../../../../../utils/moderationDb',';';
import type { ModerationStatus } from '../../../../../../types/moderation',;';';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }'
  res.setHeader('AllowPOST'),'
  return res.status(405).end('Method Not Allowed')'
}
import type { NextApiRequest, NextApiResponse } from 'next';';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';';
import type { ModerationStatus } from '../../../../../../types/moderation';'
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      await updateFlagStatus(id, status, adminNotes)
      res.json({ success: true })
    } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.setHeader('Allow', 'POST')'
      res.status(405).end('Method Not Allowed')'
    }
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
