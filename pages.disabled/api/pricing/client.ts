<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> main
import type { NextApiRequest, NextApiResponse } from 'next';
import { type { ClientBudgetRequest }, { generateClientBudgetSuggestion } } from '@/utils/api/aiPricing';
import { logPricingAnalytics } from '@/utils/data/pricingAnalytics';
export default async function handler("req": NextApiRequest, "res": NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ "error": 'Method Not Allowed' })}
  try {
    const body = req.body as Partial
export default function ClientPage() {
  return (
    <ClientBudgetRequest>;
    if (!body || !body.title || !body.category) {
      return res.status(400).json({ "error": 'Missing required fields: title, category' })}
    const "input": ClientBudgetRequest = {
      title: String(body.title),
      "category": String(body.category),
      "timelineWeeks": typeof body.timelineWeeks === 'number' ? body.timelineWeeks : undefined,
      "scope": body.scope ? String(body.scope) : undefined,
      "experienceLevel": body.experienceLevel as ClientBudgetRequest['experienceLevel']};
    const suggestion = await generateClientBudgetSuggestion(input);
    await logPricingAnalytics({ "kind": 'client_suggestion', "payload": { input, suggestion } });
    return res.status(200).json({ suggestion, "disclaimer": 'Based on market data & trends' })} catch (error) {
    return res.status(500).json({ "error": 'Failed to generate budget suggestion' })}
}
  )}
import type { NextApiRequest,NextApiResponse } from 'next'; import { type { ClientBudgetRequest },{ generateClientBudgetSuggestion } } from '@/utils/api/aiPricing'; import { logPricingAnalytics } from '@/utils/data/pricingAnalytics'; export default async function handler(req: 'NextApiRequest',res: NextApiResponse) { if (req.method !== 'POST') { res.setHeader('Allow','POST'); return res.status(405).json({ error: 'Method Not Allowed' })} try { const body = req.body as Partial export default function ClientPage() { return ( <ClientBudgetRequest> if (!body || !body.title || !body.category) { return res.status(400).json({ error: 'Missing required fields: title,category' })} const input: ClientBudgetRequest = { title: String(body.title),category: String(body.category),timelineWeeks: typeof body.timelineWeeks === 'number' ? body.timelineWeeks : undefined,scope: body.scope ? String(body.scope) : undefined,experienceLevel: body.experienceLevel as ClientBudgetRequest['experienceLevel'],}; const suggestion = await generateClientBudgetSuggestion(input); await logPricingAnalytics({ kind: 'client_suggestion',payload: { input,suggestion } }); return res.status(200).json({ suggestion,disclaimer: 'Based on market data & trends' })} catch (error) { return res.status(500).json({ error: 'Failed to generate budget suggestion' })} } )}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
>>>>>>> main
>>>>>>> main
import type { NextApiRequest,NextApiResponse } from 'next'; import { type { ClientBudgetRequest },{ generateClientBudgetSuggestion } } from '@/utils/api/aiPricing'; import { logPricingAnalytics } from '@/utils/data/pricingAnalytics'; export default async function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { res.setHeader('Allow','POST'); return res.status(405).json({ error: 'Method Not Allowed' })} try { const body = req.body as Partial export default function ClientPage() { return ( <ClientBudgetRequest>; if (!body || !body.title || !body.category) { return res.status(400).json({ error: 'Missing required fields: title,category' })} const input: ClientBudgetRequest = { title: String(body.title),category: String(body.category),timelineWeeks: typeof body.timelineWeeks === 'number' ? body.timelineWeeks : undefined,scope: body.scope ? String(body.scope) : undefined,experienceLevel: body.experienceLevel as ClientBudgetRequest['experienceLevel'],}; const suggestion = await generateClientBudgetSuggestion(input); await logPricingAnalytics({ kind: 'client_suggestion',payload: { input,suggestion } }); return res.status(200).json({ suggestion,disclaimer: 'Based on market data & trends' })} catch (error) { return res.status(500).json({ error: 'Failed to generate budget suggestion' })} } )}
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
