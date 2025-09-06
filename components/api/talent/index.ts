import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient  } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL  } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
import { v4 as uuid } from 'uuid';
import { translateText, detectLanguageSimple } from '@/utils/api/translate';
const hasSupabase = null;
        return res.status(201).json({ slug: item.slug })
      }

      // Fallback: return the slug as if saved
      return res.status(201).json({ slug: item.slug });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
