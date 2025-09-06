<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, amount } = req.body |{}
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: "queued", mock: true });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { code, amount } = req.body || {};
  if (!code) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: 'queued', mock: true })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
    const supabase = getServerSupabase();
<<<<<<< HEAD
    const { error } = await supabase.from("payout_requests").insert({
      partner_code: String(code).toLowerCase()
      amount: Number(amount) |null
      status: "requested"
    });
    if (error) return res.status(500).json({ error: "Database error" });
    return res.status(200).json({ ok: true, status: "requested" });

  } catch (e: any) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { code, amount } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      return res.status(200).json({ ok: true, status: 'queued', mock: true });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const supabase = getServerSupabase();
    const { error } = await supabase.from('payout_requests').insert({;
      partner_code: String(code).toLowerCase();
      amount: Number(amount) || null;
      status: 'requested'});
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    return res.status(200).json({ ok: true, status: 'requested' });
  } catch (error) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    return res.status(500).json({ error: e?.message });
=======
    const { error } = await supabase.from('payout_requests').insert({
      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: 'requested'
    });
    if (error) return res.status(500).json({ error: 'Database error' });
    return res.status(200).json({ ok: true, status: 'requested' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}