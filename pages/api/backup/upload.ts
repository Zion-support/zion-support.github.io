<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { Web3Storage, File } from 'web3.storage',;
;
const TOKEN = process.env.WEB3_STORAGE_TOKEN || '',

export const config = { api: { bodyParser: { sizeLimit: '2mb' } } },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { Web3Storage, File } from 'web3.storage';
<<<<<<< HEAD
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
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message |'Backup failed' })
=======
=======
    return res.status(500).json({ error: e?.message || 'Backup failed' })
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { Web3Storage, File } from 'web3.storage';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TOKEN = process.env.WEB3_STORAGE_TOKEN || '';
export const config = { api: { bodyParser: { sizeLimit: '2mb' } } };
export default async function handler(req, res) {
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
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

const TOKEN = process.env.WEB3_STORAGE_TOKEN || '';

export const config = { api: { bodyParser: { sizeLimit: '2mb' } } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!TOKEN)
    return res.status(400).json({ error: 'Missing WEB3_STORAGE_TOKEN' });
  try {
    const data = req.body;
    const client = new Web3Storage({ token: TOKEN });
    const files = [
      new File([JSON.stringify(data, null, 2)], 'profile.json', {
        type: 'application/json',
      }),
    ];
    const cid = await client.put(files, { wrapWithDirectory: false });
    return res.status(200).json({ cid });
 
} catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Backup failed' });
  }
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
