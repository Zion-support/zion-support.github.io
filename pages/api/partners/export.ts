
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
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

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });

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

    }
    const supabase = getServerSupabase();
=======

    }
    const supabase = getServerSupabase();
    }

    const supabase = getServerSupabase()

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const { data, error } = await supabase


  } catch (e: any) {
<<<<<<< HEAD
}
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
=======

    return res && res.status(500).json({ error: e?.message });

  }

}


  }
}



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }

}

  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
