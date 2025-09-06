<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth';
export default async function handler(req, res) {
  try {
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (error) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
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
    return res.status(200).json({ dispute });
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
  res.setHeader('AllowGET');
  return res.status(405).end('Method Not Allowed');
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
=======
import { NextApiRequest, NextApiResponse } from 'next';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from '../../../utils/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const user = await parseUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.query;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Invalid dispute ID' });
    }

    // Check if user is involved or admin
    await ensureInvolvedOrAdmin(user.id, id);

    if (req.method === 'GET') {
      // Get dispute details
      return res.status(200).json({ dispute: { id, status: 'active' } });
    }

    if (req.method === 'PUT') {
      // Update dispute
      return res.status(200).json({ message: 'Dispute updated' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Dispute API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
>>>>>>> main
  }
}