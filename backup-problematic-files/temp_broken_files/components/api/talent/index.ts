import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase as supabaseClient } from '@/utils/supabase/
import { TALENT_PROFILES as LOCAL } from '@/data/
import type { TalentProfile } from '@/utils/types/
import { translateText, detectLanguageSimple } from '@/utils/api/
      const slug = (payload.name || 'talent').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/