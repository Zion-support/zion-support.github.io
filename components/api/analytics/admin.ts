import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const supabase = createServerClient();
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const result = await Promise && Promise.allSettled([
      supabase && supabase.from('users').select('id, role, country'),
      supabase && supabase.from('jobs').select('id, status, category'),
      supabase && supabase.from('quotes').select('id, status'),
      supabase && supabase.from('projects').select('id, status'),
      supabase && supabase.from('referrals').select('id, converted, source'),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  try {
    const supabase = createServerClient();
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country');
      supabase.from('jobs').select('id, status, category');
      supabase.from('quotes').select('id, status');
      supabase.from('projects').select('id, status');
      supabase.from('referrals').select('id, converted, source')]);
    const mockIfEmpty = (arr: any[], mock: any[]) => (arr && arr.length ? arr : mock),
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      { id: 43, converted: true, source: 'partner' }]);
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { id: 43, converted: true, source: 'partner' }]);



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const totalUsers = usersData.length;
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;
    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;
<<<<<<< HEAD
<<<<<<< HEAD
    const quotesAccepted = quotesData.filter(q => q.status === 'accepted').length;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const quotesAccepted = quotesData.filter(q => q.status === 'accepted').length;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;

<<<<<<< HEAD
<<<<<<< HEAD
    const geoCounts: Record<string, number> = {}

    const geoCounts: Record<string, number> = {};
    usersData.forEach(u => {
      geoCounts[u.country |'Unknown'] =
        (geoCounts[u.country |'Unknown'] |0) + 1;
    });
    res.status(200).json({
      totals: { totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects }
      topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }));
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    res && res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 };
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2
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
;
    // Replace with your actual tables / queries;
    // Fallback to mock if querying fails;
    const result = await Promise.all_settled ([;
      supabase.from ('users').select ('id, role, country'),
      supabase.from ('jobs').select ('id, status, category'),
      supabase.from ('quotes').select ('id, status'),
      supabase.from ('projects').select ('id, status'),
      supabase.from ('referrals').select ('id, converted, source'),
    ]);
    const [users_r, jobs_r, quotes_r, projects_r, referrals_r] = result;
;
    const users =;
      users_r.status === 'fulfilled' && users_r.value.data;
        ? (users_r.value.data as any[]);
        : [];
    const jobs =;
      jobs_r.status === 'fulfilled' && jobs_r.value.data;
        ? (jobs_r.value.data as any[]);
        : [];
    const quotes =;
      quotes_r.status === 'fulfilled' && quotes_r.value.data;
        ? (quotes_r.value.data as any[]);
        : [];
    const projects =;
      projects_r.status === 'fulfilled' && projects_r.value.data;
        ? (projects_r.value.data as any[]);
        : [];
    const referrals =;
      referrals_r.status === 'fulfilled' && referrals_r.value.data;
        ? (referrals_r.value.data as any[]);
        : [];
;
    const mockIfEmpty = (arr: any[], mock: any[]) =>: any (arr.length ? arr : mock),
    const users_data = mockIfEmpty (users, [;
      { id: 1, role: 'client', country: 'US' },
      { id: 2, role: 'talent', country: 'IN' },
      { id: 3, role: 'talent', country: 'US' },
      { id: 4, role: 'client', country: 'GB' },
    ]);
;
    const jobs_data = mockIfEmpty (jobs, [;
      { id: 11, status: 'posted', category: 'AI / ML' },
      { id: 12, status: 'filled', category: 'Design' },
      { id: 13, status: 'filled', category: 'AI / ML' },
    ]);
;
    const quotes_data = mockIfEmpty (quotes, [;
      { id: 21, status: 'sent' },
      { id: 22, status: 'accepted' },
      { id: 23, status: 'sent' },
    ]);
;
    const projects_data = mockIfEmpty (projects, [;
      { id: 31, status: 'active' },
      { id: 32, status: 'completed' },
      { id: 33, status: 'active' },
    ]);
;
    const referrals_data = mockIfEmpty (referrals, [;
      { id: 41, converted: true, source: 'linkedin' },
      { id: 42, converted: false, source: 'twitter' },
      { id: 43, converted: true, source: 'partner' },
    ]);      { id: 41, converted: true, source: 'linkedin' }
      { id: 42, converted: false, source: 'twitter' }
      { id: 43, converted: true, source: 'partner' }]);
;
    const total_users = users_data.length;
    const total_talents = users_data.filter (u => u.role === 'talent').length;
    const total_clients = users_data.filter (u => u.role === 'client').length;
;
    const jobs_posted = jobs_data.filter (inner_index => j.status === 'posted').length;
    const jobs_filled = jobs_data.filter (inner_index => j.status === 'filled').length;
;
    const quotes_sent = quotes_data.filter (q => q.status === 'sent').length;
    const quotes_accepted = quotes_data.filter (
      q => q.status === 'accepted').length;
;
    const active_projects = projects_data.filter (
      p => p.status === 'active').length;
;
    const category_counts: Record < string, number> = {}
    jobs_data.for_each (inner_index => {
      category_counts[j.category] = (category_counts[j.category] || 0) + 1;
    });
    const referral_conversions = referrals_data.filter (r => r.converted).length;
;
    const geo_counts: Record < string, number> = {}
    const active_projects = projects_data.filter (p => p.status === 'active').length;
;
    const category_counts: Record < string, number> = {}
    jobs_data.for_each (inner_index => { category_counts[j.category] = (category_counts[j.category] || 0) + 1 });
;
    const referral_conversions = referrals_data.filter (r => r.converted).length;
;
    const geo_counts: Record < string, number> = {}
    users_data.for_each (u => {
      geo_counts[u.country || 'Unknown'] =;
        (geo_counts[u.country || 'Unknown'] || 0) + 1;
    });
    res.status (200).json ({
      totals: { total_users, total_talents, total_clients, jobs_posted, jobs_filled, quotes_sent, quotes_accepted, active_projects }
      top_categories: Object.entries (category_counts).sort ((a, b) => b[1] - a[1]).slice (0, 5).map (([label, value]) => ({ label, value }));
      referral_conversions;
      geo: Object.entries (geo_counts).map (([country, value]) => ({ label: country, value }))});
  } catch (e: any) {
    res.status (200).json ({
      totals: { total_users: 4, total_talents: 2, total_clients: 2, jobs_posted: 1, jobs_filled: 2, quotes_sent: 2, quotes_accepted: 1, active_projects: 2 }
      top_categories: [{ label: 'AI / ML', value: 2 }, { label: 'Design', value: 1 }];
      referral_conversions: 2,
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]});
  }
res.status (200).json ({
      totals: {
        total_users,
        total_talents,
        total_clients,
        jobs_posted,
        jobs_filled,
        quotes_sent,
        quotes_accepted,
        active_projects,
      },
      top_categories: Object.entries (category_counts);
        .sort ((a, b) => b[1] - a[1]);
        .slice (0, 5);
        .map (([label, value]) => ({ label, value })),
      referral_conversions,
      geo: Object.entries (geo_counts).map (([country, value]) => ({
        label: country,
        value,
      })),
    });
  } catch (e: any) {
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    });
  } catch (e: any) {

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      totals: {
       totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 
    },
    topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 }
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2

<<<<<<< HEAD
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status (200).json ({
      totals: {
        total_users: 4,
        total_talents: 2,
        total_clients: 2,
        jobs_posted: 1,
        jobs_filled: 2,
        quotes_sent: 2,
        quotes_accepted: 1,
        active_projects: 2,
      },
      top_categories: [;
        { label: 'AI / ML', value: 2 },
        { label: 'Design', value: 1 },
      ],
      referral_conversions: 2,
      geo: [;
        { label: 'US', value: 2 },
        { label: 'IN', value: 1 },
        { label: 'GB', value: 1 },
      ],
    });
  }}
<<<<<<< HEAD
<<<<<<< HEAD



    const geoCounts: Record<string, number> = {};

}
    const geoCounts: Record<string, number> = {};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
