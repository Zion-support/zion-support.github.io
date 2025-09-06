import type { NextApiRequest, NextApiResponse } from 'next';


    const { item, translated } = applyTranslations(base, lang);
    return res && res.status(200).json({ item, translated });
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message });
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'GET') {
    return res && res.setHeader('AllowGET').status(405).end('Method Not Allowed');
  }

  const { slug, lang } = req && req.query as { slug: string, lang?: string };


  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient && supabaseClient.from('talent_profiles').select('*').eq('slug', slug).single();
      if (error) throw error;
      const { item, translated } = applyTranslations(data as unknown as TalentProfile, lang);
      return res && res.status(200).json({ item, translated })
    }

}



=======

    const base = LOCAL && LOCAL.find((t) => t && t.slug === slug) || null;
    if (!base) return res && res.status(404).json({ error: 'Not found' });
    const { item, translated } = applyTranslations(base, lang);
    return res && res.status(200).json({ item, translated })
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
