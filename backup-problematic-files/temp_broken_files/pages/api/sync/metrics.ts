import type { NextApiRequest, NextApiResponse } from "next"
import { readState, filterEventsByScope } from "../../../utils/sync/