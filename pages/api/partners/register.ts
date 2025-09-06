    }
    const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from("partners")
      .select("code")
      .eq("code", code)
      .maybeSingle();

    if (existingErr) return res && res.status($1).json({ $2 });
    if (existing) return res && res.status($1).json({ $2 });
    const { error } = await supabase && supabase.from("partners").insert({
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
function sanitize_code (input: string): string {
  return input;
    .toLowerCase ();
    .replace (/[^a - z0 - 9-]/g, "-");
    .replace (/-+/g, "-");
    .replace (/^-|-$/g, "");
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const { name, niche, socials, payout_method, desired_code } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const code = sanitize_code (desired_code);
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
      return res;
        .status (200);
        .json ({ ok: true, code, status: "pending", mock: true });
    }
    const supabase = getServerSupabase ();
    const { data: existing, error: existing_err } = await supabase;
      .from ("partners");
      .select ("code");
      .eq ("code", code);
      .maybe_single ();
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const { error } = await supabase.from ("partners").insert ({
      code,
      name,
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
  }
}
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ ok: true, code, status: "pending" });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
  }
}
