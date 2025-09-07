
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost  } from './openai.js';
import { getPool, withUser } from './pg.js';
dotenv.config();

