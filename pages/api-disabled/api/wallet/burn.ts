:pages/api/wallet/burn.ts;
import type { NextApiRequest, NextApiResponse } from "next",import { burnTokens, burnForFeature } from "../../../utils/token/service",import type { NextApiRequest, NextApiResponse } from 'next';
import { burnTokens, burnForFeature  } from '../../../utils/token/service';
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/wallet/burn.ts;return res.status(400).json({ error: err.message })}
}