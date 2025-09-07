<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
<<<<<<< HEAD:pages/api/referrals/track.ts
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
<<<<<<< HEAD:pages/api/referrals/track.ts
export default async function handler(
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default async function handler(;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, event, url, referrer } = req.body |{}
  if (!code |!event) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
<<<<<<< HEAD:pages/api/referrals/track.ts
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
<<<<<<< HEAD
=======
=======
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======










>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
  const { code, event, url, referrer } = req && req.body || {};
  if (!code || !event) return res && res.status($1).json({ $2 });
  const usingPlaceholder =
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||"
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ==="
      "placeholder-key";
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
  try {;
    if (usingPlaceholder) {;
      return res && res.status(200).json({ saved: false, mock: true });
    }
    const supabase = getServerSupabase();
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
    const { error } = await supabase && supabase.from("referral_events").insert({;
      partner_code: String(code).toLowerCase();
      event: String(event);
      url: url || null;
      referrer: referrer || null;
      user_agent: req && req.headers["user-agent"] || null;
      ip_address:
        (req && req.headers["x-forwarded-for"] as string) ||;
        req && req.socket.remoteAddress ||;
        null
    });
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ saved: true });
  } catch (e: any) {;
=======
  try {}
    if (usingPlaceholder) {}
      return res && res.status(200).json({ saved: false, mock: true });
    }
    const supabase = getServerSupabase();



"
    const { error } = await supabase && supabase.from("referral_events").insert({}
      partner_code: String(code).toLowerCase(),
      event: String(event),
      url: url || null,
      referrer: referrer || null,"
      user_agent: req && req.headers["user-agent"] || null,
      ip_address:"
        (req && req.headers["x-forwarded-for"] as string) ||
        req && req.socket.remoteAddress ||
        null,
    });"
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ saved: true });

  } catch (e: any) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
    return res && res.status(200).json({ saved: false, error: e?.message });

  }
}
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
=======

  } catch (e: any) {;
    return res.status(200).json({ saved: false, error: e?.message });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
;
  const { code, event, url, referrer } = req.body || {};
  if (!code || !event) return res.status(400).json({ error: 'Missing code or event' });
;
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
;
  try {;
    if (usingPlaceholder) {;
      return res.status(200).json({ saved: false, mock: true })
    }
;
    const supabase = getServerSupabase();
    const { error } = await supabase.from('referral_events').insert({;
      partner_code: String(code).toLowerCase(), event: String(event);
      url: url || null, referrer: referrer || null;
      user_agent: req.headers['user-agent'] || null;
=======



  } catch (e: any) {}
    return res.status(200).json({ saved: false, error: e?.message });

import type { NextApiRequest, NextApiResponse } from 'next';'
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { code, event, url, referrer } = req.body || {};'
  if (!code || !event) return res.status(400).json({ error: 'Missing code or event' });
'
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {}
    if (usingPlaceholder) {}
      return res.status(200).json({ saved: false, mock: true })
    }

    const supabase = getServerSupabase();'
    const { error } = await supabase.from('referral_events').insert({}
      partner_code: String(code).toLowerCase(), event: String(event),
      url: url || null, referrer: referrer || null,'
      user_agent: req.headers['user-agent'] || null,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});
;
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ saved: true })
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
  } catch (e: any) {;
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */;
function handler() {;
  if (return res.status ($1).json ({ $2 })) {
  $2
=======
  } catch (e: any) {}
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { getServerSupabase  } from '../../../utils / supabase / server';
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if (return res.status ($1).json ({ $2 })) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
}
  const { code, event, url, referrer } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {}
  $2;
}
  const using_placeholder =;"
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;"
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;"
      "placeholder - key";
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
<<<<<<< HEAD:pages/api/referrals/track.ts
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
    return res.status(200).json({ saved: false, error: e?.message });
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { getServerSupabase } from '../../../utils/supabase/server';
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
export default async function handler(req, res) {
<<<<<<< HEAD:pages/api/referrals/track.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
  try {
    // Check condition;
if ( {) {
  $2
}
      return res.status (200).json ({ saved: false, mock: true });
    }
    const supabase = getServerSupabase ();
    const { error } = await supabase.from ("referral_events").insert ({;
      partner_code: String (code).toLowerCase ();
      event: String (event);
      url: url || null;
      referrer: referrer || null;
      user_agent: req.headers["user - agent"] || null;
      ip_address:;
        (req.headers["x - forwarded - for"] as string) ||;
        req.socket.remote_address ||;
        null
    });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ saved: true });
<<<<<<< HEAD:pages/api/referrals/track.ts
  } catch (e: any) {
<<<<<<< HEAD
=======
export default async function handler(req, res) {}
  try {};
    // Check condition;
if ( {) {}
  $2;
}
      return res.status (200).json ({ saved: false, mock: true });
    }
    const supabase = getServerSupabase ();"
    const { error } = await supabase.from ("referral_events").insert ({}
      partner_code: String (code).toLowerCase (),
      event: String (event),
      url: url || null,
      referrer: referrer || null,"
      user_agent: req.headers["user - agent"] || null,
      ip_address:;"
        (req.headers["x - forwarded - for"] as string) ||;
        req.socket.remote_address ||;
        null,
    });"
    if (return res.status (500).json ({ error: "Database error" })) {}
  $2;
}
    return res.status (200).json ({ saved: true });
  } catch (e: any) {}
    return res.status (200).json ({ saved: false, error: e?.message });

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts

  }
}

<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
  }
}
=======

=======
=======
  } catch (e: any) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
    return res.status (200).json ({ saved: false, error: e?.message });
=======
  }
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api/referrals/track.ts
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
=======
  } catch (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
    console.error("Error:", error);
=======




  }
}


  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const supabase = getServerSupabase();'
    const { error } = await supabase.from('referral_events').insert({;
      partner_code: String(code).toLowerCase();
      event: String(event);
      url: url || null;
      referrer: referrer || null;'
      user_agent: req.headers['user-agent'] || null,;'
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    return res.status(200).json({ saved: false, error: e?.message });
<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD:pages/api/referrals/track.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts

  }
}

<<<<<<< HEAD:pages/api-disabled/api/referrals/track.ts
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
=======
  }
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api/referrals/track.ts
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts
=======


  }
}






'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/referrals/track.ts
