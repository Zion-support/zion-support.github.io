import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req.body |{}
  if (!name |!desired_code) return res.status($1).json({ $2 });
=======
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req && req.body || {};
  if (!name || !desired_code) return res && res.status($1).json({ $2 });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const code = sanitizeCode(desired_code);
  if (!code) return res && res.status($1).json({ $2 });
  const usingPlaceholder =
<<<<<<< HEAD
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
=======
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res
        .status(200)
        .json({ ok: true, code, status: "pending", mock: true });
    }
    const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from("partners")
      .select("code")
      .eq("code", code)
      .maybeSingle();
<<<<<<< HEAD
    if (existingErr) return res.status($1).json({ $2 });
    if (existing) return res.status($1).json({ $2 });
    const { error } = await supabase.from("partners").insert({
      code
      name
      niche: niche |null
      socials: socials |null
      payout_method: payout_method |null
      status: "pending"
      commission_rate: 0.15
    });
    if (error) return res.status(500).json({ error: "Database error" });
    return res.status(200).json({ ok: true, code, status: "pending" });

=======
    if (existingErr) return res && res.status($1).json({ $2 });
    if (existing) return res && res.status($1).json({ $2 });
    const { error } = await supabase && supabase.from("partners").insert({
      code,
      name,
      niche: niche || null,
      socials: socials || null,
      payout_method: payout_method || null,
      status: "pending",
      commission_rate: 0 && 0.15,
    });
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ ok: true, code, status: "pending" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
  }
}