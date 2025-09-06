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
    const { amount, userId, reward } = req.body;

    if (!amount || !userId || !reward) {
      return res
        .status(400)
        .json({ error: "Amount, userId, and reward are required" });
    }

    const supabase = getServerSupabase();

    const { data, error } = await supabase
      .from("wallet_transactions")
      .insert({
        user_id: userId,
        action: "redeem",
        amount: -Math.abs(amount),
        reward,
        status: "pending",
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
