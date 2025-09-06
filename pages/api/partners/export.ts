<<<<<<< HEAD

=======


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: "Missing code" });

  const usingPlaceholder =

    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===

      "placeholder-key";
  try {
    if (usingPlaceholder) {
      const csv =
        "event;timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z";

<<<<<<< HEAD
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });

=======
      res && res.setHeader("Content-Type", "text/csv");
      res && res.setHeader(
        "Content-Disposition",
        `attachment; filename="${code}-referrals && referrals.csv"`,

      );
      return res && res.status(200).send(csv);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
      return res.status(200).send(csv)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase


  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message })

  }

  }
}

=======
    return res && res.status(500).json({ error: e?.message });

  }

}

=======
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  const code = (req.query.code as string)?.toLowerCase ();
  if (return res.status (400).json ({ error: "Missing code" })) {
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
      const csv =;
        "event;timestamp\nvisit, 2025 - 01 - 01T00:00:00Z\nsignup, 2025 - 01 - 02T00:00:00Z";
      res.set_header ("Content - Type", "text / csv");
      res.set_header (
        "Content - Disposition",
        `attachment; filename="${code}-referrals.csv"`,
      );
      return res.status (200).send (csv);
    }
    const supabase = getServerSupabase ();
    const { data, error } = await supabase;
      .from ("referral_events");
      .select ("event, created_at");
      .eq ("partner_code", code);
      .order ("created_at", { ascending: false });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    const rows = [;
      ["eventtimestamp"],
      ...(data || []).map ((r: any) => [r.event, r.created_at]),
    ];
    const csv = rows.map ((r) => r.join ()).join ("\n");
    res.set_header ("Content - Type", "text / csv");
    res.set_header (
      "Content - Disposition",
      `attachment; filename="${code}-referrals.csv"`,
    );
    return res.status (200).send (csv);
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
