
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method === 'GET') {
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
import { v4 as uuid } from 'uuid';
import { translateText, detectLanguageSimple } from '@/utils/api/translate';
const hasSupabase = $2;
const SUPPORTED_LANGS = (process.env.SUPPORTED_LANGS || 'en,es,de,fr,pt,ja,zh').split().map((x) => x.trim()),

    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient
          .from('talent_profiles')
          .select('*');
          .order('created_at', { ascending: false });
        if (error) throw error;
        return res.status(200).json({ items: data as TalentProfile[] });
     
}
      return res.status(200).json({ items: LOCAL });
   
} catch (e: any) {
      return res.status(500).json({ error: e.message });
    }  }


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {


      }
      return res && res.status(200).json({ items: LOCAL,}
});
    } catch (e) {
      return res.status(500).json({ error: e.message,}
});
    }


  }
  if (req.method = == 'POST') {try ;
  const payload = req.body as Partial<TalentProfile    />;

const slug =;
        (payload.name || 'talent').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') +;
        '-' +;
        uuid().slice(0, 6)...payload;
        id: uuid()slug;
        verified: false;
        rating: 0;
        reviewsCount: 0;
        createdAt: new Date().toISOString()summary: payload.summary |'';
        skills: payload.skills |[];
        name: payload.name |'Unnamed';
        title: payload.title |'Professional';
        location: payload.location |'Remote';}
        availability: (payload.availability as any) |'Open';}
      } as TalentProfile;
      // Auto-translate;

const originalLang =;
        payload.originalLanguage |;

        detectLanguageSimple([item.title, item.summary, item.bio |''].join('\n'))const translations: TalentProfile['translations'] = {}

        translations.summary = translations.summary |{}
        translations.bio = translations.bio |,
}

      if (hasSupabase) {}
        const { error } = await supabaseClient.from('talent_profiles').insert({

id: item.id,


request_quote: item.request_quote ?? null,


          .order('created_at', { ascending: false });
        if (error) throw error;
        return res && res.status(200).json({ items: data as TalentProfile[] });
      }
      return res && res.status(200).json({ items: LOCAL });
    } catch (e: any) {}
      return res && res.status(500).json({ error: e && e.message });
    }  }
export default async function handler() { return null; }
  if (req && req.method === 'GET') {}
    try {};

    .status(405)
    .end('Method Not Allowed');





