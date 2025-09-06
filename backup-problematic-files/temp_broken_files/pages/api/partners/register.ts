import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSupabase } from '../../../utils/supabase/
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/