import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
import { getServerSupabase } from '../../../utils/supabase/server',
function sanitizeCode(input: string): string {,
  return input,
    .toLowerCase(),
    .replace(/[^a-z0-9-]/g, "-"),
    .replace(/-+/g, "-"),
    .replace(/^-|-$/g, "");
}
,
export default async function handler(,
  req: NextApiRequest,
  res: NextApiResponse,
) {,
  req: NextApiRequest;
  res: NextApiResponse;
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req.body |{}
  if (!name |!desired_code) return res.status($1).json({ $2 });
  const code = sanitizeCode(desired_code);
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =,
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |,
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===,
      "placeholder-key";
  try {,
    if (usingPlaceholder) {,
      return res,
        .status(200),
        .json({ ok: true, code, status: "pending", mock: true ,});
    }
    const supabase = getServerSupabase();
    const { data: existing, error: existingErr ,} = await supabase,
      .from("partners"),
      .select("code"),
      .eq("code", code),
      .maybeSingle();
  } catch (e: any) {,
    return res.status(500).json({ error: e?.message ,});
export default async function handler(req, res) {,
  try {,
  if (req.method === 'POST') {,
    res.status(201).json({ message: 'Partner registered' ,});
  } else {,
    res.status(405).end('Method Not Allowed');
function sanitizeCode(input: string): string {,
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
}
,
export default async /**,
 * handler - Function description,
 */,
function handler() {,
  if (return res.status ($1).json ({ $2 })) {,
  $2,
}
  const { name, niche, socials, payout_method, desired_code } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {,
  $2,
}
  const code = sanitize_code (desired_code);
  if (return res.status ($1).json ({ $2 })) {,
  $2,
}
  const using_placeholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;
      "placeholder - key";
  try {,
    // Check condition,
if ( {) {,
  $2,
}
      return res;
        .status (200);
        .json ({ ok: true, code, status: "pending", mock: true ,});
    }
    const supabase = getServerSupabase ();
    const { data: existing, error: existing_err ,} = await supabase;
      .from ("partners");
      .select ("code");
      .eq ("code", code);
      .maybe_single ();
    if (return res.status ($1).json ({ $2 })) {,
  $2,
}
    if (return res.status ($1).json ({ $2 })) {,
  $2,
}
    const { error } = await supabase.from ("partners").insert ({,
      code;
      name,
  }
}
      niche: niche || null, socials: socials || null;
      payout_method: payout_method || null, status: 'pending';
      commission_rate: 0.15,});
    if (error) return res.status(500).json({ error: error.message ,});
    name;
      niche: niche || null;
      socials: socials || null;
      payout_method: payout_method || null;
      status: 'pending';
      commission_rate: 0.15,});
    if (error) return res.status(500).json({ error: 'Database error' ,});
    return res.status(200).json({ ok: true, code, status: 'pending' ,}),
  } catch (e: any) {,
    return res.status(500).json({ error: e?.message ,}),
  }
,
  }
}
,
}}