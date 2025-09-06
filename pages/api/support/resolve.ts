import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

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
  }
  return res.status(200).json({ ok: true })
=======
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(200).json({ ok: true });
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}