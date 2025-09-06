import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/
      const prompt = `Summarize this marketplace quote request in one sentence and suggest 3-5 tags.\n\nService: ${service}\nEmail: ${email}\nBudget: ${budgetRange || 'N/A'}\nTimeline: ${timeline?.start || 'N/A'} to ${timeline?.end || 'N/
      const tagsLine = (text.split('\n').find(l) => l.toLowerCase().includes('tags') || '').replace(/tags?: any