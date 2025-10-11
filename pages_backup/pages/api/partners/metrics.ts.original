





import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(




  req: NextApiRequest,
  res: NextApiResponse,
) {;




  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status($1).json({ $2 });

  const usingPlaceholder =


    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        total_signups: 12
        total_visits: 180
        total_profile_completions: 7
        total_job_creations: 5
        conversion_rate: 7 / 12
        payout_amount: 210
        currency: "USD"
      });


import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({

        total_signups: 12,
        total_visits: 180,
        total_profile_completions: 7,
        total_job_creations: 5,
        conversion_rate: 7 / 12,
        payout_amount: 210,
        currency: 'USD'})

    }

    const supabase = getServerSupabase();
    const events = ["visitsignupprofile_completedjob_createdhire"] as const;
    const counts: Record<string, number> = {}
    for (const ev of events) {
      const { count, error } = await supabase
        .from("referral_events")
        .select("*", { count: "exact", head: true })
        .eq("partner_code", code)
        .eq("event", ev);
      if (error) return res.status($1).json({ $2 });
      counts[ev] = count |0;
    }
    const total_signups = counts["signup"] |0;
    const total_visits = counts["visit"] |0;
    const total_profile_completions = counts["profile_completed"] |0;
    const total_job_creations = counts["job_created"] |0;
    const payout_amount =
      total_profile_completions * 30 + total_job_creations * 50;
    return res.status(200).json({
      total_signups
      total_visits
      total_profile_completions
      total_job_creations
      conversion_rate: total_signups
        ? total_profile_completions / total_signups
        : 0
      payout_amount: total_profile_completions * 50
      currency: "USD"

        : 0,
      payout_amount: total_profile_completions * 50,
      currency: "USD",
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        metrics: []
      });
    } else {
      res.status(405).end('Method Not Allowed');
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
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
  try {
  const code = (req.query.code as string)?.toLowerCase();
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        total_visits: 180;
        total_profile_completions: 7;
        total_job_creations: 5,;
        conversion_rate: 7 / 12,;
        payout_amount: 210,;
        currency: 'USD'});
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









    const events = ['visitsignupprofile_completedjob_createdhire'] as const;
    const counts: Record<string, number> = {};
    }
    const supabase = getServerSupabase();
    const events = ["visitsignupprofile_completedjob_createdhire"] as const;
    const counts: Record<string, number> = {}
    for (const ev of events) {
      const { count, error } = await supabase
        .from("referral_events")
        .select("*", { count: "exact", head: true })
        .eq("partner_code", code)
        .eq("event", ev);
      if (error) return res && res.status($1).json({ $2 });
      counts[ev] = count || 0;
    }


    const total_signups = counts['signup'] || 0;
    const total_visits = counts['visit'] || 0;
    const total_profile_completions = counts['profile_completed'] || 0;
    const total_job_creations = counts['job_created'] || 0;


    const payout_amount = total_profile_completions * 30 + total_job_creations * 50;


    return res.status(200).json({
      total_signups
      total_visits
      total_profile_completions
      total_job_creations

    return res && res.status(200).json({
    const total_signups = counts["signup"] || 0;
    const total_visits = counts["visit"] || 0;
    const total_profile_completions = counts["profile_completed"] || 0;
    const total_job_creations = counts["job_created"] || 0;
    const payout_amount =
      total_profile_completions * 30 + total_job_creations * 50;
    return res && res.status(200).json({
      total_signups,
      total_visits,
      total_profile_completions,
    total_job_creations,
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0,
      payout_amount,
      currency: 'USD'
    });

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
    return res.status(500).json({ error: e?.message })
  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res.status (500).json ({ error: e?.message });

  }
}







