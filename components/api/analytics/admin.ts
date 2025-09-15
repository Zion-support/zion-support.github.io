import type { NextApiRequest, NextApiResponse } from 'next';

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

    const totalUsers = usersData.length;
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;
