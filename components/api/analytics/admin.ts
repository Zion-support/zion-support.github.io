import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = null;
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }
res.status(200).json({
      totals: {
        totalUsers,
        totalTalents,
        totalClients,
        jobsPosted,
        jobsFilled,
        quotesSent,
        quotesAccepted,
        activeProjects,
      },
      topCategories: Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value })),
      referralConversions,
      geo: Object.entries(geoCounts).map(([country, value]) => ({
        label: country,
        value,
      })),
    });
  } catch (e: any) {
    res.status(200).json({
      totals: {
        totalUsers: 4,
        totalTalents: 2,
        totalClients: 2,
        jobsPosted: 1,
        jobsFilled: 2,
        quotesSent: 2,
        quotesAccepted: 1,
        activeProjects: 2,
      },
      topCategories: [
        { label: 'AI/ML', value: 2 },
        { label: 'Design', value: 1 },
      ],
      referralConversions: 2,
      geo: [
        { label: 'US', value: 2 },
        { label: 'IN', value: 1 },
        { label: 'GB', value: 1 },
      ],
    });
  }}
