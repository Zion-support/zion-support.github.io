<<<<<<< HEAD:pages/api/wallet/earn.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement earn logic
    res.status(200).json({ message: 'earn endpoint' });
  } catch (error) {
    console.error('Error in earn:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { earnTokens } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, metadata } = req.body || {}

  if (!userId || typeof amount !== "number" || !reason) {

    return res.status(400).json({ error: "userId, amount, reason required" })

    } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

  }
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/wallet/earn.ts
