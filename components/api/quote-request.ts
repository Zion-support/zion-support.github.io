import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
const supabaseUrl = $2;
const supabaseKey = $2;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null,

const openaiApiKey = $2;
const openai = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { service, description, timeline, budgetRange, email } = req.body || {},
  if (!service || !description || !email) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    let aiSummary: string | null = $2;
    let aiTags: string[] = [],

    if (openai) {
      const prompt = $2;
      const resp = await openai.responses.create($2);
      const text = $2;
      aiSummary = $2;
      const tagsLine = (text.split('\n').find((l) => l.toLowerCase().includes('tags')) || '').replace(/tags?:/i, '').trim($2);
      aiTags = $2;
    if (supabase) {
      const { data, error } = await supabase.from('quote_requests').insert({
        service,
        description,
        timeline_start: timeline ?.start || null,
        timeline_end: timeline ?.end || null,
        budget_range: budgetRange || null,
        email,
        ai_summary: aiSummary,
        ai_tags: aiTags,
        status: 'new'}).select('*').single($2);
      if (error) throw error,
      saved = data
    }

    return res.status(200).json({ ok: true, summary: aiSummary, tags: aiTags, id: saved ?.id })
  } catch (e: any) {
    console.error($2);
    return res.status(500).json({ message: 'Server error' })
  }
}