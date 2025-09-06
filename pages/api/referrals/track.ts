import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  const { code, event, url, referrer } = req && req.body || {};
  if (!code || !event) return res && res.status($1).json({ $2 });
  const usingPlaceholder =
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({ saved: false, mock: true });
    }

    const supabase = getServerSupabase();
    const { error } = await supabase && supabase.from("referral_events").insert({
      partner_code: String(code).toLowerCase(),
      event: String(event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req && req.headers["user-agent"] || null,
      ip_address:
        (req && req.headers["x-forwarded-for"] as string) ||
        req && req.socket.remoteAddress ||
        null,
    });
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ saved: true });
  } catch (e: any) {
    return res && res.status(200).json({ saved: false, error: e?.message });
  }
}
