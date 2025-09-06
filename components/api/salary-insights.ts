import type { NextApiRequest, NextApiResponse } from 'next';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import OpenAI from 'openai';
type RequestBody = any;
  return res.status(200).json(response)
}
