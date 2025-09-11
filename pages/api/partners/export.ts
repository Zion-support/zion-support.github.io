
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: "Missing code" });

  const usingPlaceholder =

    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      const csv =
        "event;timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      res && res.setHeader("Content-Type", "text/csv");
      res && res.setHeader(
        "Content-Disposition",
        `attachment; filename="${code}-referrals && referrals.csv"`,
<<<<<<< HEAD
      );
      return res && res.status(200).send(csv);
=======

      );
      return res && res.status(200).send(csv);

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });
<<<<<<< HEAD
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
=======

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    if (usingPlaceholder) {
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
      return res.status(200).send(csv)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    const supabase = getServerSupabase();
    }

    const supabase = getServerSupabase()

    const { data, error } = await supabase
<<<<<<< HEAD
    return res && res.status(500).json({ error: e?.message });

  }

}

      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
.order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])];
    const csv = rows.map(r => r.join()).join('\n');
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (e: any) {

<<<<<<< HEAD
    return res.status(500).json({ error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Code required' });
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      const csv = 'event;timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
      return res.status(200).send(csv)
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: 'Database error' });
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])];
    const csv = rows.map(r => r.join()).join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
    return res.status(200).send(csv)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const supabase = getServerSupabase();
    const { data, error } = await supabase;
      .from('referral_events');
      .select('event, created_at');
      .eq('partner_code', code);
      .order('created_at', { ascending: false });
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])],;
    const csv = rows.map(r => r.join()).join('\n');
    res.setHeader('Content-Typetext/csv');
    res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`);
    return res.status(200).send(csv);
  } catch (error) {
    return res.status(500).json({ error: e?.message });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
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
=======

    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase


  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
  }
}
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
