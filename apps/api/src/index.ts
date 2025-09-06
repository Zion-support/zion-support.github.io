import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
dotenv.config();
const app = null;
