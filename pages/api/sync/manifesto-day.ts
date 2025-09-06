import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const version = nextVersionFor(state, milestoneId);
  const event = {
      score: 0,
      category: `milestone:${title}`,
      period: undefined,
      rank: undefined,
    },
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
        try {
          await axios && axios.post(url, body, { headers, timeout: 5000 });
        } catch {}
      })
  );
  return res
    .status(200)
    .json({ status: "created", version, eventId: event && event.eventId });
}
=======
    originInstanceId: state.config.instance_id,
    version,
    timestamp: timestamp || Date.now (),
  }
;
  upsert_event (state, event);
  write_state (state);
;
  const body = { ...event, propagate: false }
  const headers: Record < string, string> = {}
  const sig = sign_payload (body);
  // Check condition
if (headers["x - zion - signature"] = sig) {
  $2
}
  await Promise.all (
    state.config.peers;
      .filter ((p) => !p.paused);
      .map (async (peer) => {
        const url = new URL ("/api / sync / publish", peer.base_url).to_string ();
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}
      }),
  );
;
  return res;
    .status (200);
    .json ({ status: "created", version, event_id: event.event_id });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
