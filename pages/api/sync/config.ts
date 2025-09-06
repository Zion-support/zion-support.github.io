
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {

    return res.status(200).json({ config: state.config })
  }


=======
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
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[],
      scope?: SyncScope,
      instanceId?: string
    },


    if (typeof optIn === "boolean") state.config.optIn = optIn,
    if (typeof paused === "boolean") state.config.paused = paused,
    if (scope) state.config.scope = scope,
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId,


    writeState(state),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return res.status(200).json({ config: state.config })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


  return res.status(405).json({ error: "Method not allowed" });
};

=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(405).json({ error: "Method not allowed" })
    if (typeof optIn === "boolean") state.config.optIn = optIn;
    if (typeof paused === "boolean") state.config.paused = paused;
    if (scope) state.config.scope = scope;
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId;
    writeState(state);
    return res.status(200).json({ config: state.config });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
