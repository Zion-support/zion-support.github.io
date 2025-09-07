import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';
interface ReportingData {
  byTenant: Record<string, {
    funnel: { stage: string, count: number}[],
    timeToHireDays: number,
    costPerHireUsd?: number,
    updatedAt: string}>
}

const FILE = $2;
const FALLBACK: ReportingData = $2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const tenantId = $2;
  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK),
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() },
    return res.status(200).json(entry)
  }

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {},
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = $2;
      next[tenantId] = {
        funnel: funnel || next[tenantId]?.funnel || [],
        timeToHireDays: typeof timeToHireDays = $2;
        costPerHireUsd: typeof costPerHireUsd = $2;
        updatedAt: new Date().toISOString()},
      return { byTenant: next}
    }, FALLBACK),
    return res.status(200).json(updated.byTenant[tenantId])
  }

  return res.status(405).json({ error: 'Method not allowed' })
}