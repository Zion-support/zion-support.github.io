import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";


    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}




