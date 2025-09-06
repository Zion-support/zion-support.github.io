import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient($2);
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const result = await Promise.allSettled([
      supabase.from('users').select($2);
      supabase.from('jobs').select($2);
      supabase.from('quotes').select($2);
      supabase.from('projects').select($2);
      supabase.from('referrals').select('id, converted, source')]),

    const [usersR, jobsR, quotesR, projectsR, referralsR] = result,

    const users = $2;
    const jobs = $2;
    const quotes = $2;
    const projects = $2;
    const referrals = $2;
    const mockIfEmpty = (arr: any[], mock: any[]) => (arr.length ? arr : mock),

    const usersData = mockIfEmpty($2);
    const jobsData = mockIfEmpty($2);
    const quotesData = mockIfEmpty($2);
    const projectsData = mockIfEmpty($2);
    const referralsData = mockIfEmpty($2);
    const totalUsers = $2;
    const totalTalents = $2;
    const totalClients = $2;
    const jobsPosted = $2;
    const jobsFilled = $2;
    const quotesSent = $2;
    const quotesAccepted = $2;
    const activeProjects = $2;
    const categoryCounts: Record<string, number> = {},
    jobsData.forEach(j = $2;
    const referralConversions = $2;
    const geoCounts: Record<string, number> = {},
    usersData.forEach(u = $2;
    res.status(200).json({
      totals: { totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects },
      topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value })),
      referralConversions,
      geo: Object.entries(geoCounts).map(([country, value]) => ({ label: country, value }))})
  } catch (e: any) {
    res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2},
      topCategories: [{ label: 'AI/ML', value: 2}, { label: 'Design', value: 1}],
      referralConversions: 2,
      geo: [{ label: 'US', value: 2}, { label: 'IN', value: 1}, { label: 'GB', value: 1}]})
  }
}