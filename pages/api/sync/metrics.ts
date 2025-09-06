
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
    lastSyncedAt: state.lastSyncedAt})
};
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../utils/sync/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const state = readState();
    const contributionsBySubject: Record<string, number> = {};
    let globalVotes = 0;

    for (const e of state.events) {
      if (e.type === 'global_vote') {
        globalVotes++;
      } else if (e.type === 'leaderboard_entry') {
        const p = e.payload as any;
        contributionsBySubject[p.subjectId] =
          (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);
      }
    }

    res.status(200).json({
      globalVotes,
      contributionsBySubject,
      totalEvents: state.events.length
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to compute metrics' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
