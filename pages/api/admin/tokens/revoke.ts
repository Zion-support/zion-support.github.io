import type { NextApiRequest, NextApiResponse } from "next";
import { revokeTokens } from "../../../../utils/token/service";


  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
