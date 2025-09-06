<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {
  try {
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
    const dispute = await getDisputeById(id);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();
    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {;
      return res.status(400).json({ error: 'Invalid status' });
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
    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
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
  res.setHeader('Allow', 'POST');
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
import { parseUserFromRequest } from '../../../../utils/auth';

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

    if (req.method === 'POST') {
      const { resolution, notes } = req.body;
      if (!resolution) {
        return res.status(400).json({ error: 'Resolution is required' });
      }

      // Resolve dispute logic
      return res.status(200).json({ 
        success: true, 
        disputeId: id,
        resolution,
        resolvedBy: user.id,
        resolvedAt: new Date().toISOString()
      });
    }

    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error('Dispute resolve error:', error);
    return res.status(500).json({ error: 'Internal server error' });
>>>>>>> main
  }
}