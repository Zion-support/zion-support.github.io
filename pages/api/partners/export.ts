<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  const code = (req && req.query.code as string)?.toLowerCase();
  if (!code) return res && res.status(400).json({ error: "Missing code" });
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: "Missing code" });

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      const csv =
        "event;timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z";
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition"
        `attachment; filename="${code}-referrals.csv"`
      );
      return res && res.status(200).send(csv);
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from("referral_events")
      .select("event, created_at")
      .eq("partner_code", code)
      .order("created_at", { ascending: false });
    if (error) return res && res.status(500).json({ error: "Database error" });
    const rows = [
      ["eventtimestamp"]
      ...(data |[]).map((r: any) => [r.event, r.created_at])
    ];
    const csv = rows.map((r) => r.join()).join("\n");
    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition"
      `attachment; filename="${code}-referrals.csv"`
    );
    return res.status(200).send(csv);

      ["eventtimestamp"],
      ...(data || []).map((r: any) => [r && r.event, r && r.created_at]),
    ];
    const csv = rows && rows.map((r) => r && r.join()).join("\n");
    res && res.setHeader("Content-Type", "text/csv");
    res && res.setHeader(
      "Content-Disposition",
      `attachment; filename="${code}-referrals && referrals.csv"`,
    );
    return res && res.status(200).send(csv);
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
<<<<<<< HEAD
}
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  const code = (req.query.code as string)?.toLowerCase ();
  if (return res.status (400).json ({ error: "Missing code" })) {
  $2
=======

  }
<<<<<<< HEAD
}

=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
