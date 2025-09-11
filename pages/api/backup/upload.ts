

import { Web3Storage, File } from 'web3.storage';
const TOKEN = process.env.WEB3_STORAGE_TOKEN |''
export const config = { api: { bodyParser: { sizeLimit: '2mb' } } }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!TOKEN) return res.status(400).json({ error: 'Missing WEB3_STORAGE_TOKEN' })
  try {
    const data = req.body
    const client = new Web3Storage({ token: TOKEN })
    const files = [new File([JSON.stringify(data, null, 2)], 'profile.json', { type: 'application/json' })]
    const cid = await client.put(files, { wrapWithDirectory: false })

    return res.status(200).json({ cid })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Backup failed' })
  }

}

=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { Web3Storage, File } from 'web3.storage',
;
const TOKEN = process.env.WEB3_STORAGE_TOKEN || '',
export const config = { api: { body_parser: { size_limit: '2mb' } } },
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).end (), ) {
  $2
}
  if (return res.status (400).json ({ error: 'Missing WEB3_STORAGE_TOKEN' }), ) {
  $2
}
  try {
  if (req.method !== 'POST') return res.status(405).end(),;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const files = [new File([JSON.stringify(data, null, 2)], 'profile.json', { type: 'application/json' })];
    const cid = await client.put(files, { wrapWithDirectory: false });
    return res.status(200).json({ cid });
  } catch (error) {
    return res.status(500).json({ error: e?.message || 'Backup failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
