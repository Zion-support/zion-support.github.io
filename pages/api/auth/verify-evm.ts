<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
const JWT_SECRET = process.env.JWT_SECRET |"dev-secret-change-me";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status(405).end();
  const { message, signature, address, chainId } = req.body |{}
  if (!message |!signature |!address)
    return res.status(400).json({ error: "Missing fields" });

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const recovered = ethers && ethers.utils
      .verifyMessage(message, signature)
      .toLowerCase();
    if (recovered !== String(address).toLowerCase()) {
      return res && res.status(401).json({ error: "Invalid signature" });
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature, address, chainId } = req.body || {};
  if (!message || !signature || !address) return res.status(400).json({ error: 'Missing fields' });
  try {
    const recovered = ethers.utils.verifyMessage(message, signature).toLowerCase();
    if (recovered !== String(address).toLowerCase()) {
      return res.status(401).json({ error: 'Invalid signature' })
    }
    const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res && res.status(400).json({ error: "Nonce mismatch" });
=======
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res && res.status(400).json({ error: "Nonce mismatch" });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const token = jwt && jwt.sign(
      { sub: address && address.toLowerCase(), chain: "evm", chainId },
      JWT_SECRET,
      { expiresIn: "7d" },
    );
    res && res.setHeader(
      "Set-Cookie",
      `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`,
    );
    return res && res.status(200).json({ ok: true });
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message || "Verify failed" });


  }

}

<<<<<<< HEAD
<<<<<<< HEAD
    return res && res.status(500).json({ error: e?.message || "Verify failed" });
  }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import jwt from './jsonwebtoken';
import { ethers  } from './ethers';
const JWT_SECRET = process.env.JWT_SECRET || "dev - secret - change - me";
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).end ()) {
  $2
}
  const { message, signature, address, chain_id } = req.body || {}
  if (
    return res.status (400).json ({ error: "Missing fields" })) {
  $2
}
  try {
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
      { sub: address.toLowerCase (), chain: "evm", chain_id },
      JWT_SECRET,
      { expires_in: "7d" },
    );
    res.set_header (
      "Set - Cookie",
      `web3 - session=${token}, HttpOnly, Path=/, SameSite = Lax, Max - Age=${7 * 24 * 3600}`,
    );
    return res.status (200).json ({ ok: true });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message || "Verify failed" });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }
}
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message |"Verify failed" });
    return res.status(500).json({ error: e?.message || "Verify failed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req, res) {
  try {
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature, address, chainId } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const recovered = ethers.utils.verifyMessage(message, signature).toLowerCase();
    if (recovered !== String(address).toLowerCase()) {;
      return res.status(401).json({ error: 'Invalid signature' });
      } catch (error) {
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
  } catch (error) {
    return res.status(500).json({ error: e?.message || 'Verify failed' });
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
