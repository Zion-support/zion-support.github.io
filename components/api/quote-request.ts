<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { createClient } from '@supabase/supabase-js',
import OpenAI from 'openai',
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL,
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null,

const openaiApiKey = process.env.OPENAI_API_KEY,
const openai = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null,

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' }),

  const { service, description, timeline, budgetRange, email } = req.body || {},
  if (!service || !description || !email) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    let aiSummary: string | null = null,
    let aiTags: string[] = [],

    if (openai) {
      const prompt = `Summarize this marketplace quote request in one sentence and suggest 3-5 tags.\n\nService: ${service}\nEmail: ${email}\nBudget: ${budgetRange || 'N/A'}\nTimeline: ${timeline?.start || 'N/A'} to ${timeline?.end || 'N/A'}\nDescription: ${description}`,
      const resp = await openai.responses.create({
        model: 'gpt-4.1-mini',
        input: prompt}),
      const text = resp.output_text?.trim() || '',
      aiSummary = text.split('\n')[0] || text,
      const tagsLine = (text.split('\n').find((l) => l.toLowerCase().includes('tags')) || '').replace(/tags?:/i, '').trim(),
      aiTags = tagsLine ? tagsLine.split().map((t) => t.trim()).filter(Boolean) : []
    }

    let saved: any = null,
    if (supabase) {
      const { data, error } = await supabase.from('quote_requests').insert({
        service,
        description,
        timeline_start: timeline?.start || null,
        timeline_end: timeline?.end || null,
        budget_range: budgetRange || null,
        email,
        ai_summary: aiSummary,
        ai_tags: aiTags,
        status: 'new'}).select('*').single(),
      if (error) throw error,
      saved = data
    }

    return res.status(200).json({ ok: true, summary: aiSummary, tags: aiTags, id: saved?.id })
  } catch (e: any) {
    console.error('quote-request error', e),
    return res.status(500).json({ message: 'Server error' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const _supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const _supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const _openaiApiKey = process.env.OPENAI_API_KEY;
const _openai = openaiApiKey ? new OpenAI({_apiKey: openaiApiKey}) : null;

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed'});

  const {_service, _description, _timeline, _budgetRange, _email} = req.body || {};
  if (!service || !description || !email) {_return res.status(400).json({ message: 'Missing required fields'});
  }

  try {_let aiSummary: string | null = null;
    let aiTags: string[] = [];

    if (openai) {
      const _prompt = `Summarize this marketplace quote request in one sentence and suggest 3-5 tags.\n\nService: ${service}\nEmail: ${_email}\nBudget: ${_budgetRange || 'N/A'}\nTimeline: ${_timeline?.start || 'N/A'} to ${_timeline?.end || 'N/A'}\nDescription: ${_description}`;
      const _resp = await openai.responses.create({_model: 'gpt-4.1-mini', _input: prompt});
      const _text = resp.output_text?.trim() || '';
      aiSummary = text.split('\n')[0] || text;
      const _tagsLine = (text.split('\n').find(_(l) => l.toLowerCase().includes('tags')) || '').replace(/tags?:/i, '').trim();
      aiTags = tagsLine ? tagsLine.split(',').map(_(t) => t.trim()).filter(Boolean) : [];
    }

    let saved: unknown = null;
    if (supabase) {_const { data, _error} = await supabase.from('quote_requests').insert({_service, _description, _timeline_start: timeline?.start || null, _timeline_end: timeline?.end || null, _budget_range: budgetRange || null, _email, _ai_summary: aiSummary, _ai_tags: aiTags, _status: 'new'}).select('*').single();
      if (error) throw error;
      saved = data;
    }

    return res.status(200).json({_ok: true, _summary: aiSummary, _tags: aiTags, _id: saved?.id});
  } catch (e: unknown) {_return res.status(500).json({ message: 'Server error'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}