import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
import { readJson } from '../../../utils/
import { HelpArticle, matchIntent } from '../../../utils/
import { logSupportEventToOperator } from '../../../utils/
  const articles = readJson<HelpArticle[]>('help/