
=======


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status($1).json({ $2 });

  const usingPlaceholder =

    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
=======
(process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return res && res.status(200).json({
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  const code = (req.query.code as string)?.toLowerCase ();
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const using_placeholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;
      "placeholder - key";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({

<<<<<<< HEAD
=======
  try {_if (usingPlaceholder) {
      return res.status(200).json({

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        total_signups: 12,
        total_visits: 180,
        total_profile_completions: 7,
        total_job_creations: 5,
        conversion_rate: 7 / 12,
        payout_amount: 210,
<<<<<<< HEAD
<<<<<<< HEAD
=======
currency: "USD",
      });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
<<<<<<< HEAD
        total_signups: 12, total_visits: 180,
        total_profile_completions: 7, total_job_creations: 5,
        conversion_rate: 7 / 12, payout_amount: 210,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        currency: 'USD'})

    }
    const supabase = getServerSupabase();
<<<<<<< HEAD

=======
        currency: "USD",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });


    }

=======

=======
        : 0,
      payout_amount: total_profile_completions * 50,
      currency: "USD",
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
=======
      if (error) return res && res.status($1).json({ $2 });
    }
    const supabase = getServerSupabase ();
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
    if (req.method === 'GET') {
      return res.status(200).json({
<<<<<<< HEAD
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        total_signups: 12,
        total_visits: 180,
        total_profile_completions: 7,
        total_job_creations: 5,
        conversion_rate: 7 / 12,
        payout_amount: 210,
        currency: 'USD'})
    }
    const supabase = getServerSupabase();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const events = ["visitsignupprofile_completedjob_createdhire"] as const;
    const counts: Record < string, number> = {}
    for (const ev of events) {
      const { count, error } = await supabase;
        .from ("referral_events");
        .select ("*", { count: "exact", head: true });
        .eq ("partner_code", code);
        .eq ("event", ev);
      if (return res.status ($1).json ({ $2 })) {
  $2
}
      counts[ev] = count || 0;
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const events = ['visitsignupprofile_completedjob_createdhire'] as const;
    const counts: Record<string, number> = {};
    for (const ev of events) {
      const { count, error } = await supabase
        .from('referral_events')
        .select('*', { count: 'exact', head: true })
        .eq('partner_code', code)
        .eq('event', ev);
      if (error) return res.status(500).json({ error: error.message });
      counts[ev] = count || 0
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
<<<<<<< HEAD
    return res && res.status(200).json({
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const total_signups = counts["signup"] || 0;
    const total_visits = counts["visit"] || 0;
    const total_profile_completions = counts["profile_completed"] || 0;
    const total_job_creations = counts["job_created"] || 0;

    const payout_amount =;
      total_profile_completions * 30 + total_job_creations * 50;
    return res.status (200).json ({
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      total_signups,
      total_visits,
      total_profile_completions,
<<<<<<< HEAD
    total_job_creations,
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0,
      payout_amount,
      currency: 'USD'

=======
      total_job_creations,


      conversion_rate: total_signups
        ? total_profile_completions / total_signups
        : 0
      payout_amount: total_profile_completions * 50
      currency: "USD"
=======
      conversion_rate: total_signups;
=======
      total_signups,
      total_visits,
      total_profile_completions,
      total_job_creations,
conversion_rate: total_signups;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        ? total_profile_completions / total_signups;
        : 0,
      payout_amount: total_profile_completions * 50,
      currency: "USD",
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    });

  } catch (e: any) {

  }
<<<<<<< HEAD

  }
}

=======
}
=======
=======
=======
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
    for (const ev of events) {
      const { count, error } = await supabase
        .from('referral_events')
        .select('*', { count: 'exact', head: true })
        .eq('partner_code', code)
        .eq('event', ev);
      if (error) return res.status($1).json({$2});
      counts[ev] = count || 0
    }

    const total_signups = counts['signup'] || 0;
    const total_visits = counts['visit'] || 0;
    const total_profile_completions = counts['profile_completed'] || 0;
    const total_job_creations = counts['job_created'] || 0;
    const payout_amount = total_profile_completions * 30 + total_job_creations * 50;
    return res.status(200).json({
      total_signups,
    total_visits,
      total_profile_completions,
    total_job_creations,
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0,
      payout_amount,
      currency: 'USD'
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    });
  } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0, payout_amount,
      currency: 'USD'})
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })

=======

    return res.status(500).json({ error: e?.message })

  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
    return res.status (500).json ({ error: e?.message });

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return res.status(500).json({ error: e?.message });
    return res.status(500).json({ error: e?.message })
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
