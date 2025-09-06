<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from 'ethers';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
// Simple ABI for demonstration (release/refund)
const abi = [
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)'
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund)
const abi = [
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)'
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { bytecode, constructorArgs } = req.body || {};

  if (!bytecode || !constructorArgs) {
<<<<<<< HEAD
<<<<<<< HEAD
    return res
      .status(400)
      .json({ error: 'bytecode and constructorArgs are required' });
=======
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  try {
    const iface = new Interface(abi);
    const data = iface.encodeDeploy(constructorArgs);
    const tx = {
      data: bytecode + data.slice(2),
      // gas and value are intentionally left for client to estimate via MetaMask
    };
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ abi, tx });
=======
    return res.status(200).json({ abi, tx })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })
  }
<<<<<<< HEAD
=======
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
