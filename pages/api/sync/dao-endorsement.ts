import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_fromDAO, _toDAO, _resolutionId, _decision, _timestamp} = req.body as {_fromDAO: string; toDAO: string; resolutionId: string; decision: "endorse" | "reject"; timestamp?: number;};

  if (!fromDAO || !toDAO || !resolutionId || !decision) {_return res.status(400).json({ error: "fromDAO, _toDAO, _resolutionId, _decision required"});
  }

  const _version = nextVersionFor(state, resolutionId);
  const _event = {_eventId: uuidv4(), _type: "dao_endorsement" as const, _payload: { id: resolutionId, _fromDAO, _toDAO, _resolutionId, _decision, _timestamp: timestamp || Date.now()},
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