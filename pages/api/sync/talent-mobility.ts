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

  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string; fromNation: string; toNation: string; role: string; startDate: string; endDate?: string;
  };

  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: &quot;personId, fromNation, toNation, role, startDate required&quot; });
  }

  const entityKey = `${personId}:${startDate}`;
  const version = nextVersionFor(state, entityKey);

  const event = {
    eventId: uuidv4(),
    type: &quot;talent_mobility&quot; as const,
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate },
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