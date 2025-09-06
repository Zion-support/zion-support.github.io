<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, amount } = req.body |{}
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({ ok: true, status: "queued", mock: true });
    }
    const supabase = getServerSupabase();
<<<<<<< HEAD
    const { error } = await supabase.from("payout_requests").insert({
      partner_code: String(code).toLowerCase()
      amount: Number(amount) |null
      status: "requested"
=======

  } catch (e: any) {
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return res.status(500).json({ error: e?.message });
=======
    const { error } = await supabase.from('payout_requests').insert({
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: "requested",
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    });
    if (error) return res.status(500).json({ error: "Database error" });
    return res.status(200).json({ ok: true, status: "requested" });

  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
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
