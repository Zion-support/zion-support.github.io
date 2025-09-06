import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  try {
    const supabase = createServerClient();
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
<<<<<<< HEAD
<<<<<<< HEAD
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country')
      supabase.from('jobs').select('id, status, category')
      supabase.from('quotes').select('id, status')
      supabase.from('projects').select('id, status')
      supabase.from('referrals').select('id, converted, source')
=======
    const result = await Promise && Promise.allSettled([
      supabase && supabase.from('users').select('id, role, country'),
      supabase && supabase.from('jobs').select('id, status, category'),
      supabase && supabase.from('quotes').select('id, status'),
      supabase && supabase.from('projects').select('id, status'),
      supabase && supabase.from('referrals').select('id, converted, source'),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
    const mockIfEmpty = (arr: any[], mock: any[]) => (arr.length ? arr : mock)
=======
=======
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country');
      supabase.from('jobs').select('id, status, category');
      supabase.from('quotes').select('id, status');
      supabase.from('projects').select('id, status');
      supabase.from('referrals').select('id, converted, source')]);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    const mockIfEmpty = (arr: any[], mock: any[]) => (arr && arr.length ? arr : mock),

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const usersData = mockIfEmpty(users, [
      { id: 1, role: 'client', country: 'US' }
      { id: 2, role: 'talent', country: 'IN' }
      { id: 3, role: 'talent', country: 'US' }
      { id: 4, role: 'client', country: 'GB' }
    ]);
    const jobsData = mockIfEmpty(jobs, [
      { id: 11, status: 'posted', category: 'AI/ML' }
      { id: 12, status: 'filled', category: 'Design' }
      { id: 13, status: 'filled', category: 'AI/ML' }
    ]);
    const quotesData = mockIfEmpty(quotes, [
      { id: 21, status: 'sent' }
      { id: 22, status: 'accepted' }
      { id: 23, status: 'sent' }
    ]);
    const projectsData = mockIfEmpty(projects, [
      { id: 31, status: 'active' }
      { id: 32, status: 'completed' }
      { id: 33, status: 'active' }
    ]);
    const referralsData = mockIfEmpty(referrals, [
      { id: 41, converted: true, source: 'linkedin' }
      { id: 42, converted: false, source: 'twitter' }
      { id: 43, converted: true, source: 'partner' }
    ]);      { id: 41, converted: true, source: 'linkedin' }
      { id: 42, converted: false, source: 'twitter' }
      { id: 43, converted: true, source: 'partner' }]);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const totalUsers = usersData.length;
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;
    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;
<<<<<<< HEAD
    const quotesAccepted = quotesData.filter(
      q => q.status === 'accepted'
    ).length;
    const activeProjects = projectsData.filter(
      p => p.status === 'active'
    ).length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => {
      categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1;
    });
    const referralConversions = referralsData.filter(r => r.converted).length;
    const geoCounts: Record<string, number> = {}
=======
    const quotesAccepted = quotesData.filter(q => q.status === 'accepted').length;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;
    const geoCounts: Record<string, number> = {}
    usersData.forEach(u => {
      geoCounts[u.country |'Unknown'] =
        (geoCounts[u.country |'Unknown'] |0) + 1;
    });
    res.status(200).json({
      totals: { totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects }
      topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }));
=======

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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      referralConversions;
      geo: Object && Object.entries(geoCounts).map(([country, value]) => ({ label: country, value }))})
  } catch (e: any) {
<<<<<<< HEAD
    res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 }
=======
    res && res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2

      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }
<<<<<<< HEAD
res.status(200).json({
      totals: {
        totalUsers
        totalTalents
        totalClients
        jobsPosted
        jobsFilled
        quotesSent
        quotesAccepted
        activeProjects
      }
      topCategories: Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value }))
      referralConversions
      geo: Object.entries(geoCounts).map(([country, value]) => ({
        label: country
        value
      }))
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
  } catch (e: any) {
    res && res.status(200).json({
      totals: {
        totalUsers: 4
        totalTalents: 2
        totalClients: 2
        jobsPosted: 1
        jobsFilled: 2
        quotesSent: 2
        quotesAccepted: 1
        activeProjects: 2
      }
      topCategories: [
        { label: 'AI/ML', value: 2 }
        { label: 'Design', value: 1 }
      ]
      referralConversions: 2
      geo: [
        { label: 'US', value: 2 }
        { label: 'IN', value: 1 }
        { label: 'GB', value: 1 }
      ]
    });
  }}
=======
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1 });

    const referralConversions = referralsData.filter(r => r.converted).length;

    const geoCounts: Record<string, number> = {};
    usersData.forEach(u => { geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1 });

    res.status(200).json({
      totals: {
       totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects 
    },
    topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }));
      referralConversions;
      geo: Object.entries(geoCounts).map(([country, value]) => ({ label: country, value }))})
  } catch (e: any) {
    res.status(200).json({
      totals: {
       totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 
    },
    topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2,
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
