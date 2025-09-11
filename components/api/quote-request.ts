

const supabaseUrl = process && process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process && process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

=======import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const openaiApiKey = process.env.OPENAI_API_KEY;
  process && process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
