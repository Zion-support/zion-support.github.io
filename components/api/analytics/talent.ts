import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = null;
        { label: 'ai', value: 1 }]})
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient();
    const talentId = (req.query.talentId as string) |null
    const [viewsR, invitesR, appsR, tagsR] = await Promise.allSettled([
      supabase
        .from('profile_views')
        .select('id, talent_id')

        .eq('talent_id', talentId)
      supabase'
        .from('quotes')'
        .select('id, talent_id, status')'
        .eq('talent_id', talentId)
      supabase'
        .from('applications')'
        .select('id, talent_id, status')'
        .eq('talent_id', talentId)
      supabase'
        .from('search_matches')'
        .select('talent_id, tag')'
        .eq('talent_id', talentId)
    ])
    const views =
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value }))
    })
  } catch (e) {}
      topTags: ['
        { label: 'react', value: 2 }'
        { label: 'node', value: 1 }'
        { label: 'ai', value: 1 }
      ]

  }
}
}
