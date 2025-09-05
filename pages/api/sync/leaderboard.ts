import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState, upsertEvent } from &quot;../../../utils/sync/storage&quot;;
import { signPayload } from &quot;../../../utils/sync/signature&quot;;
import axios from &quot;axios&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;
import { nextVersionFor } from &quot;../../../utils/sync/versioning&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: &quot;Sync disabled for this instance&quot; });
  }

  const { subjectId, score, category, period, rank } = req.body as {
    subjectId: string; score: number; category: string; period?: string; rank?: number;
  };

  if (!subjectId || typeof score !== &quot;number&quot; || !category) {
    return res.status(400).json({ error: &quot;subjectId, score, category required&quot; });
  }

  const entityKey = `${subjectId}:${period || &quot;global&quot;}:${category}`;
  const version = nextVersionFor(state, entityKey);

  const event = {
    eventId: uuidv4(),
    type: &quot;leaderboard_entry&quot; as const,
    payload: { id: entityKey, subjectId, score, category, period, rank },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()};

  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers[&quot;x-zion-signature&quot;] = sig;

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL(&quot;/api/sync/publish&quot;, peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });
        } catch {}
      })
  );

  return res.status(200).json({ status: &quot;created&quot;, version, eventId: event.eventId });
}