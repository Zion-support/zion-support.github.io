<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
const { bytecode, constructorArgs } = req.body || {};
  if (!bytecode || !constructorArgs) {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';

import { Interface } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { Interface } from 'ethers',;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Simple ABI for demonstration (release/refund)
const abi = [
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)'
]
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { bytecode, constructorArgs } = req.body |{}
  if (!bytecode |!constructorArgs) {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
  }
  try {
    const iface = new Interface(abi)
    const data = iface.encodeDeploy(constructorArgs)
    const tx = {
      data: bytecode + data.slice(2)
      // gas and value are intentionally left for client to estimate via MetaMask
<<<<<<< HEAD

<<<<<<< HEAD
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);
=======

=======
<<<<<<< HEAD
    };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
  }
<<<<<<< HEAD

}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next',
import { Interface } from 'ethers',
// Simple ABI for demonstration (release / refund);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const abi = [;
  'constructor (address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release () externalfunction refund () externalfunction client () view returns (address)function talent () view returns (address)function total_amount () view returns (uint256)';
],
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  const { bytecode, constructor_args } = req.body || {},
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: 'bytecode and constructor_args are required' });
  }
  try {
    const iface = new Interface (abi),
    const data = iface.encode_deploy (constructor_args),
    const tx = {
      data: bytecode + data.slice (2),
      // gas and value are intentionally left for client to estimate via MetaMask;
    },
    return res.status (200).json ({ abi, tx });
  } catch (e: any) {
    return res.status (400).json ({ error: e?.message || 'Failed to prepare deployment tx' });
=======
    }

    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
  try {
    const iface = new Interface(abi),
    const data = iface.encodeDeploy(constructorArgs),
    const tx = {
      data: bytecode + data.slice(2),
      // gas and value are intentionally left for client to estimate via MetaMask
    },
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);
const abi = [;
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)';
],;
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
  const { bytecode, constructorArgs } = req.body || {};
  if (!bytecode || !constructorArgs) {;
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const iface = new Interface(abi);
    const data = iface.encodeDeploy(constructorArgs);
    const tx = {;
      data: bytecode + data.slice(2);
      // gas and value are intentionally left for client to estimate via MetaMask;
    };
    return res.status(200).json({ abi, tx });
  } catch (error) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' });
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
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
