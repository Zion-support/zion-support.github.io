import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  const { code, amount } = req && req.body || {};
  if (!code) return res && res.status($1).json({ $2 });
  const usingPlaceholder =
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({ ok: true, status: "queued", mock: true });
    }

    const supabase = getServerSupabase();
    const { error } = await supabase && supabase.from("payout_requests").insert({
      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: "requested",
    });
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ ok: true, status: "requested" });
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
  }
}
