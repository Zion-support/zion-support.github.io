import type { NextApiRequest, NextApiResponse } from 'next';




  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase

    return res.status(201).json({ ok: true })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }


  return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}





    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string }
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {

    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
  }
return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');    return res.status(201).json({ ok: true })
  }
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}



}
}
    // In a real implementation, validate and insert review into Supabase


    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })


    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
