import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { code, amount } = req.body || {},
  if (!code) return res.status(400).json($2);
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: 'queued', mock: true})
    }

    const supabase = getServerSupabase($2);
    const { error } = await supabase.from('payout_requests').insert({
      partner_code: String(code).toLowerCase($2);
      amount: Number(amount) || null,
      status: 'requested'}),
    if (error) return res.status(500).json($2);
    return res.status(200).json({ ok: true, status: 'requested' })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }