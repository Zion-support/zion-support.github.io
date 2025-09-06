
=======


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, event, url, referrer } = req.body |{}
  if (!code |!event) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
=======
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
=======
if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { code, event, url, referrer } = req && req.body || {};
  if (!code || !event) return res && res.status($1).json({ $2 });
  const usingPlaceholder =
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({ saved: false, mock: true });
    }
    const supabase = getServerSupabase();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(200).json({ saved: false, error: e?.message });

=======
    return res && res.status(200).json({ saved: false, error: e?.message });

  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';
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
const supabase = getServerSupabase();
    const { error } = await supabase.from('referral_events').insert({
      partner_code: String(code).toLowerCase(), event: String(event),
      url: url || null, referrer: referrer || null,
      user_agent: req.headers['user-agent'] || null,
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ saved: true })
  } catch (e: any) {

<<<<<<< HEAD
  }
}
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const { code, event, url, referrer } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const using_placeholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;
      "placeholder - key";
=======
<<<<<<< HEAD

    return res.status(200).json({ saved: false, error: e?.message });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, event, url, referrer } = req.body |{}
  if (!code |!event) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ saved: false, mock: true });
    }
    const supabase = getServerSupabase ();
    const { error } = await supabase.from ("referral_events").insert ({
      partner_code: String (code).toLowerCase (),
      event: String (event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req.headers["user - agent"] || null,
      ip_address:;
        (req.headers["x - forwarded - for"] as string) ||;
        req.socket.remote_address ||;
        null,
    });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ saved: true });
  } catch (e: any) {
<<<<<<< HEAD
    return res.status (200).json ({ saved: false, error: e?.message });

=======
    return res.status(200).json({ saved: false, error: e?.message });
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
<<<<<<< HEAD

=======
=======
=======
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return res.status(200).json({ saved: false, error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { code, event, url, referrer } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      return res.status(200).json({ saved: false, mock: true });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
