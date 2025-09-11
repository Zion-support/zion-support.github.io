import type { NextApiRequest, NextApiResponse } from 'next';
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

  try {
    const supabase = createServerClient();
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    });
  } catch (e: any) {

=======
==============    res.status (200).json ({
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


    const geoCounts: Record<string, number> = {};

}
    const geoCounts: Record<string, number> = {};
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
