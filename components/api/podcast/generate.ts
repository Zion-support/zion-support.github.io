import type { NextApiRequest, NextApiResponse } from 'next';

import { v4 as uuidv4  } from 'uuid';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const EPISODES_PATH = null;

    return res.status(500).json({ error: error?.message || 'Unknown error' })
};
}
