import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] }
  if (!proposalId |!title |!Array.isArray(votes)) {
    return res.status(400).json({ error: "proposalId, title, votes[] required" })

  }
  const merkleRoot = computeMerkleRootFromVotes(votes)
  const version = (state.latestVersionByEntityId[proposalId] |0) + 1
  const event = {

    payload: { id: proposalId, proposalId, title, votes },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),

    merkleRoot};

  upsertEvent(state, event);
  writeState(state);

        } catch {
          // ignore

          // ignore;
          } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      })

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })