<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}




<<<<<<< HEAD
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
