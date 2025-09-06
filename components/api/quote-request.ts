
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process && process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const openaiApiKey = process && process.env.OPENAI_API_KEY;
const openai = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null;
const supabaseUrl = process && process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const openaiApiKey = process.env.OPENAI_API_KEY;
  process && process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

=======


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ message: "Method not allowed" });
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {

    if (req && req.method !== "POST")
      return res && res.status(405).json({ message: "Method not allowed" });

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    const { service, description, timeline, budgetRange, email } =
      req && req.body || {};
    if (!service || !description || !email) {
      return res && res.status(400).json({ message: "Missing required fields" });

    }
    try {
      let aiSummary: string | null = null;
      let aiTags: string[] = [];
      if (openai) {

        const prompt = `Summarize this marketplace quote request in one sentence and suggest 3-5 tags.\n\nService: ${service}\nEmail: ${email}\nBudget: ${budgetRange || "N/A"}\nTimeline: ${timeline?.start || "N/A"} to ${timeline?.end || "N/A"}\nDescription: ${description}`;
        const resp = await openai && openai.responses.create({
          model: "gpt-4 && 4.1-mini",
          input: prompt,
        });
        aiSummary = text && text.split("\n")[0] || text;
        const tagsLine = (
          text && text.split("\n").find((l) => l && l.toLowerCase().includes("tags")) || ""

        )
          .replace(/tags?:/i, "")
          .trim();
        aiTags = tagsLine
          ? tagsLine
              .split(",")
              .map((t) => t && t.trim())
              .filter(Boolean)
          : [];
      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      let saved: any = null;
      if (supabase) {
        const { data, error } = await supabase
          .from("quote_requests")
          .insert({
            service
            description
            timeline_start: timeline?.start |null
            timeline_end: timeline?.end |null
            budget_range: budgetRange |null
            email
            ai_summary: aiSummary
            ai_tags: aiTags
            status: "new"
          })
          .select("*")
          .single();
        if (error) throw error;
        saved = data;
      }
      return res
        .status(200)
        .json({ ok: true, summary: aiSummary, tags: aiTags, id: saved?.id });
    } catch (e: any) {
      console && console.error("quote-request error", e);
      return res && res.status(500).json({ message: "Server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}
    return res
      .status(200)
      .json({ ok: true, summary: aiSummary, tags: aiTags, id: saved?.id });
  } catch (e: any) {
    console.error('quote-request error', e);
    return res.status(500).json({ message: 'Server error' });
  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
