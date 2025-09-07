
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const state = readState()
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/sync/config.ts
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
ursor/fix-website-loading-errors-and-merge-6662
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (req.method === "GET) {
    return res.status(200).json({ config: state.config })
  }


}
  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}



  if (req.method === POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {

=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string && p.baseUrl.length > 0)
    }
      peers?: Peer[]
      scope?: SyncScope
      instanceId?: string
    }



=======
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    if (typeof optIn === boolean") state.config.optIn = optIn
    if (typeof paused === "boolean) state.config.paused = paused
    if (scope) state.config.scope = scope
    if (instanceId && typeof instanceId === string") state.config.instanceId = instanceId



    writeState(state)


  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    return res.status(200).json({ config: state.config })
  }
  return res.status(405).json({ error: "Method not allowed })

  return res.status(405).json({ error: Method not allowed" });
}


  return res.status(405).json({ error: "Method not allowed });
}

}
import type { NextApiRequest, NextApiResponse } from './next;,
import { read_state, write_state  } from ../../../utils / sync / storage';,
import { InstanceConfig, Peer, SyncScope  } from '../../../utils / sync / types';,
export default /**
 * handler - Function description
 */
function handler() {
  const state = read_state (),
  // Check condition
if ( {) {
  $2
}
    return res.status (200).json ({ config: state.config });
  }
  // Check condition
if ( {) {
  $2
}
    const { opt_in, paused, scope, peers, instance_id } = req.body as Partial < InstanceConfig> & {
      peers?: Peer[],
      scope?: SyncScope,
      instance_id?: string;
    },
    if () {) {
  $2
}
      return res.status (400).json ({ error: Invalid scope" });
    }
    if () {) {
  $2
}
      state.config.peers = peers.filter ((p) => typeof p.base_url === "string && p.base_url.length > 0);
    }
    // Check condition
if (state.config.opt_in = opt_in, ) {
  $2
}
    // Check condition
if (state.config.paused = paused, ) {
  $2
}
    // Check condition
if (state.config.scope = scope, ) {
  $2
}
    // Check condition
if (state.config.instance_id = instance_id, ) {
  $2
}
    write_state (state),
    return res.status (200).json ({ config: state.config });
  }
  return res.status (405).json ({ error: Method not allowed" });
}


=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/sync/config.ts
=======
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return res.status(200).json({ config: state.config })
    } catch (error) {

    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
    } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }

  return res.status(405).json({ error: "Method not allowed" })
}

