import type { NextApiRequest, NextApiResponse } from 'next';

=======

  try {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    const supabase = createServerClient();
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails


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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      { id: 43, converted: true, source: 'partner' }]);



    const totalUsers = usersData.length;
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;
    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;

    const quotesAccepted = quotesData.filter(q => q.status === 'accepted').length;


    const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;

    usersData.forEach(u => {
      geoCounts[u.country |'Unknown'] =
        (geoCounts[u.country |'Unknown'] |0) + 1;
    });
    res.status(200).json({
      totals: { totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects }
      topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }));
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

    });
  } catch (e: any) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
