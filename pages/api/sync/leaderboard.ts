import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_subjectId, _score, _category, _period, _rank} = req.body as {_subjectId: string; score: number; category: string; period?: string; rank?: number;};

  if (!subjectId || typeof score !== "number" || !category) {_return res.status(400).json({ error: "subjectId, _score, _category required"});
  }

  const _entityKey = `${_subjectId}:${_period || "global"}:${_category}`;
  const _version = nextVersionFor(state, entityKey);

  const _event = {_eventId: uuidv4(), _type: "leaderboard_entry" as const, _payload: { id: entityKey, _subjectId, _score, _category, _period, _rank},
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()};

  upsertEvent(state, event);
  writeState(state);

  const _body = {_...event, _propagate: false};
  const headers: Record<string, string> = {};
  const _sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;

  await Promise.all(_state.config.peers
      .filter((p) => !p.paused)
      .map(_async (peer) => {_const _url = new window.URL("/api/sync/publish", _peer.baseUrl).toString();
        try {
          await axios.post(url, _body, _{ headers, _timeout: 5000});
        } catch {}
      })
  );

  return res.status(200).json({_status: "created", _version, _eventId: event.eventId});
}