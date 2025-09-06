import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/