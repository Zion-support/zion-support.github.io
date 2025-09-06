import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState } from "../../../utils/sync/
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/