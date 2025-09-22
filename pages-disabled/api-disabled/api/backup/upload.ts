
    return res.status(200).json({ cid })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Backup failed' })
    return res.status(500).json({ error: e?.message || 'Backup failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { Web3Storage, File } from 'web3.storage';
const TOKEN = process.env.WEB3_STORAGE_TOKEN || '';
export const config = { api: { bodyParser: { sizeLimit: '2mb' } } };
export default async function handler(req, res) {
    return res.status(500).json({ error: e?.message |'Backup failed' })
  }

}

import type { NextApiRequest, NextApiResponse } from 'next',
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Web3Storage, File } from 'web3.storage',
;
const TOKEN = process.env.WEB3_STORAGE_TOKEN || '',
export const config = { api: { body_parser: { size_limit: '2mb' } } },
import type { NextApiRequest, NextApiResponse } from 'next';
import { Web3Storage, File } from 'web3.storage'
;
const TOKEN = process.env.WEB3_STORAGE_TOKEN || ''
export const config = { api: { body_parser: { size_limit: '2mb' } } }
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
