import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { message, signature, address, chainId } = req.body || {};
  if (!message || !signature || !address) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    // Verify the signature
    const recoveredAddress = ethers.utils.verifyMessage(message, signature);
    if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
      return res.status(400).json({ error: "Invalid signature" });
    }

    // Create JWT token
    const token = jwt.sign(
      { address, chainId, timestamp: Date.now() },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ token, address, chainId });
  } catch (error) {
    console.error("Error verifying EVM signature:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}