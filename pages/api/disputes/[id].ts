import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET']);
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getDisputeById } from '../../../utils/fsdb',;
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { id } = req.query,;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),;
  const user = parseUserFromRequest(req),;
  if (req.method === 'GET') {;
    const dispute = await getDisputeById(id),;
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {;
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {;
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res.status(200).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('AllowGET');
  return res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}