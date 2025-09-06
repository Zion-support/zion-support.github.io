<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function handler(

  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req.body |{}
  if (!name |!desired_code) return res.status($1).json({ $2 });
=======
if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req && req.body || {};
  if (!name || !desired_code) return res && res.status($1).json({ $2 });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const code = sanitizeCode(desired_code);
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =
<<<<<<< HEAD
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
=======
    (process && process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res
        .status(200)
        .json({ ok: true, code, status: "pending", mock: true });
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { getServerSupabase } from '../../../utils/supabase/server';
function sanitizeCode(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!name || !desired_code) return res.status(400).json({ error: 'Missing required fields' });
  const code = sanitizeCode(desired_code);
  if (!code) return res.status(400).json({ error: 'Invalid code' });
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from("partners")
      .select("code")
      .eq("code", code)
      .maybeSingle();
<<<<<<< HEAD

<<<<<<< HEAD
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });

import { getServerSupabase } from '../../../utils/supabase/server';
function sanitizeCode(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
=======

=======
    if (existingErr) return res.status(500).json({ error: existingErr.message });
    if (existing) return res.status(409).json({ error: 'Code already taken' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (existingErr) return res && res.status($1).json({ $2 });
    if (existing) return res && res.status($1).json({ $2 });
    const { error } = await supabase && supabase.from("partners").insert({
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../utils / supabase / server';
function sanitize_code (input: string): string {
  return input;
    .toLowerCase ();
    .replace (/[^a - z0 - 9-]/g, "-");
    .replace (/-+/g, "-");
    .replace (/^-|-$/g, "");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const { name, niche, socials, payout_method, desired_code } = req.body || {}
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const code = sanitize_code (desired_code);
  if (return res.status ($1).json ({ $2 })) {
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
      return res;
        .status (200);
        .json ({ ok: true, code, status: "pending", mock: true });
    }
    const supabase = getServerSupabase ();
    const { data: existing, error: existing_err } = await supabase;
      .from ("partners");
      .select ("code");
      .eq ("code", code);
      .maybe_single ();
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const { error } = await supabase.from ("partners").insert ({
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      code,
      name,

  }
}
=======
      code,
      name,
      niche: niche || null, socials: socials || null,
      payout_method: payout_method || null, status: 'pending',
      commission_rate: 0.15});
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true, code, status: 'pending' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ ok: true, code, status: "pending" });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });

    const {_data: existing, _error: existingErr} = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle(),

    if (existingErr) return res.status(500).json({ error: existingErr.message }),
    if (existing) return res.status(409).json({ error: 'Code already taken' }),

    const { error } = await supabase.from('partners').insert({
      code,
      name,
      niche: niche || null,
      socials: socials || null,
      payout_method: payout_method || null,
      status: 'pending',
      commission_rate: 0.15}),

    if (error) return res.status(500).json({ error: error.message }),

    return res.status(200).json({ ok: true, code, status: 'pending' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req.body |{}
  if (!name |!desired_code) return res.status($1).json({ $2 });
  const code = sanitizeCode(desired_code);
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res
        .status(200)
        .json({ ok: true, code, status: "pending", mock: true });
    }
    const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from("partners")
      .select("code")
      .eq("code", code)
      .maybeSingle();
    if (existingErr) return res.status($1).json({ $2 });
    if (existing) return res.status($1).json({ $2 });
    const { error } = await supabase.from("partners").insert({
      code
      name
      niche: niche |null
      socials: socials |null
      payout_method: payout_method |null
      status: "pending"
      commission_rate: 0.15
    });
    if (error) return res.status(500).json({ error: "Database error" });
    return res.status(200).json({ ok: true, code, status: "pending" });

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  if (req.method === 'POST') {
    res.status(201).json({ message: 'Partner registered' });
  } else {
    res.status(405).end('Method Not Allowed');
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
function sanitizeCode(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!name || !desired_code) return res.status($1).json({$2});
  const code = sanitizeCode(desired_code);
  if (!code) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true })
    }

    const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle();
    if (existingErr) return res.status($1).json({$2});
    if (existing) return res.status($1).json({$2});
    const { error } = await supabase.from('partners').insert({
      code,
    name,
      niche: niche || null,
      socials: socials || null,
      payout_method: payout_method || null,
      status: 'pending',
      commission_rate: 0.15
    });
    if (error) return res.status(500).json({ error: 'Database error' });
    return res.status(200).json({ ok: true, code, status: 'pending' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
<<<<<<< HEAD
<<<<<<< HEAD

  }
<<<<<<< HEAD

  }
}

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
=======
<<<<<<< HEAD
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
=======


  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
