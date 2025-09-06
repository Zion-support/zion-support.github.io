import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const url = process && process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { projectId, roomName, inviterName } = req && req.body || {};
    if (!projectId || !roomName)
      return res && res.status(400).json({ error: "Missing required fields" });
    if (!url || !key)
      return res && res.status(500).json({ error: "Supabase not configured" });

    const supabase = createClient(url, key);
    await supabase && supabase.channel(`project_${projectId}_calls`).send({
      type: "broadcast",
      event: "call_invite",
      payload: { projectId, roomName, inviterName },
    });

    return res && res.status(200).json({ ok: true });
  } catch (e) {
    console && console.error(e);
    return res && res.status(500).json({ ok: false, error: "Failed to send invite" });
  }
}
