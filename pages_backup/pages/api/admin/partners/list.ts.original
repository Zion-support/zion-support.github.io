








import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../../utils/supabase/server";
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  const usingPlaceholder =




  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({
        partners: [
          {
            code: "aihub"
            name: "AI Hub"
            status: "approved"
            commission_rate: 0.2
          }
          {
            code: "promptpro"
            name: "Prompt Pro"
            status: "pending"
            commission_rate: 0.15
          }
        ]
      });
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from("partners")
      .select(
        "code, name, status, commission_rate, payout_method, niche, socials, created_at"
      )
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ partners: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';

          {

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




import type { NextApiRequest, NextApiResponse } from 'next';




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


  }
}


