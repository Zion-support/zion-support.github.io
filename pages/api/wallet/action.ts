import type { NextApiRequest, NextApiResponse } from "next",;
import { handleAction } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
};