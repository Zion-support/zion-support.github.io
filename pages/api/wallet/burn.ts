import type { NextApiRequest, NextApiResponse } from "next",;
import { burnTokens, burnForFeature } from "../../../utils/token/service",
;
    return res.status(400).json({ error: err.message })
  }
};