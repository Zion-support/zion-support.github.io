import type {_NextApiRequest, _NextApiResponse} from 'next';

// Simple ABI for demonstration (release/refund)
const _abi = [
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)',
  'function release() external',
  'function refund() external',
  'function client() view returns (address)',
  'function talent() view returns (address)',
  'function totalAmount() view returns (uint256)'
];

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const {_bytecode, _constructorArgs} = req.body || {};

  if (!bytecode || !constructorArgs) {_return res.status(400).json({ error: 'bytecode and constructorArgs are required'});
  }

  try {_const _iface = new Interface(abi);
    const _data = iface.encodeDeploy(constructorArgs);
    const _tx = {
      data: bytecode + data.slice(2), _// gas and value are intentionally left for client to estimate via MetaMask};
    return res.status(200).json({_abi, _tx});
  } catch (e: unknown) {_return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx'});
  }
}