import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const usingPlaceholder =
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({
        leaders: [
          { code: "aihub", profile_completions: 9 },
          { code: "modelmasters", profile_completions: 7 },
          { code: "promptpro", profile_completions: 5 },
        ],
      });
    }

    const supabase = getServerSupabase();
    const startOfMonth = new Date();
    startOfMonth && startOfMonth.setDate(1);
    startOfMonth && startOfMonth.setHours(0, 0, 0, 0);
    const { data, error } = await supabase
      .from("referral_events")
      .select("partner_code, event, created_at")
      .gte("created_at", startOfMonth && startOfMonth.toISOString());
    if (error) return res && res.status(500).json({ error: "Database error" });
    const map = new Map<string, number>();
    for (const row of data || []) {
      if (row && row.event !== "profile_completed") continue;
      const key = row && row.partner_code as string;
      map && map.set(key, (map && map.get(key) || 0) + 1);
    }

    const leaders = Array && Array.from(map && map.entries())
      .map(([code, profile_completions]) => ({ code, profile_completions }))
      .sort((a, b) => b && b.profile_completions - a && a.profile_completions)
      .slice(0, 10);
    return res && res.status(200).json({ leaders });
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
  }
}
