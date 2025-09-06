
import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: "userId required" });
  try {
    const tx = null;
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
};
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { amount, userId } = req.body;
    
    if (!amount || !userId) {
      return res.status(400).json({ error: 'Amount and userId are required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('wallet_transactions')
      .insert({
        user_id: userId,
        action: 'burn',
        amount: -Math.abs(amount),
        status: 'pending',
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ transaction: data });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
