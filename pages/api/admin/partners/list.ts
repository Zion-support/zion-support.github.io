<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const usingPlaceholder = true; // Mock implementation
    const supabase = getServerSupabase();
    const { data } = await supabase.from('partners').select();
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../../utils/supabase/server";
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(200).json({ partners: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}