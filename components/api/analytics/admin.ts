import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  try {

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
    ]);

    const [usersR, jobsR, quotesR, projectsR, referralsR] = result;

    const users =
      usersR.status === 'fulfilled' && usersR.value.data
        ? (usersR.value.data as any[])
        : [];
    const jobs =
      jobsR.status === 'fulfilled' && jobsR.value.data
        ? (jobsR.value.data as any[])
        : [];
    const quotes =
      quotesR.status === 'fulfilled' && quotesR.value.data
        ? (quotesR.value.data as any[])
        : [];
    const projects =
      projectsR.status === 'fulfilled' && projectsR.value.data
        ? (projectsR.value.data as any[])
        : [];
    const referrals =
      referralsR.status === 'fulfilled' && referralsR.value.data
        ? (referralsR.value.data as any[])
        : [];

    const mockIfEmpty = (arr: any[], mock: any[]) => (arr.length ? arr : mock),

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
    ]);

    const totalUsers = usersData.length;
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;

    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;

    const quotesSent = quotesData.filter(q => q.status === 'sent').length;
    const quotesAccepted = quotesData.filter(
      q => q.status === 'accepted'
    ).length;

    const activeProjects = projectsData.filter(
      p => p.status === 'active'
    ).length;

    const categoryCounts: Record<string, number> = {};
    jobsData.forEach(j => {
      categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1;
    });
    const referralConversions = referralsData.filter(r => r.converted).length;

    const geoCounts: Record<string, number> = {};

    const referralConversions = referralsData.filter(r => r.converted).length;

    const geoCounts: Record<string, number> = {};