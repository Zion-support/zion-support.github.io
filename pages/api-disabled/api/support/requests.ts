:pages/api/support/requests.ts;
import type { NextApiRequest, NextApiResponse } from 'next',import { readJson, writeJson } from '../../../utils/fsDb',export default async function handler() {if (req.method === 'GET') {const requests = readJson<any[]>('support/requests.json', []),import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson  } from '../../../utils/fsDb';
export default async function handler() {if (req.method === 'GET') {const requests = readJson<any[]>('support/requests.json', [])ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/support/requests.ts;
    return res.status(200).json({ requests })}
  if (req.method === 'POST') {const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string }
    const requests = readJson<any[]>('support/requests.json', [])const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    const record = { id, sessionId, reason: reason ?? 'User request', tag: tag ?? 'manual', status: 'open', createdAt: Date.now() }
    requests.push(record)writeJson('support/requests.json', requests)return res.status(200).json({ ok: true, id })}
:pages/api/support/requests.ts;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/support/requests.ts;
  return res.status(405).json({ error: 'Method not allowed' })}export default function handler() {res.status(200).json({ message: 'API endpoint' })export default async function handler() {try {if (req.method === 'GET') {const requests = readJson<any[]>('support/requests.json', [])return res.status(200).json({ requests })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })return res.status(405).json({ error: 'Method not allowed' })}