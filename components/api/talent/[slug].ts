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

    const base = LOCAL.find((t) => t.slug === slug) |null;
    if (!base) return res.status(404).json({ error: 'Not found' });

    const { item, translated } = applyTranslations(base, lang);

    return res.status(200).json({ item, translated })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
}

}
}


}







}





}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



