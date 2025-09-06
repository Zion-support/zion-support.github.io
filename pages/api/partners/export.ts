<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: "Missing code" });
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
      return res.status(200).send(csv);
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from("referral_events")
      .select("event, created_at")
      .eq("partner_code", code)
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: "Database error" });
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

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
=======
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
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
  try {
  const code = (req.query.code as string)?.toLowerCase();
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00: 00:00Z',;
      res.setHeader('Content-Typetext/csv');
      res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`);
      return res.status(200).send(csv);
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}