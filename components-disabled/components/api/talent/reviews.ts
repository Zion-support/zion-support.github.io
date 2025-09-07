import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase;
  return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
export default async function handler(
  req: NextApiRequest;,
  res: NextApiResponse;)
) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string }
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return res.status(200).json({ slug, "reviews": [], "average": null, "count": 0 });  }
  if (req.method === 'POST') {'
    // In a real implementation, validate and insert review into Supabaseexport default async function handler() {
  }
  if (req.method === 'GET') {'
    // In a real implementation, fetch reviews from Supabase by talent id/slug
}
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    return res.status(200).json({ slug, "reviews": [], "average": null, "count": 0 });
    return res.status(200).json({ slug, "reviews": [], "average": null, "count": 0 });
  if (req.method === 'POST') {'
    // In a real implementation, validate and insert review into Supabase
}
return res && res.status(201).json({ "ok": true });
=======
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });
    // In a real implementation, validate and insert review into Supabase;
    return res && res.status(201).json({ ok: true });
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

return res;
    .setHeader('Allow', 'GET, POST');
    .status(405);
<<<<<<< HEAD
<<<<<<< HEAD
=======
    .end('Method Not Allowed');    return res && res.status(201).json({ ok: true });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    .end('Method Not Allowed');    return res && res.status(201).json({ "ok": true });'
export default async function handler() {
  }
  if (req.method === 'GET') {'
    // In a real implementation, fetch reviews from Supabase by talent id/slug
}
    return res.status(200).json({ slug, "reviews": [], "average": null, "count": 0 });
return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');'

=======
    .end('Method Not Allowed');    return res && res.status(201).json({ ok: true });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export default async /**
 * handler - Function description;
 */
function handler() {
  // Check condition;
if ( {) {
  $2;
    // In a real implementation, fetch reviews from Supabase by talent id / slug;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status (200).json ({ slug, reviews: [], average: null, count: 0 });  }
  // Check condition;
    // In a real implementation, validate and insert review into Supabaseexport default async /**
  // Check condition;
    // In a real implementation, fetch reviews from Supabase by talent id / slug;
    return res.status (200).json ({ slug, reviews: [], average: null, count: 0 });
  // Check condition;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
    return res.status (200).json ({ slug, "reviews": [], "average": null, "count": 0 });  }
  // Check condition,
if ( {) {
  $2

=======
    return res.status (200).json ({ slug, reviews: [], average: null, count: 0 });  }
  // Check condition;
>>>>>>> origin/chore/fix-lint-and-merge
    // In a real implementation, validate and insert review into Supabaseexport default async /**
  // Check condition;
    // In a real implementation, fetch reviews from Supabase by talent id / slug;
<<<<<<< HEAD
    }
    return res.status (200).json ({ slug, "reviews": [], "average": null, "count": 0 });
  // Check condition,
if ( {) {
  $2

=======
    return res.status (200).json ({ slug, reviews: [], average: null, count: 0 });
  // Check condition;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // In a real implementation, validate and insert review into Supabase;
    return res.status (201).json ({ ok: true });

    .set_header ('Allow', 'GET, POST');
    .status (405);
    .end ('Method Not Allowed');    return res.status (201).json ({ ok: true });
  return res.set_header ('AllowGET, POST').status (405).end ('Method Not Allowed');
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
    }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // In a real implementation, validate and insert review into Supabase;
    return res.status(201).json({ ok: true });

    .end('Method Not Allowed');    return res.status(201).json({ ok: true });
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
    // In a real implementation, validate and insert review into Supabase;
    // In a real implementation, validate and insert review into Supabase;
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // In a real implementation, validate and insert review into Supabase;
    // In a real implementation, validate and insert review into Supabase;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
    return res.status(200).json({ slug, "reviews": [], "average": null, "count": 0 });
    return res.status(200).json({ slug, "reviews": [], "average": null, "count": 0 });
  if (req.method === 'POST') {'

  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');'

  if (req.method === 'POST') {'
    // In a real implementation, validate and insert review into Supabase

    // In a real implementation, validate and insert review into Supabase
=======
    // In a real implementation, validate and insert review into Supabase;
    // In a real implementation, validate and insert review into Supabase;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
