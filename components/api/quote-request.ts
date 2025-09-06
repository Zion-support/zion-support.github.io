import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
const supabaseUrl = null;
    return res.status(500).json({ message: 'Server error' })
  }
}