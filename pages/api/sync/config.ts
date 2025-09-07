import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",;
;

  if (req.method === "GET") {

    return res.status(200).json({ config: state.config })
  }

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ config: {} });
  } else if (req.method === 'POST') {
    res.status(200).json({ config: {} });
  } else {
    res.status(405).end('Method Not Allowed');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState } from "../../../utils/sync/storage"
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types"
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {

    }

    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0)
    }

    if (typeof optIn === "boolean") state.config.optIn = optIn
    if (typeof paused === "boolean") state.config.paused = paused
    if (scope) state.config.scope = scope
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

