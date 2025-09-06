import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient  } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const hasSupabase = null;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const hasSupabase =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
=======

const hasSupabase =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function applyTranslations(item: TalentProfile, lang?: string) {
  if (!lang |!item.translations) return { item, translated: false }
  const t = item.translations;
  const translated: Partial<TalentProfile> = {}
  if (t.title?.[lang]) translated.title = t.title[lang];
  if (t.summary?.[lang]) translated.summary = t.summary[lang];
  if (t.bio?.[lang]) translated.bio = t.bio[lang];
  if (t.category?.[lang]) translated.category = t.category[lang];
  return {
<<<<<<< HEAD
    item: { ...item, ...translated }
    translated: Object.keys(translated).length > 0
  }
=======
    item: { ...item, ...translated },
    translated: Object.keys(translated).length > 0,
  };
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {;
    return res.setHeader('Allow', 'GET').status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD
  const { slug, lang } = req.query as { slug: string; lang?: string }
=======
}

const { slug, lang } = req.query as { slug: string; lang?: string };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient
        .from('talent_profiles')
        .select('*')
        .eq('slug', slug)
        .single();
      if (error) throw error;
      const { item, translated } = applyTranslations(
        data as unknown as TalentProfile
        lang
      );
      return res.status(200).json({ item, translated });
<<<<<<< HEAD
    }
    const base = LOCAL.find(t => t.slug === slug) |null;
=======
   
}

    const base = LOCAL.find(t => t.slug === slug) || null;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (!base) return res.status(404).json({ error: 'Not found' });
    
}

const { item, translated } = applyTranslations(base, lang);
    return res.status(200).json({ item, translated });
 
} catch (e: any) {
    return res.status(500).json({ error: e.message });
<<<<<<< HEAD
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {;
    return res.setHeader('AllowGET').status(405).end('Method Not Allowed');
  }
  const { slug, lang } = req.query as { slug: string, lang?: string }
  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient.from('talent_profiles').select('*').eq('slug', slug).single();
      if (error) throw error;
      const { item, translated } = applyTranslations(data as unknown as TalentProfile, lang);
      return res.status(200).json({ item, translated })
    }
    const base = LOCAL.find((t) => t.slug === slug) |null;
    if (!base) return res.status(404).json({ error: 'Not found' });
    const { item, translated } = applyTranslations(base, lang);

    return res.status(200).json({ item, translated })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
}
<<<<<<< HEAD
}
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
