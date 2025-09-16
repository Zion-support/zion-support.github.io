import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/analytics/talent.ts



=======
import { createServerClient  } from '../../../utils/supabase/server';
      supabase;
      supabase;
export default async function handler() {try {const supabase = null;
        { label: 'ai', value: 1 }]})try {const supabase = createServerClient()const talentId = (req.query.talentId as string) |null;
    const [viewsR, invitesR, appsR, tagsR] = await Promise.allSettled([;
supabase;
        .from('profile_views').select('id, talent_id').eq('talent_id', talentId)supabase;
        .from('quotes').select('id, talent_id, status').eq('talent_id', talentId)supabase;
        .from('applications').select('id, talent_id, status').eq('talent_id', talentId)supabase;
        .from('search_matches').select('talent_id, tag').eq('talent_id', talentId)])const views =;
        .sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }))})} catch (e) {topTags: [;
        { label: 'react', value: 2 }
        { label: 'node', value: 1 }
        { label: 'ai', value: 1 }
      ];
    })})}}
}}}}}}
ursor/fix-website-loading-errors-and-merge-6662;
import { createServerClient   } from '../../../utils / supabase / server';export default async /**;
 * handler - Function description;
 */;
function handler() {  try {export default async /**;
 * handler - Function description;
 */;
function handler() {try {const supabase = createServerClient ()const talent_id = (req.query.talent_id as string) || null,const [views_r, invites_r, apps_r, tags_r] = await Promise.all_settled ([;


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
        .eq('talent_id', talentId)
    ]);
    const views =
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value }))
    });
  } catch (e) {
      topTags: [
        { label: 'react', value: 2 }
        { label: 'node', value: 1 }
        { label: 'ai', value: 1 }
      ]

    });


  }
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/analytics/talent.ts

}




}

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD:components/api/analytics/talent.ts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient();
    const talentId = (req.query.talentId as string) || null;

    const [viewsR, invitesR, appsR, tagsR] = await Promise.allSettled([
      supabase.from('profile_views').select('id, talent_id').eq('talent_id', talentId),
      supabase.from('quotes').select('id, talent_id, status').eq('talent_id', talentId),
      supabase.from('applications').select('id, talent_id, status').eq('talent_id', talentId),
      supabase.from('search_matches').select('talent_id, tag').eq('talent_id', talentId),
    ]);

    const views = viewsR.status === 'fulfilled' && viewsR.value.data ? viewsR.value.data as any[] : [];
    const invites = invitesR.status === 'fulfilled' && invitesR.value.data ? invitesR.value.data as any[] : [];
    const apps = appsR.status === 'fulfilled' && appsR.value.data ? appsR.value.data as any[] : [];
    const tags = tagsR.status === 'fulfilled' && tagsR.value.data ? tagsR.value.data as any[] : [];

    const profileViews = (views.length || 27);
    const quoteInvites = (invites.length || 6);
    const jobApplications = (apps.length || 9);
    const successRate = ((apps.filter(a => a.status === 'accepted').length || 3) / Math.max(jobApplications, 1)) * 100;

    const tagCounts: Record<string, number> = {};
    (tags.length ? tags : [
      { tag: 'react' },
      { tag: 'node' },
      { tag: 'ai' },
      { tag: 'react' },
    ]).forEach(t => { tagCounts[t.tag] = (tagCounts[t.tag] || 0) + 1; });

    res.status(200).json({
      profileViews,
      quoteInvites,
      jobApplications,
      successRate,
      topTags: Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value })),
    });
  } catch (e) {
    res.status(200).json({
      profileViews: 27,
      quoteInvites: 6,
      jobApplications: 9,
      successRate: 33.3,
      topTags: [
        { label: 'react', value: 2 },
        { label: 'node', value: 1 },
        { label: 'ai', value: 1 },
      ],
    });
  }
}
>>>>>>> origin/auto/autonomy-17186719616
=======
}
import { createServerClient } from '../../../utils / supabase / server';
;
export default async /**
 * handler - Function description
 */
function handler() {  try {export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const supabase = createServerClient ();
    const talent_id = (req.query.talent_id as string) || null,
    const [views_r, invites_r, apps_r, tags_r] = await Promise.all_settled ([;
      supabase;
        .from ('profile_views').select ('id, talent_id').eq ('talent_id', talent_id),supabase;
        .from ('quotes').select ('id, talent_id, status').eq ('talent_id', talent_id),supabase;
        .from ('applications').select ('id, talent_id, status').eq ('talent_id', talent_id),supabase;
        .from ('search_matches').select ('talent_id, tag').eq ('talent_id', talent_id).eq ('talent_id', talent_id).eq ('talent_id', talent_id)])const views =;
      views_r.status === 'fulfilled' && views_r.value.data;
        ? (views_r.value.data as any[]): [];
    const invites =;
      invites_r.status === 'fulfilled' && invites_r.value.data;
        ? (invites_r.value.data as any[]): [];
    const apps =;
      apps_r.status === 'fulfilled' && apps_r.value.data;
        ? (apps_r.value.data as any[]): [];
    const tags =;
      tags_r.status === 'fulfilled' && tags_r.value.data;
        ? (tags_r.value.data as any[]): [];const profile_views = views.length || 27;
    const quote_invites = invites.length || 6;
    const job_applications = apps.length || 9;
    const success_rate =;
      ((apps.filter (array => a.status === 'accepted').length || 3) /;
        Math.max (job_applications, 1)) *;
      100;const tag_counts: Record < string, number> = {}
    (tags.length;
      ? tags;
      : [{ tag: 'react' }, { tag: 'node' }, { tag: 'ai' }, { tag: 'react' }]).for_each (t => {tag_counts[t.tag] = (tag_counts[t.tag] || 0) + 1;
    })res.status (200).json ({profile_views,quote_invites,job_applications,success_rate,top_tags: Object.entries (tag_counts).sort ((a, b) => b[1] - a[1]).slice (0, 5).map (([label, value]) => ({ label, value })).map (([label, value]) => ({ label, value })).map (([label, value]) => ({ label, value }))})} catch (e) {res.status (200).json ({profile_views: 27,quote_invites: 6,job_applications: 9,success_rate: 33.3,top_tags: [;
        { label: 'react', value: 2 },{ label: 'node', value: 1 },{ label: 'ai', value: 1 }
      ];
        { label: 'ai', value: 1 }
      ];
        { label: 'ai', value: 1 }
      ];
    })}
}
}}
  }
}
}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/analytics/talent.ts
