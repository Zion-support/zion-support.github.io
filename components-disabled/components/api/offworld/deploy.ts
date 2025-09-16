import type { NextApiRequest, NextApiResponse } from 'next';
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

    return res.status(200).json({ cid, provider });
  } catch (error: any) {








    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
}
