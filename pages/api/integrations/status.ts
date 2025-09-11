
<<<<<<< HEAD
<<<<<<< HEAD
}

}
=======

  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id)
    connections[p.id] = conn |{ providerId: p.id, status: 'disconnected' }
  }
  res.status(200).json({ connections })

=======
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_state } from '../../../lib / integrations / file_store',
import { PROVIDERS } from '../../../lib / integrations / registry',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const state = read_state (),
  const connections: Record < string, any> = {},
  for (const p of PROVIDERS) {
    const conn = state.connections.find (c => c.provider_id === p.id),
    connections[p.id] = conn || { provider_id: p.id, status: 'disconnected' }
  }
  res.status (200).json ({ connections });
}
<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next',;
import { readState } from '../../../lib/integrations/fileStore',;
import { PROVIDERS } from '../../../lib/integrations/registry',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const state = readState(),
  const connections: Record<string, any> = {},
  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id),
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected' }
  }
  res.status(200).json({ connections });
};
import type { NextApiRequest, NextApiResponse } from 'next';

import { readState } from '../../../lib/integrations/fileStore';
import { PROVIDERS } from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const state = readState()
  const connections: Record<string, any> = {}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id)
    connections[p.id] = conn |{ providerId: p.id, status: 'disconnected' }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
import { PROVIDERS } from '../../../lib/integrations/registry';
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
  res.status(200).json({ connections });
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
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_state } from '../../../lib / integrations / file_store',
import { PROVIDERS } from '../../../lib / integrations / registry',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const state = read_state (),
  const connections: Record < string, any> = {},
  for (const p of PROVIDERS) {
    const conn = state.connections.find (c => c.provider_id === p.id),
    connections[p.id] = conn || { provider_id: p.id, status: 'disconnected' }
  }
  res.status (200).json ({ connections });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
