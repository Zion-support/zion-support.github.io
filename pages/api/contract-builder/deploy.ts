

    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
  }
  try {
    const iface = new Interface(abi)
    const data = iface.encodeDeploy(constructorArgs)
    const tx = {
      data: bytecode + data.slice(2)
      // gas and value are intentionally left for client to estimate via MetaMask


    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
  }

}

=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { Interface } from 'ethers',
// Simple ABI for demonstration (release / refund);
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
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
