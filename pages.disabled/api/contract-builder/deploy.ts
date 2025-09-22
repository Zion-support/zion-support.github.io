<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';

import { Interface } from 'ethers';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
  if (!bytecode |!constructorArgs) {
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
import { Interface } from '[^']*';
// Simple ABI for demonstration (release/refund)
const abi = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
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
  try {
    const iface = new Interface(abi)
    const data = iface.encodeDeploy(constructorArgs)
    const tx = {
      data: bytecode + data.slice(2)
      // gas and value are intentionally left for client to estimate via MetaMask
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
    };
return res.status(200).json({ abi, tx });
  } catch (e: any) {
    return res
      .status(400)
      .json({ error: e?.message || 'Failed to prepare deployment tx' });
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
=======
=======
  }
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    return res.status(200).json({ abi, tx })
  } catch (e: any) {'
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
  }
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts

<<<<<<< HEAD
  }
}
=======
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { Interface } from 'ethers'
// Simple ABI for demonstration (release / refund);


=======
  }
origin/cursor/automate-test-improve-and-merge-code-2533

    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message |'Failed to prepare deployment tx' })
  }

}


}
import type { NextApiRequest, NextApiResponse } from 'next',
import { Interface } from 'ethers',

// Simple ABI for demonstration (release / refund);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
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




<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
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
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts


  }

}

<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/contract-builder/deploy.ts
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

<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts


'
import type { NextApiRequest, NextApiResponse } from 'next','
import { Interface } from 'ethers',;
// Simple ABI for demonstration (release / refund);
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
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
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/contract-builder/deploy.ts
  }
}


<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages_backup/api/contract-builder/deploy.ts
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/contract-builder/deploy.ts
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
<<<<<<< HEAD:pages/api/contract-builder/deploy.ts
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
