<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Interface } from 'ethers',;
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/contract-builder/deploy.ts
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
=======
import { Interface } from '[^']*';
// Simple ABI for demonstration (release/refund)
const abi = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
  try {
    const iface = new Interface(abi)
    const data = iface.encodeDeploy(constructorArgs)
    const tx = {
      data: bytecode + data.slice(2)
      // gas and value are intentionally left for client to estimate via MetaMask
<<<<<<< HEAD

  try {
    const iface = new Interface(abi)
    const data = iface.encodeDeploy(constructorArgs)
    const tx = {
      data: bytecode + data.slice(2)
      // gas and value are intentionally left for client to estimate via MetaMask
    }
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);
=======
    };
return res.status(200).json({ abi, tx });
  } catch (e: any) {
    return res
      .status(400)
      .json({ error: e?.message || 'Failed to prepare deployment tx' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
  }

}

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import { Interface } from 'ethers'
// Simple ABI for demonstration (release / refund);
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/contract-builder/deploy.ts
const abi = [;
  'constructor (address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release () externalfunction refund () externalfunction client () view returns (address)function talent () view returns (address)function total_amount () view returns (uint256)';
]
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
  const { bytecode, constructor_args } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: 'bytecode and constructor_args are required' });
  }
  try {
    const iface = new Interface (abi)
    const data = iface.encode_deploy (constructor_args)
    const tx = {
      data: bytecode + data.slice (2)
      // gas and value are intentionally left for client to estimate via MetaMask;
    }
    return res.status (200).json ({ abi, tx });
  } catch (e: any) {
    return res.status (400).json ({ error: e?.message || 'Failed to prepare deployment tx' });
  }
}




  }

}

<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/contract-builder/deploy.ts
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/contract-builder/deploy.ts
