import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({ saved: false, mock: true });
    }
    const supabase = getServerSupabase();
  } catch (e: any) {
    return res && res.status(200).json({ saved: false, error: e?.message });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const { code, event, url, referrer } = req.body || {}
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
      return res.status (200).json ({ saved: false, mock: true });
    }
    const supabase = getServerSupabase ();
    const { error } = await supabase.from ("referral_events").insert ({
      partner_code: String (code).toLowerCase (),
      event: String (event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req.headers["user - agent"] || null,
      ip_address:;
        (req.headers["x - forwarded - for"] as string) ||;
        req.socket.remote_address ||;
        null,
    });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ saved: true });
  } catch (e: any) {
    return res.status (200).json ({ saved: false, error: e?.message });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
