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