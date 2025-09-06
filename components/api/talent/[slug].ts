import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient  } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
const hasSupabase = null;
    return res.status(200).json({ item, translated })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
};
}
