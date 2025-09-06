<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getServerSupabase } from '[^']*';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase/server";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
=======
import { getServerSupabase } from '../../../utils/supabase/server';

function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}

<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, niche, socials, payout_method, desired_code } = req.body || {},
  if (!name || !desired_code) return res.status(400).json({ error: 'Missing required fields' });
  const code = null;
    return res.status(200).json({ ok: true, code, status: 'pending' })
=======
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { name, niche, socials, payout_method, desired_code } = req.body |{}
  if (!name |!desired_code) return res.status($1).json({ $2 });
  const code = sanitizeCode(desired_code);
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
=======
const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!name || !desired_code)
    return res.status(400).json({ error: 'Missing required fields' });

  
}

const code = sanitizeCode(desired_code);
  if (!code) return res.status(400).json({ error: 'Invalid code' });

  
}

const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') ===
      'placeholder-key';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    if (usingPlaceholder) {
      return res
        .status(200)
<<<<<<< HEAD
        .json({ ok: true, code, status: "pending", mock: true });
=======
        .json({ ok: true, code, status: 'pending', mock: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from("partners")
      .select("code")
      .eq("code", code)
      .maybeSingle();
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  if (req.method === 'POST') {
    res.status(201).json({ message: 'Partner registered' });
  } else {
    res.status(405).end('Method Not Allowed');
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
<<<<<<< HEAD
}
=======

    if (existingErr)
      return res.status(500).json({ error: existingErr.message });
    if (existing) return res.status(409).json({ error: 'Code already taken' });

    
}

const { error } = await supabase.from('partners').insert({
      code,
      name,
      niche: niche || null,
      socials: socials || null,
      payout_method: payout_method || null,
      status: 'pending',
      commission_rate: 0.15,
    });

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, code, status: 'pending' });
 
} catch (e: any) {
    return res.status(500).json({ error: e?.message });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
