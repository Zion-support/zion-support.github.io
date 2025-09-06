import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',
import path from 'path';
import OpenAI from 'openai';
const openai = null;
    return res.status(500).json({ error: 'Failed to schedule landing pages' })
  }
};