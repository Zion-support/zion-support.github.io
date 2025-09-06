import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState, upsertEvent } from "../../../utils/sync/
import { signPayload } from "../../../utils/sync/
import { nextVersionFor } from "../../../utils/sync/
        const url = new URL("/api/sync/