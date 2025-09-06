import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState, upsertEvent } from "../../../utils/sync/
import { computeMerkleRootFromVotes } from "../../../utils/sync/
import { signPayload } from "../../../utils/sync/
        const url = new URL("/api/sync/