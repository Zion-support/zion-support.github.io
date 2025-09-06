import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from 'ethers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { abi, bytecode, constructorArgs = [] } = req.body;
  
  if (!abi || !bytecode) {
    return res.status(400).json({ error: 'Missing ABI or bytecode' });
  }

  try {
    const iface = new Interface(abi);
    const data = iface.encodeDeploy(constructorArgs);
    const tx = {
      data: bytecode + data.slice(2)
      // gas and value are intentionally left for client to estimate via MetaMask
    };
    return res.status(200).json({ abi, tx });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' });
  }
}