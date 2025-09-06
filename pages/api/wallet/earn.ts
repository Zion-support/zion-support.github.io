import { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../utils/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { amount, userId, reason } = req.body;

    if (!amount || !userId) {
      return res.status(400).json({ error: "Amount and userId are required" });
    }

    const supabase = getServerSupabase();

    const { data, error } = await supabase
      .from("wallet_transactions")
      .insert({
        user_id: userId,
        action: "earn",
        amount: Math.abs(amount),
        reason: reason || "Earned tokens",
        status: "completed",
        created_at: new Date().toISOString(),
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
