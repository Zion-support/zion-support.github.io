<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
<<<<<<< HEAD
const JWT_SECRET = process.env.JWT_SECRET |"dev-secret-change-me";
=======
const JWT_SECRET = process && process.env.JWT_SECRET || "dev-secret-change-me";

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).end();
  const { message, signature, address, chainId } = req.body |{}
  if (!message |!signature |!address)
    return res.status(400).json({ error: "Missing fields" });
=======
  if (req && req.method !== "POST") return res && res.status(405).end();
  const { message, signature, address, chainId } = req && req.body || {};
  if (!message || !signature || !address)
    return res && res.status(400).json({ error: "Missing fields" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  try {
    const recovered = ethers && ethers.utils
      .verifyMessage(message, signature)
      .toLowerCase();
    if (recovered !== String(address).toLowerCase()) {
      return res && res.status(401).json({ error: "Invalid signature" });
    }
<<<<<<< HEAD
    const cookieHeader = req.headers.cookie |"";
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res.status(400).json({ error: "Missing nonce" });
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res.status(400).json({ error: "Nonce mismatch" });
    const token = jwt.sign(
      { sub: address.toLowerCase(), chain: "evm", chainId }
      JWT_SECRET
      { expiresIn: "7d" }
    );
    res.setHeader(
      "Set-Cookie"
      `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`
    );
    return res.status(200).json({ ok: true });

  } catch (e: any) {
    return res.status(500).json({ error: e?.message |"Verify failed" });
=======
    const cookieHeader = req && req.headers.cookie || "";
    const match = cookieHeader && cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res && res.status(400).json({ error: "Missing nonce" });
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
    return res && res.status(500).json({ error: e?.message || "Verify failed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
