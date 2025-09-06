import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit',
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost  } from './openai.js';
import { getPool, withUser } from './pg.js';
dotenv.config();
const app = null;
