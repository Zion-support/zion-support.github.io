import Fastify from 'fastify'
import cors from '@fastify/
import rateLimit from '@fastify/
import { createOpenAIClient, generateJobPost } from './
import { getPool, withUser } from './
app.post('/ai/
app.post('/jobs/
app.get('/talent/
app.get('/projects/: any
app.get('/