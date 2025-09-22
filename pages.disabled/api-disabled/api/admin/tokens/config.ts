import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig());
  }

  if (req.method === 'POST') {
    const { updated } = req.body || {};
    if (!updated) {
      return res.status(400).json({ error: 'Updated config required' });
    }
    
    try {
      tokenStore.updateConfig(updated);
      return res.status(200).json({ success: true, config: getConfig() });
    } catch (error) {
      console.error('Error updating config:', error);
      return res.status(500).json({ error: 'Failed to update config' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}