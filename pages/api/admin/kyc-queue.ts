
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

  } catch {
    return {};
  }
}

  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) =>
      p.status === 'submitted' || p.status === 'needs_more_info'
    );
    return res.status(200).json({ ok: true, queue });
  }
  if (req.method === 'POST') {

  }
  return res.status(405).json({ error: 'Method not allowed' });
}

  try {
    if (req.method === 'GET') {
      const profiles = load();
      res.json({ profiles });
    } else if (req.method === 'POST') {
      const { id, status } = req.body;
      const profiles = load();
      if (profiles[id]) {
        profiles[id].status = status;
        save(profiles);
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Profile not found' });
      }
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
