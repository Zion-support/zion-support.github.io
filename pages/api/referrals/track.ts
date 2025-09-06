
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, event, url, referrer } = req.body |{}
  if (!code |!event) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({ saved: false, mock: true });
    }
    const supabase = getServerSupabase();
    return res.status(200).json({ saved: false, error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
  try {
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const supabase = getServerSupabase();
    const { error } = await supabase.from('referral_events').insert({;
      partner_code: String(code).toLowerCase();
      event: String(event);
      url: url || null;
      referrer: referrer || null;
      user_agent: req.headers['user-agent'] || null,;
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    return res.status(200).json({ saved: false, error: e?.message });
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
  }
}
