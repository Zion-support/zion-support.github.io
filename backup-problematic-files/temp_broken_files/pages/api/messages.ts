import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { readJsonFile, writeJsonFile } from '../../utils/
import type { Conversation, Message } from '../../utils/
import { rateLimit } from '../../utils/