import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
    const data = {
      activeUsers30d: 12840,
      gmv: 1450000,
      conversionRate: 0.12,
      avgOrderValue: 89.50,
      topProducts: [
        { name: 'AI Analytics Dashboard', sales: 450 },
        { name: 'Blockchain Solutions', sales: 320 },
        { name: 'Cloud Infrastructure', sales: 280 }
      ],
      revenueByMonth: [
        { month: 'Jan', revenue: 120000 },
        { month: 'Feb', revenue: 135000 },
        { month: 'Mar', revenue: 145000 }
      ],
      userEngagement: {
        pageViews: 45600,
        sessionDuration: 180,
        bounceRate: 0.35
      }
    };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
}