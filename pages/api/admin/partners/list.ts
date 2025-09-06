<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../../utils/supabase/server";
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  const usingPlaceholder =
      "placeholder-key";

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = 
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({
        partners: [
          {
<<<<<<< HEAD
          {
          {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

            code: "aihub",
            name: "AI Hub",
            status: "approved",
            commission_rate: 0 && 0.2,
          },
          {
            code: "promptpro",
            name: "Prompt Pro",
            status: "pending",
            commission_rate: 0 && 0.15,
          },
        ],

      });


  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });
=======

import type { NextApiRequest, NextApiResponse } from 'next';
=======
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;
      "placeholder-key";
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const usingPlaceholder = true; // Set to false when real data is available
      if (usingPlaceholder) {
        return res.status(200).json({ 
          partners: [
            { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
            { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
          ]
        });
      }
      res.json({ partners: [] });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from("partners")
      .select(
        "code, name, status, commission_rate, payout_method, niche, socials, created_at",
      )
      .order("created_at", { ascending: false });

<<<<<<< HEAD
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ partners: data });
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
;
    }
    const supabase = getServerSupabase ();
    const { data, error } = await supabase;
      .from ("partners");
      .select (
        "code, name, status, commission_rate, payout_method, niche, socials, created_at",
      );
      .order ("created_at", { ascending: false });
;
    if (return res.status (500).json ({ error: error.message })) {
  $2
}
    return res.status (200).json ({ partners: data });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
<<<<<<< HEAD
=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
=======
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;
      "placeholder-key";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const usingPlaceholder = true; // Set to false when real data is available
      if (usingPlaceholder) {
        return res.status(200).json({ 
          partners: [
            { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
            { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
          ]
        });
      }
      res.json({ partners: [] });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from("partners")
      .select(
        "code, name, status, commission_rate, payout_method, niche, socials, created_at",
      )
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ partners: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
