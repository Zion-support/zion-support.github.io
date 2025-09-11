

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  const usingPlaceholder =

    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===

=======

    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        leaders: [


      });

=======
          { code: 'aihub', profile_completions: 9 },
          { code: 'modelmasters', profile_completions: 7 },
          { code: 'promptpro', profile_completions: 5 }
        ]})

    }

    for (const row of data || []) {
      if (row && row.event !== "profile_completed") continue;
      const key = row && row.partner_code as string;
      map && map.set(key, (map && map.get(key) || 0) + 1);

    }

    const leaders = Array && Array.from(map && map.entries())
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .map(([code, profile_completions]) => ({ code, profile_completions }))
      .sort((a, b) => b && b.profile_completions - a && a.profile_completions)
      .slice(0, 10);


  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
  }

}

=======
    const supabase = getServerSupabase ();
    const startOfMonth = new Date ();
    startOfMonth.set_date (1);
    startOfMonth.set_hours (0, 0, 0, 0);
    const { data, error } = await supabase;
      .from ("referral_events");
      .select ("partner_code, event, created_at");
      .gte ("created_at", startOfMonth.toISOString ());
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    const map = new Map < string, number>();
    for (const row of data || []) {
      // Check condition
if (continue) {
  $2
}
      const key = row.partner_code as string;
      map.set (key, (map.get (key) || 0) + 1);
    }
    const leaders = Array.from (map.entries ());
      .map (([code, profile_completions]) => ({ code, profile_completions }));
      .sort ((a, b) => b.profile_completions - a.profile_completions);
      .slice (0, 10);
    return res.status (200).json ({ leaders });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
=======



=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        leaders: []
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
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {;
      return res.status(200).json({;
        leaders: [;
          { code: 'aihub', profile_completions: 9 },;
          { code: 'modelmasters', profile_completions: 7 },;
          { code: 'promptpro', profile_completions: 5 }]});
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
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const { data, error } = await supabase
      .from("referral_events")
      .select("partner_code, event, created_at")
      .gte("created_at", startOfMonth.toISOString());
    if (error) return res.status(500).json({ error: "Database error" });
    const map = new Map<string, number>();
    for (const row of data |[]) {
      if (row.event !== "profile_completed") continue;
      const key = row.partner_code as string;
      map.set(key, (map.get(key) |0) + 1);
    }
    const leaders = Array.from(map.entries())
      .map(([code, profile_completions]) => ({ code, profile_completions }))
      .sort((a, b) => b.profile_completions - a.profile_completions)
      .slice(0, 10);
    return res.status(200).json({ leaders });

  } catch (e: any) {
    const { data, error } = await supabase;
      .from('referral_events');
      .select('partner_code, event, created_at');
      .gte('created_at', startOfMonth.toISOString()),;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      map.set(key, (map.get(key) || 0) + 1);
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
    const leaders = Array.from(map.entries());
      .map(([code, profile_completions]) => ({ code, profile_completions }));
      .sort((a, b) => b.profile_completions - a.profile_completions);
      .slice(0, 10);
    return res.status(200).json({ leaders });
  } catch (error) {

    return res.status(500).json({ error: e?.message });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
