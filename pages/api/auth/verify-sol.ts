<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { message, signature, publicKey } = req.body || {};
  if (!message || !signature || !publicKey) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    // Verify the signature
    const messageBytes = new TextEncoder().encode(message);
    const signatureBytes = bs58.decode(signature);
    const publicKeyBytes = bs58.decode(publicKey);
    
    const isValid = nacl.sign.detached.verify(
      messageBytes,
      signatureBytes,
      publicKeyBytes
    );

    if (!isValid) {
      return res.status(400).json({ error: "Invalid signature" });
    }

    // Create JWT token
    const token = jwt.sign(
      { publicKey, timestamp: Date.now() },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ token, publicKey });
  } catch (error) {
    console.error("Error verifying Solana signature:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
