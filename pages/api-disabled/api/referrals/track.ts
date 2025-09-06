:pages/api/referrals/track.ts;
if (req && req.method !== "POST") return res && res.status($1).json({ $2 });import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase  } from '../../../utils/supabase/server';
export default async function handler(if (req.method !== "POST") return res.status($1).json({ $2 })const { code, event, url, referrer } = req.body |{}
  if (!code |!event) return res.status($1).json({ $2 })const usingPlaceholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===;
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 })ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
  const { code, event, url, referrer } = req && req.body || {}if (!code || !event) return res && res.status($1).json({ $2 })const usingPlaceholder =;
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||;
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;
      "placeholder-key";
  try {if (usingPlaceholder) {return res && res.status(200).json({ saved: false, mock: true })}
    const supabase = getServerSupabase():pages/api/referrals/track.ts;
    const { error } = await supabase && supabase.from("referral_events").insert({partner_code: String(code).toLowerCase(),event: String(event),url: url || null,referrer: referrer || null,user_agent: req && req.headers["user-agent"] || null,const { error } = await supabase && supabase.from("referral_events").insert({partner_code: String(code).toLowerCase()event: String(event)url: url || null;
      referrer: referrer || null;
      user_agent: req && req.headers["user-agent"] || null;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
      ip_address:;
        (req && req.headers["x-forwarded-for"] as string) ||;
        req && req.socket.remoteAddress ||;
        null;
    })if (error) return res && res.status(500).json({ error: "Database error" })return res && res.status(200).json({ saved: true }):pages/api/referrals/track.ts;
  } catch (e: any) {} catch (e: any) {ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
    return res && res.status(200).json({ saved: false, error: e?.message })}
}
:pages/api/referrals/track.ts;
  } catch (e: any) {return res.status(200).json({ saved: false, error: e?.message })ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { code, event, url, referrer } = req.body || {}if (!code || !event) return res.status(400).json({ error: 'Missing code or event' })const usingPlaceholder  = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';try {if (usingPlaceholder) {return res.status(200).json({ saved: false, mock: true })}const supabase = getServerSupabase()const { error } = await supabase.from('referral_events').insert({partner_code: String(code).toLowerCase(), event: String(event)url: url || null, referrer: referrer || null;
      user_agent: req.headers['user-agent'] || null;
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null})if (error) return res.status(500).json({ error: error.message })return res.status(200).json({ saved: true }):pages/api/referrals/track.ts;
  } catch (e: any) {} catch (e: any) {import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase   } from '../../../utils / supabase / server';
export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status ($1).json ({ $2 })) {$2;
}
  const { code, event, url, referrer } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {$2;
}
  const using_placeholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;
      "placeholder - key";return res.status(200).json({ saved: false, error: e?.message })ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
export default function handler() {res.status(200).json({ message: 'API endpoint' })export default async function handler() {:pages/api/referrals/track.ts;ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
  try {// Check condition;
if ( {) {$2;
}
      return res.status (200).json ({ saved: false, mock: true })}
    const supabase = getServerSupabase ()const { error } = await supabase.from ("referral_events").insert ({partner_code: String (code).toLowerCase ()event: String (event)url: url || null;
      referrer: referrer || null;
      user_agent: req.headers["user - agent"] || null;
      ip_address:;
        (req.headers["x - forwarded - for"] as string) ||;
        req.socket.remote_address ||;
        null;
    })if (return res.status (500).json ({ error: "Database error" })) {$2;
}
    return res.status (200).json ({ saved: true })} catch (e: any) {return res.status (200).json ({ saved: false, error: e?.message }):pages/api/referrals/track.ts;
    return res.status(200).json({ saved: false, error: e?.message })export default async function handler() {if (req.method !== 'POST') return res.status($1).json({$2})const { code, event, url, referrer } = req.body || {}if (!code || !event) return res.status($1).json({$2})const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {if (usingPlaceholder) {return res.status(200).json({ saved: false, mock: true })}const supabase = getServerSupabase()const { error } = await supabase.from('referral_events').insert({partner_code: String(code).toLowerCase(),event: String(event),url: url || null,referrer: referrer || null,user_agent: req.headers['user-agent'] || null,ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null;
    })if (error) return res.status(500).json({ error: 'Database error' })return res.status(200).json({ saved: true })} catch (e: any) {return res.status(200).json({ saved: false, error: e?.message })}
}
    return res.status(200).json({ saved: false, error: e?.message })export default function handler() {res.status(200).json({ message: 'API endpoint' })export default async function handler() {try {if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })const { code, event, url, referrer } = req.body || {}if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })return res.status(200).json({ saved: false, mock: true })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}}
}} catch (error) {}
}} catch (error) {ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
    console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}const supabase = getServerSupabase()const { error } = await supabase.from('referral_events').insert({partner_code: String(code).toLowerCase()event: String(event)url: url || null;
      referrer: referrer || null;
      user_agent: req.headers['user-agent'] || null,ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null})if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })return res.status(200).json({ saved: false, error: e?.message })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" }):pages/api/referrals/track.ts;
  }
}ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;
  }
}
  }
}
:pages/api/referrals/track.ts;
  }
}
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/referrals/track.ts;