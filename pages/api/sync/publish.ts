import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/
import { verifySignature } from "../../../utils/sync/
import { computeMerkleRootFromVotes } from "../../../utils/sync/
import { SyncEvent } from "../../../utils/sync/
    const baseSignature = require("../../../utils/sync/
          const url = new URL("/api/sync/
    const base_signature = require ("../../../utils / sync /
          const url = new URL ("/api / sync /