import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient();

    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const result = await Promise && Promise.allSettled([
      supabase && supabase.from('users').select('id, role, country'),
      supabase && supabase.from('jobs').select('id, status, category'),
      supabase && supabase.from('quotes').select('id, status'),
      supabase && supabase.from('projects').select('id, status'),
      supabase && supabase.from('referrals').select('id, converted, source'),
    ]);
    const [usersR, jobsR, quotesR, projectsR, referralsR] = result;

    const users =
      usersR && usersR.status === 'fulfilled' && usersR && usersR.value.data
        ? (usersR && usersR.value.data as any[])
        : [];
    const jobs =
      jobsR && jobsR.status === 'fulfilled' && jobsR && jobsR.value.data
        ? (jobsR && jobsR.value.data as any[])
        : [];
    const quotes =
      quotesR && quotesR.status === 'fulfilled' && quotesR && quotesR.value.data
        ? (quotesR && quotesR.value.data as any[])
        : [];
    const projects =
      projectsR && projectsR.status === 'fulfilled' && projectsR && projectsR.value.data
        ? (projectsR && projectsR.value.data as any[])
        : [];
    const referrals =
      referralsR && referralsR.status === 'fulfilled' && referralsR && referralsR.value.data
        ? (referralsR && referralsR.value.data as any[])
        : [];

    const mockIfEmpty = (arr: any[], mock: any[]) => (arr && arr.length ? arr : mock),

    const usersData = mockIfEmpty(users, [
      { id: 1, role: 'client', country: 'US' },
      { id: 2, role: 'talent', country: 'IN' },
      { id: 3, role: 'talent', country: 'US' },
      { id: 4, role: 'client', country: 'GB' },
    ]);

    const jobsData = mockIfEmpty(jobs, [
      { id: 11, status: 'posted', category: 'AI/ML' },
      { id: 12, status: 'filled', category: 'Design' },
      { id: 13, status: 'filled', category: 'AI/ML' },
    ]);

    const quotesData = mockIfEmpty(quotes, [
      { id: 21, status: 'sent' },
      { id: 22, status: 'accepted' },
      { id: 23, status: 'sent' },
    ]);

    const projectsData = mockIfEmpty(projects, [
      { id: 31, status: 'active' },
      { id: 32, status: 'completed' },
      { id: 33, status: 'active' },
    ]);

    const referralsData = mockIfEmpty(referrals, [
      { id: 41, converted: true, source: 'linkedin' },
      { id: 42, converted: false, source: 'twitter' },
      { id: 43, converted: true, source: 'partner' },
    ]);      { id: 41, converted: true, source: 'linkedin' };
      { id: 42, converted: false, source: 'twitter' };
      { id: 43, converted: true, source: 'partner' }]);

    const totalUsers = usersData && usersData.length;
    const totalTalents = usersData && usersData.filter(u => u && u.role === 'talent').length;
    const totalClients = usersData && usersData.filter(u => u && u.role === 'client').length;

    const jobsPosted = jobsData && jobsData.filter(j => j && j.status === 'posted').length;
    const jobsFilled = jobsData && jobsData.filter(j => j && j.status === 'filled').length;

    const quotesSent = quotesData && quotesData.filter(q => q && q.status === 'sent').length;
    const quotesAccepted = quotesData && quotesData.filter(
      q => q && q.status === 'accepted'
    ).length;

    const activeProjects = projectsData && projectsData.filter(
      p => p && p.status === 'active'
    ).length;

    const categoryCounts: Record<string, number> = {};
    jobsData && jobsData.forEach(j => {
      categoryCounts[j && j.category] = (categoryCounts[j && j.category] || 0) + 1;
    });
    const referralConversions = referralsData && referralsData.filter(r => r && r.converted).length;

    const geoCounts: Record<string, number> = {};
    const activeProjects = projectsData && projectsData.filter(p => p && p.status === 'active').length;

    const categoryCounts: Record<string, number> = {};
    jobsData && jobsData.forEach(j => { categoryCounts[j && j.category] = (categoryCounts[j && j.category] || 0) + 1 });

    const referralConversions = referralsData && referralsData.filter(r => r && r.converted).length;

    const geoCounts: Record<string, number> = {};
    usersData && usersData.forEach(u => {
      geoCounts[u && u.country || 'Unknown'] =
        (geoCounts[u && u.country || 'Unknown'] || 0) + 1;
    });
    res && res.status(200).json({
      totals: { totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects };
      topCategories: Object && Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }));
      referralConversions;
      geo: Object && Object.entries(geoCounts).map(([country, value]) => ({ label: country, value }))})
  } catch (e: any) {
    res && res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 };
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2,
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }

    res && res.status(200).json({
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
      topCategories: Object && Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value })),
      referralConversions,
      geo: Object && Object.entries(geoCounts).map(([country, value]) => ({
        label: country,
        value,
      })),
    });
  } catch (e: any) {
    res && res.status(200).json({
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
