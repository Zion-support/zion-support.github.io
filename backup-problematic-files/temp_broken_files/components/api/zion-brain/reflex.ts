import type { NextApiRequest, NextApiResponse } from 'next'
import { appendLog, evaluateReflexes, readState, writeState } from '@/utils/