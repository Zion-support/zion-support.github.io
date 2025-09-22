:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { Interface } from 'ethers';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { NextApiRequest, NextApiResponse } from 'next',;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
=======

import type { NextApiRequest, NextApiResponse } from 'next',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import type { NextApiRequest, NextApiResponse } from 'next',;
import type { NextApiRequest, NextApiResponse } from 'next';

import { Interface } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next',;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
import { Interface } from 'ethers',;
// Simple ABI for demonstration (release/refund)
const abi = ['
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)'
]
export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { bytecode, constructorArgs } = req.body |{}
:pages_backup/api/contract-builder/deploy.ts
  if (!bytecode |!constructorArgs) {
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  if (!bytecode |!constructorArgs) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
import { Interface } from '[^']*';
// Simple ABI for demonstration (release/refund)
const abi = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
=======

    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
import { Interface } from '[^']*';
// Simple ABI for demonstration (release/refund)
const abi = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    return res.status(400).json({ error: 'bytecode and constructorArgs are required' })
import { Interface } from '[^']*';
// Simple ABI for demonstration (release/refund)
const abi = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
  }
:pages_backup/api/contract-builder/deploy.ts
const { bytecode, constructorArgs } = req.body |{}
  if (!bytecode |!constructorArgs) {

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts

  try {
=======
  try {}
    const iface = new Interface(abi)
    const data = iface.encodeDeploy(constructorArgs)
    const tx = {}
      data: bytecode + data.slice(2);
      // gas and value are intentionally left for client to estimate via MetaMask;
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
    const iface = new Interface(abi),
    const data = iface.encodeDeploy(constructorArgs),
    const tx = {}
      data: bytecode + data.slice(2),
      // gas and value are intentionally left for client to estimate via MetaMask;
    },
    return res.status(200).json({ abi, tx })
  } catch (e: any) {'
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })
  };
};'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);'
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);
:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
    };
return res.status(200).json({ abi, tx });
  } catch (e: any) {
    return res
      .status(400)
      .json({ error: e?.message || 'Failed to prepare deployment tx' });
:pages_backup/api/contract-builder/deploy.ts
return res.status(200).json({ abi, tx })
  } catch (e: any) {'
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
  }
:pages/api/contract-builder/deploy.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
}
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

:pages_backup/api/contract-builder/deploy.ts

  }

}

:pages_backup/api/contract-builder/deploy.ts
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD

'
import type { NextApiRequest, NextApiResponse } from 'next','
import { Interface } from 'ethers',;
// Simple ABI for demonstration (release / refund);
:pages_backup/api/contract-builder/deploy.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import { Interface } from 'ethers'
// Simple ABI for demonstration (release / refund);

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
const abi = [;
=======

const abi = [;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
  'constructor (address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release () externalfunction refund () externalfunction client () view returns (address)function talent () view returns (address)function total_amount () view returns (uint256)';
],
export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  const { bytecode, constructor_args } = req.body || {},
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (400).json ({ error: 'bytecode and constructor_args are required' });
  }
  try {}
    const iface = new Interface (abi),
    const data = iface.encode_deploy (constructor_args),
    const tx = {}
      data: bytecode + data.slice (2),
      // gas and value are intentionally left for client to estimate via MetaMask;
    },
    return res.status (200).json ({ abi, tx });
  } catch (e: any) {'
    return res.status (400).json ({ error: e?.message || 'Failed to prepare deployment tx' });
:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }

'
import { Interface } from 'ethers';
// Simple ABI for demonstration (release/refund);
const abi = [;'
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() externalfunction refund() externalfunction client() view returns (address)function talent() view returns (address)function totalAmount() view returns (uint256)';
],;
export default async function handler(req, res) {}
  try {'
  if (req.method !== '$1') {';
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
:pages_backup/api/contract-builder/deploy.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
  }
}

:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts

=======

  }
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}
}

  }
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
  }

}

:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
}
:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
=======
}
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
