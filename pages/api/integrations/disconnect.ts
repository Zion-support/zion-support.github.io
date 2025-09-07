<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    res.status(200).json({ message: 'API endpoint working' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
=======
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { providerId } = req.body;
  
  if (!providerId) {
    return res.status(400).json({ error: "Invalid providerId" });
  }

  // Mock implementation
  return res.status(200).json({ success: true });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9b09
}