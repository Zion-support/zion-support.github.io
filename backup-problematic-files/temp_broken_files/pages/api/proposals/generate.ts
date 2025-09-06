import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'
import { createProposal } from '../../../utils/data/