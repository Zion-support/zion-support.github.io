<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { readJson, writeJson } from '../../../utils/fsDb';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { readJson, writeJson } from '../../../utils/fsDb';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const requests = readJson<any[]>('support/requests.json', [])
    return res.status(200).json({ requests })
  }
  if (req.method === 'POST') {
    const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string }
    const requests = readJson<any[]>('support/requests.json', [])
    const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`
    const record = { id, sessionId, reason: reason ?? 'User request', tag: tag ?? 'manual', status: 'open', createdAt: Date.now() }
    requests.push(record)
    writeJson('support/requests.json', requests)

    return res.status(200).json({ ok: true, id })
  }
<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' })
<<<<<<< HEAD
}
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_json, write_json } from '../../../utils / fs_db',
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    const requests = read_json < any[]>('support / requests.json', []),
    return res.status (200).json ({ requests });
=======
=======
=======
  return res.status(405).json({ error: 'Method not allowed' });
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (req.method === 'GET') {
    const requests = readJson<any[]>('support/requests.json', []),;
    return res.status(200).json({ requests });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
;
=======
  if (req.method === 'GET') {
    const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },;
    const requests = readJson<any[]>('support/requests.json', []),;
    const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    const record = { id, sessionId, reason: reason ?? 'User request', tag: tag ?? 'manual', status: 'open', createdAt: Date.now() },;
    requests.push(record);
    writeJson('support/requests.json', requests);
    return res.status(200).json({ ok: true, id });
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
  return res.status(405).json({ error: 'Method not allowed' });
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
