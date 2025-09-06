import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string },
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  }
  const now = null;
  res.status(200).json({ ok: true })
}
=======
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  }
=======
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const now = Date.now();
  const updated = writeState((state) => {
    const idx = state.connections.findIndex((c) => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);
    state.logs.push({
      id: `${now}-${providerId}-disconnect`
      timestamp: now
      providerId: providerId as any
      level: "info"
      action: "disconnect"
    });
  });
  res.status(200).json({ ok: true });
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
