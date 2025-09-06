<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  if (req.method === 'POST') {
    res.status(201).json({ message: 'Partner registered' });
  } else {
    res.status(405).end('Method Not Allowed');
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
function sanitizeCode(input: string): string {;
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
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
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true });
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
    const { data: existing, error: existingErr } = await supabase;
      .from('partners');
      .select('code');
      .eq('code', code);
      .maybeSingle(),;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      name,;
      niche: niche || null,;
      socials: socials || null,;
      payout_method: payout_method || null,;
      status: 'pending',;
      commission_rate: 0.15});
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    return res.status(200).json({ ok: true, code, status: 'pending' });
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
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

function generatePartnerCode(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, company } = req.body;
    
    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const partnerCode = generatePartnerCode(name);
    const supabase = getServerSupabase();

    const { data, error } = await supabase
      .from('partners')
      .insert({
        name,
        email,
        company,
        partner_code: partnerCode,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ 
      success: true, 
      partner: data,
      partnerCode 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Registration failed' });
>>>>>>> main
  }
}