import type { NextApiRequest, NextApiResponse } from 'next';

import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient();
    
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country'),
      supabase.from('jobs').select('id, status, category'),
      supabase.from('quotes').select('id, status'),
      supabase.from('projects').select('id, status'),
      supabase.from('referrals').select('id, converted, source'),
origin/cursor/automate-test-improve-and-merge-code-2533
    ]);

    const [usersR, jobsR, quotesR, projectsR, referralsR] = result;

    const users =
      usersR && usersR.status === 'fulfilled' && usersR.value.data
        ? (usersR.value.data as any[])
        : [];

    const jobs =
      jobsR && jobsR.status === 'fulfilled' && jobsR.value.data
        ? (jobsR.value.data as any[])
        : [];

    const quotes =
      quotesR && quotesR.status === 'fulfilled' && quotesR.value.data
        ? (quotesR.value.data as any[])
        : [];

    const projects =
      projectsR && projectsR.status === 'fulfilled' && projectsR.value.data
        ? (projectsR.value.data as any[])
        : [];

    const referrals =
      referralsR && referralsR.status === 'fulfilled' && referralsR.value.data
        ? (referralsR.value.data as any[])
        : [];
    const usersData = mockIfEmpty(users, ['
      { id: 1, role: 'client', country: 'US' }'
      { id: 2, role: 'talent', country: 'IN' }'
      { id: 3, role: 'talent', country: 'US' }'
      { id: 4, role: 'client', country: 'GB' }
    ]);
    const jobsData = mockIfEmpty(jobs, ['
      { id: 11, status: 'posted', category: 'AI/ML' }'
      { id: 12, status: 'filled', category: 'Design' }'
      { id: 13, status: 'filled', category: 'AI/ML' }
    ]);
    const quotesData = mockIfEmpty(quotes, ['
      { id: 21, status: 'sent' }'
      { id: 22, status: 'accepted' }'
      { id: 23, status: 'sent' }
    ]);
    const projectsData = mockIfEmpty(projects, ['
      { id: 31, status: 'active' }'
      { id: 32, status: 'completed' }'
      { id: 33, status: 'active' }
    ]);
<<<<<<< HEAD
    const referralsData = mockIfEmpty(referrals, [
      { id: 41, converted: true, source: 'linkedin' },
      { id: 42, converted: false, source: 'twitter' },
      { id: 43, converted: true, source: 'partner' },
    ]);

    const usersData = mockIfEmpty(users, [
      { id: 1, role: 'client', country: 'US' },
      { id: 2, role: 'talent', country: 'IN' },
      { id: 3, role: 'talent', country: 'US' },
      { id: 4, role: 'client', country: 'GB' },
    ]);

    const jobsData = mockIfEmpty(jobs, [
      { id: 1, status: 'open', category: 'engineering' },
      { id: 2, status: 'closed', category: 'design' },
      { id: 3, status: 'open', category: 'marketing' },
    ]);

    const quotesData = mockIfEmpty(quotes, [
      { id: 1, status: 'pending' },
      { id: 2, status: 'approved' },
      { id: 3, status: 'rejected' },
    ]);

    const projectsData = mockIfEmpty(projects, [
      { id: 1, status: 'active' },
      { id: 2, status: 'completed' },
      { id: 3, status: 'paused' },
    ]);

    const referralsData = mockIfEmpty(referrals, [
      { id: 1, converted: true, source: 'linkedin' },
      { id: 2, converted: false, source: 'twitter' },
      { id: 3, converted: true, source: 'direct' },
    ]);

    const analytics = {
      users: {
        total: usersData.length,
        byRole: groupBy(usersData, 'role'),
        byCountry: groupBy(usersData, 'country'),
      },
      jobs: {
        total: jobsData.length,
        byStatus: groupBy(jobsData, 'status'),
        byCategory: groupBy(jobsData, 'category'),
      },
      quotes: {
        total: quotesData.length,
        byStatus: groupBy(quotesData, 'status'),
      },
      projects: {
        total: projectsData.length,
        byStatus: groupBy(projectsData, 'status'),
      },
      referrals: {
        total: referralsData.length,
        converted: referralsData.filter((r: any) => r.converted).length,
        bySource: groupBy(referralsData, 'source'),
      },
    };

    res.status(200).json(analytics);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
}

function mockIfEmpty<T>(data: T[], mock: T[]): T[] {
  return data && data.length > 0 ? data : mock;
}

function groupBy<T>(array: T[], key: keyof T): Record<string, number> {
  return array.reduce((groups, item) => {
    const value = String(item[key]);
    groups[value] = (groups[value] || 0) + 1;
    return groups;
  }, {} as Record<string, number>);
}