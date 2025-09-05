<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensureAdminFromApi } from '../../../../utils/auth',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req),
  if (!allowed) return res.status(403).json({ error: 'Forbidden' }),

  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
  const data = {
    activeUsers30d: 12840,
    gmv: 1450000,
    mrr: 82000,
    yoyGrowth: 1.85,
    completedProjects: 3275,
    globalReach: ['USEUAPACLATAM'],
    funnel: [
      { stage: 'Visitors', value: 250000 },
      { stage: 'Leads', value: 38000 },
      { stage: 'Opportunities', value: 8200 },
      { stage: 'Conversions', value: 1650 }],
    clients: [
      { name: 'Fortune 500 Co', summary: 'Automated LLM evaluation pipeline, 23% cost reduction' },
      { name: 'Global Retailer', summary: 'AI catalog enrichment, 9% revenue lift in A/B' }]},
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { allowed} = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({_error: 'Forbidden'});

  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
  const _data = {_activeUsers30d: 12840, _gmv: 1450000, _mrr: 82000, _yoyGrowth: 1.85, _completedProjects: 3275, _globalReach: ['US', _'EU', _'APAC', _'LATAM'], _funnel: [
      { stage: 'Visitors', _value: 250000},
      {_stage: 'Leads', _value: 38000},
      {_stage: 'Opportunities', _value: 8200},
      {_stage: 'Conversions', _value: 1650}],
    clients: [
      {_name: 'Fortune 500 Co', _summary: 'Automated LLM evaluation pipeline, _23% cost reduction'},
      {_name: 'Global Retailer', _summary: 'AI catalog enrichment, _9% revenue lift in A/B'}]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  res.status(200).json(data)
}