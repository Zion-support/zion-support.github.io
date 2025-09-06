import type { NextApiRequest, NextApiResponse } from "next",;
import { redeemToCredits } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
};