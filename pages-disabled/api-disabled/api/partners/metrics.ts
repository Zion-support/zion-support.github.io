
<<<<<<< HEAD:pages/api-disabled/api/partners/metrics.ts
<<<<<<< HEAD:pages/api/partners/metrics.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({

    }
<<<<<<< HEAD
    const supabase = getServerSupabase();

      });


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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        : 0,
      payout_amount: total_profile_completions * 50,
      currency: "USD",
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(;
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status($1).json({ $2 });
;
  const usingPlaceholder =

    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {;
    if (usingPlaceholder) {;
      return res.status(200).json({;
        total_signups: 12;
        total_visits: 180;
        total_profile_completions: 7;
        total_job_creations: 5;
        conversion_rate: 7 / 12;
        payout_amount: 210;
        currency: "USD"
      });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    // Check condition;
if ( {) {
  $2
}
      return res.status (200).json ({;

        total_signups: 12;
        total_visits: 180;
        total_profile_completions: 7;
        total_job_creations: 5;
        conversion_rate: 7 / 12;
        payout_amount: 210;
        currency: 'USD'})
    }
        : 0;
      payout_amount: total_profile_completions * 50;
      currency: "USD"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/partners/metrics.ts
    });
  } catch (e: any) {;
    return res.status(500).json({ error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {;
  try {;
    if (req.method === 'GET') {;
      return res.status(200).json({;
        metrics: []
      });
    } else {;
      res.status(405).end('Method Not Allowed');
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    res.status(500).json({ error: 'Internal server error' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {;
  try {;
  const code = (req.query.code as string)?.toLowerCase();
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        total_visits: 180;
        total_profile_completions: 7;
        total_job_creations: 5,;
        conversion_rate: 7 / 12,;
        payout_amount: 210,;
        currency: 'USD'});
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const supabase = getServerSupabase();
<<<<<<< HEAD:pages/api/partners/metrics.ts
=======

      });

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({

=======

  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });'
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {}
    if (usingPlaceholder) {}
      return res.status(200).json({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/partners/metrics.ts
        total_signups: 12, total_visits: 180,
        total_profile_completions: 7, total_job_creations: 5,
        conversion_rate: 7 / 12, payout_amount: 210,'
        currency: 'USD'})
    }
    const supabase = getServerSupabase();
      if (error) return res && res.status($1).json({ $2 });
    }
    const supabase = getServerSupabase ();

    }
    const supabase = getServerSupabase();


    const events = ["visitsignupprofile_completedjob_createdhire"] as const;
    const counts: Record < string, number> = {}
    for (const ev of events) {}
      const { count, error } = await supabase;"
        .from ("referral_events");"
        .select ("*", { count: "exact", head: true });"
        .eq ("partner_code", code);"
        .eq ("event", ev);
      if (return res.status ($1).json ({ $2 })) {}
  $2;
}
      counts[ev] = count || 0;
    }
<<<<<<< HEAD:pages/api-disabled/api/partners/metrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/partners/metrics.ts
    const events = ['visitsignupprofile_completedjob_createdhire'] as const;
    const counts: Record<string, number> = {};
;
    for (const ev of events) {;
      const { count, error } = await supabase
        .from('referral_events')
        .select('*', { count: 'exact', head: true })
        .eq('partner_code', code)
=======
'
    const events = ['visitsignupprofile_completedjob_createdhire'] as const;
    const counts: Record<string, number> = {};

    for (const ev of events) {}
      const { count, error } = await supabase'
        .from('referral_events')'
        .select('*', { count: 'exact', head: true })'
        .eq('partner_code', code)'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/partners/metrics.ts
        .eq('event', ev);
      if (error) return res.status(500).json({ error: error.message });
      counts[ev] = count || 0;
    }'
    const total_signups = counts['signup'] || 0;'
    const total_visits = counts['visit'] || 0;'
    const total_profile_completions = counts['profile_completed'] || 0;'
    const total_job_creations = counts['job_created'] || 0;
<<<<<<< HEAD:pages/api-disabled/api/partners/metrics.ts
<<<<<<< HEAD:pages/api/partners/metrics.ts
    return res.status(200).json({
<<<<<<< HEAD
      total_signups,
    total_visits,
      total_profile_completions,
    total_job_creations,
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0,
      payout_amount,
      currency: 'USD'

    });
  } catch (e: any) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      total_signups
      total_visits
      total_profile_completions
      total_job_creations
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    return res.status(200).json({;
=======
    return res.status(200).json({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/partners/metrics.ts
      total_signups;
      total_visits;
      total_profile_completions;
      total_job_creations;
<<<<<<< HEAD:pages/api-disabled/api/partners/metrics.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/partners/metrics.ts
    const total_signups = counts["signup"] || 0;
    const total_visits = counts["visit"] || 0;
    const total_profile_completions = counts["profile_completed"] || 0;
    const total_job_creations = counts["job_created"] || 0;
;
    const payout_amount =;
      total_profile_completions * 30 + total_job_creations * 50;
    return res.status (200).json ({;

      total_signups;
      total_visits;
      total_profile_completions;
    total_job_creations;
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0;
      payout_amount;
      currency: 'USD'
    });

  } catch (e: any) {;
    return res.status(500).json({ error: e?.message });
    return res.status(500).json({ error: e?.message })
  }
}
<<<<<<< HEAD
=======
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
    return res.status (500).json ({ error: e?.message });
<<<<<<< HEAD:pages/api/partners/metrics.ts
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }
}

  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/partners/metrics.ts

  }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
<<<<<<< HEAD:pages/api/partners/metrics.ts
=======

      total_signups,
      total_visits,
      total_profile_completions,
      total_job_creations,


      conversion_rate: total_signups
        ? total_profile_completions / total_signups
        : 0
      payout_amount: total_profile_completions * 50
      currency: "USD"

    });

  } catch (e: any) {

  }
}

  }
}
    return res.status (500).json ({ error: e?.message });


  }

}

  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/partners/metrics.ts
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/partners/metrics.ts
