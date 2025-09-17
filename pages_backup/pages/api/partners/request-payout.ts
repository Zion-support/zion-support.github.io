





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

    }
    const supabase = getServerSupabase();
    const { error } = await supabase.from("payout_requests").insert({
      partner_code: String(code).toLowerCase()
      amount: Number(amount) |null
      status: "requested"
    });
    if (error) return res.status(500).json({ error: "Database error" });
    return res.status(200).json({ ok: true, status: "requested" });









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





    return res.status(500).json({ error: e?.message });


    return res.status(500).json({ error: e?.message });



    const { error } = await supabase.from('payout_requests').insert({
      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: "requested",
    });
    if (error) return res.status(500).json({ error: "Database error" });
    return res.status(200).json({ ok: true, status: "requested" });

  } catch (e: any) {

    return res && res.status(500).json({ error: e?.message });

  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, amount } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });




  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: 'queued', mock: true })
    }

    const supabase = getServerSupabase();
    const { error } = await supabase.from('payout_requests').insert({
      partner_code: String(code).toLowerCase(), amount: Number(amount) || null,
      status: 'requested'});
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, status: 'requested' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const { code, amount } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const using_placeholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;
      "placeholder - key";
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ ok: true, status: "queued", mock: true });
    }
    const supabase = getServerSupabase ();
    const { error } = await supabase.from ("payout_requests").insert ({
      partner_code: String (code).toLowerCase (),
      amount: Number (amount) || null,
      status: "requested",
    });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ ok: true, status: "requested" });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
  }
}

