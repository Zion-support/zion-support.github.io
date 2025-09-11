==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;


  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, event, url, referrer } = req.body |{}
  if (!code |!event) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const { error } = await supabase && supabase.from("referral_events").insert({
      partner_code: String(code).toLowerCase(),
      event: String(event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req && req.headers["user-agent"] || null,
      ip_address:
        (req && req.headers["x-forwarded-for"] as string) ||
        req && req.socket.remoteAddress ||
        null,
    });
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ saved: true });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (e: any) {
    return res && res.status(200).json({ saved: false, error: e?.message });

  }
}
  } catch (e: any) {
    return res.status(200).json({ saved: false, error: e?.message });import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, event, url, referrer } = req.body || {};
  if (!code || !event) return res.status(400).json({ error: 'Missing code or event' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ saved: false, mock: true })
    }
    const supabase = getServerSupabase();    const { error } = await supabase.from('referral_events').insert({
      partner_code: String(code).toLowerCase(), event: String(event),
      url: url || null, referrer: referrer || null,
      user_agent: req.headers['user-agent'] || null,
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ saved: true })
  } catch (e: any) {

    return res.status(200).json({ saved: false, error: e?.message });import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
=======    return res.status(200).json({ saved: false, error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { code, event, url, referrer } = req.body || {};
  if (!code || !event) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ saved: false, mock: true })
    }

    const supabase = getServerSupabase();
    const { error } = await supabase.from('referral_events').insert({
      partner_code: String(code).toLowerCase(),
      event: String(event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req.headers['user-agent'] || null,
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null
    });
    if (error) return res.status(500).json({ error: 'Database error' });
    return res.status(200).json({ saved: true })
  } catch (e: any) {
    return res.status(200).json({ saved: false, error: e?.message })
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return res.status (200).json ({ saved: false, error: e?.message });
  }
}
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
=======  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
