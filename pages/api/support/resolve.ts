

import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { id } = req.body as { id: string }
  if (!id) return res.status(400).json({ error: 'id required' })
  const requests = readJson<any[]>('support/requests.json', [])
  const idx = requests.findIndex((r) => r.id === id)
  if (idx >= 0) {
    requests[idx].status = 'resolved'
    requests[idx].resolvedAt = Date.now()

    writeJson('support/requests.json', requests)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const requests = readJson<any[]>('support/requests.json', []),;
  const idx = requests.findIndex((r) => r.id === id);
  if (idx >= 0) {;
    requests[idx].status = 'resolved';
    requests[idx].resolvedAt = Date.now();
    writeJson('support/requests.json', requests);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(200).json({ ok: true });

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
