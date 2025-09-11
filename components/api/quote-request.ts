
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";


const supabaseUrl = process && process.env.NEXT_PUBLIC_SUPABASE_URL;
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { service, description, timeline, budgetRange, email } = req.body || {};
  if (!service || !description || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

}
import type { NextApiRequest, NextApiResponse } from './next';
import { create_client  } from '@supabase / supabase - js';
import OpenAI from './openai';
;
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabase_key =;
  process.env.SUPABASE_SERVICE_ROLE_KEY ||;
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =;
  supabase_url && supabase_key ? create_client (supabase_url, supabase_key) : null;
const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = openaiApiKey ? new OpenAI ({ api_key: openaiApiKey }) : null;
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabase_key =;
  process.env.SUPABASE_SERVICE_ROLE_KEY ||;
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =;
  supabase_url && supabase_key ? create_client (supabase_url, supabase_key) : null;
;
const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = openaiApiKey ? new OpenAI ({ api_key: openaiApiKey }) : null;
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ message: "Method not allowed" })) {
  $2
}
  export default async /**
 * handler - Function description
 */
function handler() {
    if (
      return res.status (405).json ({ message: "Method not allowed" })) {
  $2
}
    const { service, description, timeline, budget_range, email } =;
      req.body || {}
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ message: "Missing required fields" });
    }
    try {
      let ai_summary: string | null = null;
      let ai_tags: string[] = [];
      // Check condition
if ( {) {
  $2
}
        const prompt = `Summarize this marketplace quote request in one sentence and suggest 3 - 5 tags.\n\n_service: ${service}\n_email: ${email}\n_budget: ${budget_range || "N / A"}\n_timeline: ${timeline?.start || "N / A"} to ${timeline?.end || "N / A"}\n_description: ${description}`;
        const resp = await openai.responses.create ({
          model: "gpt - 4.1 - mini",
          input: prompt,
        });
        ai_summary = text.split ("\n")[0] || text;
        const tags_line = (
          text.split ("\n").find ((l) => l.toLowerCase ().includes ("tags")) || "");
          .replace (/tags?:/i, "");
          .trim ();
        ai_tags = tags_line;
          ? tags_line;
              .split (", ");
              .map ((t) => t.trim ());
              .filter (Boolean);
          : [];
      }

      let saved: any = null;
      // Check condition
if ( {) {
  $2
}
        const { data, error } = await supabase;
          .from ("quote_requests");
          .insert ({
            service,
            description,
            timeline_start: timeline?.start || null,
            timeline_end: timeline?.end || null,
            budget_range: budget_range || null,
            email,
            ai_summary: ai_summary,
            ai_tags: ai_tags,
            status: "new",
          });
          .select ("*");
          .single ();
        // Check condition
if (throw error) {
  $2
}
        saved = data;
      }
      return res;
        .status (200);
        .json ({ ok: true, summary: ai_summary, tags: ai_tags, id: saved?.id });
    } catch (e: any) {
      console.error ("quote - request error", e);
      return res.status (500).json ({ message: "Server error" });
    }
    return res.status (500).json ({ message: "Server error" });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
