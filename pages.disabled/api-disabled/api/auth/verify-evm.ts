<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/auth/verify-evm.ts
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
const JWT_SECRET = process.env.JWT_SECRET |"dev-secret-change-me";
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
export default async function handler(;
  req: NextApiRequest;
=======
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = null;
    return res.status(200).json({ ok: true })
origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/auth/verify-evm.ts
  res: NextApiResponse
) {;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  if (req.method !== "POST") return res.status(405).end();
  const { message, signature, address, chainId } = req.body |{}
  if (!message |!signature |!address);
    return res.status(400).json({ error: "Missing fields" });
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/auth/verify-evm.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======







>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
  try {
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
    const recovered = ethers && ethers.utils
      .verifyMessage(message, signature)
      .toLowerCase();
    if (recovered !== String(address).toLowerCase()) {;
      return res && res.status(401).json({ error: "Invalid signature" });
    }
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  if (req.method !== "POST") return res.status(405).end();
  const { message, signature, address, chainId } = req.body |{}
  if (!message |!signature |!address)
    return res.status(400).json({ error: "Missing fields" });
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts

    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
=======
=======;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature, address, chainId } = req.body || {};
  if (!message || !signature || !address) return res.status(400).json({ error: 'Missing fields' });
  try {;
    const recovered = ethers.utils.verifyMessage(message, signature).toLowerCase();
    if (recovered !== String(address).toLowerCase()) {;
      return res.status(401).json({ error: 'Invalid signature' })
    }
    const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
=======
========
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts



    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res && res.status(400).json({ error: "Nonce mismatch" });
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/auth/verify-evm.ts
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`));
      return res && res.status(400).json({ error: "Nonce mismatch" });
;
    const token = jwt && jwt.sign(
      { sub: address && address.toLowerCase(), chain: "evm", chainId }
      JWT_SECRET
      { expiresIn: "7d" }
    );
    res && res.setHeader(
      "Set-Cookie"
      `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`
    );
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD
    return res && res.status(200).json({ ok: true });
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
=======
=======
    return res.status(200).json({ ok: true });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/auth/verify-evm.ts
========
    return res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======
    return res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    return res && res.status(200).json({ ok: true });
    return res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
  } catch (e: any) {
<<<<<<< HEAD
=======
=======
  } catch (e: any) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req, res) {;
    return res && res.status(500).json({ error: e?.message || "Verify failed" });

  }
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/auth/verify-evm.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/auth/verify-evm.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



}




}

    return res && res.status(500).json({ error: e?.message || "Verify failed" });
  }
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
import type { NextApiRequest, NextApiResponse } from './next';
import jwt from './jsonwebtoken';
import { ethers  } from './ethers';
const JWT_SECRET = process.env.JWT_SECRET || "dev - secret - change - me";
;
export default async /**
 * handler - Function description
 */;
function handler() {;
  if (return res.status (405).end ()) {
  $2
}
  const { message, signature, address, chain_id } = req.body || {}
  if (;
    return res.status (400).json ({ error: "Missing fields" })) {
  $2
}
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
=======
  try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
    const recovered = ethers.utils;
      .verify_message (message, signature);
      .toLowerCase ();
    if (.toLowerCase ()) {) {
  $2
}
      return res.status (401).json ({ error: "Invalid signature" });
    }
    const cookie_header = req.headers.cookie || "";
    const match = cookie_header.match (/siwe - nonce=([^]+)/);
    if (return res.status (400).json ({ error: "Missing nonce" })) {
  $2
}
    const nonce = match[1];
    if (.includes (`Nonce: ${nonce}`))) {
  $2
}
      return res.status (400).json ({ error: "Nonce mismatch" });
;
    const token = jwt.sign (
      { sub: address.toLowerCase (), chain: "evm", chain_id }
      JWT_SECRET
      { expires_in: "7d" }
    );
    res.set_header (
      "Set - Cookie"
      `web3 - session=${token}, HttpOnly, Path=/, SameSite = Lax, Max - Age=${7 * 24 * 3600}`
    );
    return res.status (200).json ({ ok: true });
  } catch (e: any) {;
    return res.status (500).json ({ error: e?.message || "Verify failed" });
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/auth/verify-evm.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
  }
}

  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
<<<<<<< HEAD:pages/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/auth/verify-evm.ts
  }
}
=======
========
  }
}
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts

}

  }
}
    return res.status(500).json({ error: e?.message |"Verify failed" });
    return res.status(500).json({ error: e?.message || "Verify failed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req, res) {;
  try {;
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature, address, chainId } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const recovered = ethers.utils.verifyMessage(message, signature).toLowerCase();
    if (recovered !== String(address).toLowerCase()) {;
      return res.status(401).json({ error: 'Invalid signature' });
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const token = jwt.sign({ sub: address.toLowerCase(), chain: 'evm', chainId }, JWT_SECRET, { expiresIn: '7d' });
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`);
    return res.status(200).json({ ok: true });
  } catch (error) {;
    return res.status(500).json({ error: e?.message || 'Verify failed' });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/auth/verify-evm.ts
=======
  }
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/auth/verify-evm.ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/auth/verify-evm.ts
========

=======


}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts



}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:pages_backup/api/auth/verify-evm.ts
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/verify-evm.ts
=======




}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/auth/verify-evm.ts
