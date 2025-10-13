import type { NextApiRequest, NextApiResponse } from 'next';';
import { Interface } from 'ethers';';
import type { NextApiRequest, NextApiResponse } from 'next',';';
import { Interface } from 'ethers',';'
// Simple ABI for demonstration (release/refund);
const abi = [
  // TODO: Add items
]
  // TODO: Add items
]
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)''
];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') {'
    return res.status(405).json({ error: 'Method not allowed' })'
  }
  const { bytecode, constructorArgs } = req.body |{}
  if (!bytecode |!constructorArgs) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })'
  }
  try {;
const iface = new Interface(abi),;
const data = iface.encodeDeploy(constructorArgs),;
const tx = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      data: bytecode + data.slice(2),
      // gas and value are intentionally left for client to estimate via MetaMask
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })'
  try {;
const iface = new Interface(abi),;
const data = iface.encodeDeploy(constructorArgs),;
const tx = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      data: bytecode + data.slice(2),
      // gas and value are intentionally left for client to estimate via MetaMask
    },
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })'
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';';
import { Interface } from 'ethers';'
// Simple ABI for demonstration (release/refund);
const abi = [
  // TODO: Add items
]
  // TODO: Add items
]
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)''
],;
export default async function handler(req, res) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== '$1') {'
    return res.status(405).json({ error: 'Method not allowed' })'
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  }
}
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
