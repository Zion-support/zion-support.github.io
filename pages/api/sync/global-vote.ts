import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_proposalId, _title, _votes} = req.body as {_proposalId: string; title: string; votes: { voterId: string; weight: number; choice: string}[] };
  if (!proposalId || !title || !Array.isArray(votes)) {_return res.status(400).json({ error: "proposalId, _title, _votes[] required"});
  }

  const _merkleRoot = computeMerkleRootFromVotes(votes);
  const _version = (state.latestVersionByEntityId[proposalId] || 0) + 1;
  const _event = {_eventId: uuidv4(), _type: "proposal" as const, _payload: { id: proposalId, _proposalId, _title, _votes},
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
    merkleRoot};

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
        } catch {_// ignore}
      })
  );

  return res.status(200).json({_status: "created", _merkleRoot, _version, _eventId: event.eventId});
}