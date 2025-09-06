import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";



    if (req.method === 'GET') {
      const config = getConfig();
      res.json({ config });
    } else if (req.method === 'POST') {
      const { rate, maxPerUser, enabled } = req.body;
      // Update config logic here
      res.json({ success: true });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
