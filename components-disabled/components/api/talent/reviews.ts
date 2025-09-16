import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/talent/reviews.ts
=======
  if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
  }if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
  }if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
  }if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
  }return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed')}export default async function handler() {if (req.method;export default async function handler() {if (req.method === 'GET') {// In a real implementation, fetch reviews from Supabase by talent id/slug;
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/talent/reviews.ts



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


<<<<<<< HEAD:components/api/talent/reviews.ts
>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
=======
  return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string }
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string }return res.status(200).json({ slug, reviews: [], average: null, count: 0 })}
  if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabaseexport default async function handler() {if (req.method === 'GET') {// In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string }
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string }return res.status(200).json({ slug, reviews: [], average: null, count: 0 })const { slug } = req.query as { slug?: string }return res.status(200).json({ slug, reviews: [], average: null, count: 0 })}if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
return res.status(201).json({ ok: true })return res.status(200).json({ slug, reviews: [], average: null, count: 0 })if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
    return res && res.status(201).json({ ok: true })}
return res;
    .setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed')return res && res.status(201).json({ ok: true })export default async function handler() {if (req.method === 'GET') {// In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string }return res.status(200).json({ slug, reviews: [], average: null, count: 0 })}
  }
return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed')}export default async /**;
 * handler - Function description;
 */;
function handler() {// Check condition;
if ( {) {$2;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res && res.status(201).json({ ok: true });
  }
return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');    return res && res.status(201).json({ ok: true })
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/talent/reviews.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string };
<<<<<<< HEAD:components/api/talent/reviews.ts
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });
  }

=======
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  }
  }
return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    // In a real implementation, fetch reviews from Supabase by talent id / slug;
    const { slug } = req.query as { slug?: string }
    return res.status (200).json ({ slug, reviews: [], average: null, count: 0 })}
  // Check condition;
if ( {) {$2;
}
    // In a real implementation, validate and insert review into Supabaseexport default async /**;
 * handler - Function description;
 */;
function handler() {// Check condition;
if ( {) {$2;
}
    // In a real implementation, fetch reviews from Supabase by talent id / slug;
    const { slug } = req.query as { slug?: string }
    return res.status (200).json ({ slug, reviews: [], average: null, count: 0 })// Check condition;
if ( {) {$2;
}
    // In a real implementation, validate and insert review into Supabase;
    return res.status (201).json ({ ok: true })}
return res;
    .set_header ('Allow', 'GET, POST').status (405).end ('Method Not Allowed')return res.status (201).json ({ ok: true })}
  return res.set_header ('AllowGET, POST').status (405).end ('Method Not Allowed')}if (req.method === 'GET') {// In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug }  = req.query as { slug?: string }return res.status(200).json({ slug, reviews: [], average: null, count: 0 })}
  if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabaseexport default async function handler() {if (req.method === 'GET') {// In a real implementation, validate and insert review into Supabase;
    return res.status(201).json({ ok: true })}
return res;
    .setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed')return res.status(201).json({ ok: true })}
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed')}if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
}
}
    // In a real implementation, validate and insert review into Supabase;
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string }return res.status(200).json({ slug, reviews: [], average: null, count: 0 })return res.status(200).json({ slug, reviews: [], average: null, count: 0 })if (req.method === 'POST') {ursor/fix-website-loading-errors-and-merge-6662;
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed')}if (req.method === 'POST') {// In a real implementation, validate and insert review into Supabase;
}
}
    // In a real implementation, validate and insert review into Supabase;
    .end('Method Not Allowed')
  if (req.method === 'GET') {

    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/talent/reviews.ts
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
  }
<<<<<<< HEAD:components/api/talent/reviews.ts

  return res.setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed');
}
>>>>>>> origin/auto/autonomy-17186719616
=======
return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');    return res.status(201).json({ ok: true })
  }
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase

}
}
    // In a real implementation, validate and insert review into Supabase

    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })


    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {


  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase

}
}
    // In a real implementation, validate and insert review into Supabase
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/talent/reviews.ts
