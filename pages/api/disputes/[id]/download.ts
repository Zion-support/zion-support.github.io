<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Download endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {
  try {
  const { id, fileName } = req.query as { id?: string, fileName?: string },;
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {;
    return res.status(400).json({ error: 'Invalid parameters' });
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
  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
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
  const att = dispute.attachments.find(a => a.fileName === fileName),
  if (!att) return res.status(404).json({ error: 'Attachment not found' }),
  const stat = fs.statSync(att.path),
  res.setHeader('Content-Type', att.mimeType),
  res.setHeader('Content-Length', String(stat.size)),
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`),
  const stream = fs.createReadStream(att.path),
  stream.pipe(res)
  const att = dispute.attachments.find(a => a.fileName === fileName);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size)),;
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`);
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
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
} from '../../../../utils/auth';

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

    await ensureInvolvedOrAdmin(user.id, id);

    if (req.method === 'GET') {
      // Download dispute files logic
      return res.status(200).json({ downloadUrl: '/api/disputes/' + id + '/files' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Dispute download error:', error);
    return res.status(500).json({ error: 'Internal server error' });
>>>>>>> main
  }
}