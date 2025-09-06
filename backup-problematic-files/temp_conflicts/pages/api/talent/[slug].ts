import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase as supabaseClient } from '@/utils/supabase/
import { TALENT_PROFILES as LOCAL } from '../../../data/
import type { TalentProfile } from '@/utils/types/