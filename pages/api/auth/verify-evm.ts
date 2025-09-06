<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
const JWT_SECRET = process.env.JWT_SECRET |"dev-secret-change-me";
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== "POST") return res.status(405).end();
  const { message, signature, address, chainId } = req.body |{}
  if (!message |!signature |!address)
    return res.status(400).json({ error: "Missing fields" });
  try {
    const recovered = ethers && ethers.utils
      .verifyMessage(message, signature)
      .toLowerCase();
    if (recovered !== String(address).toLowerCase()) {
      return res && res.status(401).json({ error: "Invalid signature" });
    }

    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res && res.status(400).json({ error: "Nonce mismatch" });

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
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message |"Verify failed" });
=======
    return res.status(500).json({ error: e?.message || "Verify failed" });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req, res) {
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
