import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' ,}) }
,
  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed');
};
      await updateFlagStatus(id, status, adminNotes);
      res.json({ success: true ,});
    } else {,
      res.setHeader('AllowPOST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,