import type { NextApiRequest, NextApiResponse } from 'next';


      supabase
        .from('profile_views')
        .select('id, talent_id')
        .eq('talent_id', talentId)
      supabase
        .from('quotes')
        .select('id, talent_id, status')
        .eq('talent_id', talentId)
      supabase
        .from('applications')
        .select('id, talent_id, status')
        .eq('talent_id', talentId)
      supabase
        .from('search_matches')
        .select('talent_id, tag')




  }

}
