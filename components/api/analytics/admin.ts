<<<<<<< HEAD

=======
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
  try {
    const supabase = null;
  try {
    const supabase = createServerClient();

    
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country'),
      supabase.from('jobs').select('id, status, category'),
      supabase.from('quotes').select('id, status'),
      supabase.from('projects').select('id, status'),
      supabase.from('referrals').select('id, converted, source'),
>>>>>>> origin/cursor/delete-old-data-records-6bba

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



const [usersR, jobsR, quotesR, projectsR, referralsR] = result;




    const usersData = mockIfEmpty(users, [
      { id: 1, role: 'client', country: US }'
      { id: 2, role: 'talent, country: IN' }'
      { id: 3, role: talent, country: 'US' }
      { id: 4, role: client', country: 'GB }
    ]);
    const jobsData = mockIfEmpty(jobs, [
      { id: 11, status: 'posted', category: AI/ML }'
      { id: 12, status: 'filled, category: Design' }'
      { id: 13, status: filled, category: 'AI/ML' }
    ]);
    const quotesData = mockIfEmpty(quotes, [
      { id: 21, status: sent' }'
      { id: 22, status: accepted }'
      { id: 23, status: 'sent }
    ]);
    const projectsData = mockIfEmpty(projects, ['
      { id: 31, status: 'active' }'
      { id: 32, status: 'completed' }'
      { id: 33, status: 'active' }
    ]);
    const referralsData = mockIfEmpty(referrals, [

const users =
      usersR && usersR.status === 'fulfilled' && usersR && usersR.value.data;
        ? (usersR && usersR.value.data as any[])
        : [];

const jobs =
      jobsR && jobsR.status === 'fulfilled' && jobsR && jobsR.value.data;
        ? (jobsR && jobsR.value.data as any[])
        : [];

const quotes =
      quotesR && quotesR.status === 'fulfilled' && quotesR && quotesR.value.data;
        ? (quotesR && quotesR.value.data as any[])
        : [];

const projects =
      projectsR && projectsR.status === 'fulfilled' && projectsR && projectsR.value.data;
        ? (projectsR && projectsR.value.data as any[])
        : [];

const referrals =
      referralsR && referralsR.status === 'fulfilled' && referralsR && referralsR.value.data;
        ? (referralsR && referralsR.value.data as any[])
        : [];

const usersData = mockIfEmpty(users, [

      { id: 1, role: 'client',}
  country: 'US',}
}
      { id: 2, role: 'talent',}
  country: 'IN',}
}
      { id: 3, role: 'talent',}
  country: 'US',}
}
      { id: 4, role: 'client',}
  country: 'GB',}
}
    ];
  const jobsData = mockIfEmpty(jobs, [;
      { id: 11, status: 'posted',}
  category: 'AI/ML',}
}
      { id: 12, status: 'filled',}
  category: 'Design',}
}
      { id: 13, status: 'filled',}
  category: 'AI/ML',}
}
    ])const quotesData = mockIfEmpty(quotes, [;
      { id: 21, status: 'sent',}
}
      { id: 22, status: 'accepted',}
}
      { id: 23, status: 'sent',}
}
    ])const projectsData = mockIfEmpty(projects, [;
      { id: 31, status: 'active',}
}
      { id: 32, status: 'completed',}
}
      { id: 33, status: 'active',}
}
    ])const referralsData = mockIfEmpty(referrals, [;
      { id: 41, converted: true, source: 'linkedin',}
},{ id: 42, converted: false, source: 'twitter',}
},{ id: 43, converted: true, source: 'partner',}
},])const totalUsers = usersData.length;

const totalTalents = usersData.filter(u => u.role === 'talent').length;

const totalClients = usersData.filter(u => u.role === 'client').length;

const jobsPosted = jobsData.filter(j => j.status === 'posted').length;

const jobsFilled = jobsData.filter(j => j.status === 'filled').length;

const quotesSent = quotesData.filter(q => q.status === 'sent').length;

const quotesAccepted = quotesData.filter(
      q => q.status === 'accepted'

    ).length;

const activeProjects = projectsData.filter(p => p.status === 'active';
    ).length;

const categoryCounts: Record<string, number    /> = {}
    jobsData.forEach(j => {categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1;}
    })const referralConversions  = referralsData.filter(r => r.converted).length;

const geoCounts: Record<string, number    /> = {}usersData.forEach(u => {geoCounts[u.country || 'Unknown'] =;
        (geoCounts[u.country || 'Unknown'] || 0) + 1;}
}
    });
    res.status(200).json({
      totals: {
        totalUsers,
        totalTalents,
        totalClients,
        jobsPosted,
        jobsFilled,
        quotesSent,
        quotesAccepted,}
        activeProjects,}
      },
      topCategories: Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value })),
      referralConversions,
      geo: Object.entries(geoCounts).map(([country, value]) => ({
        label: country,}
        value,}
      })),
      geo: [{ label: 'US',}
  value: 2,}
}, { label: 'IN',}
  value: 1,}
}, { label: 'GB',}
  value: 1 }]})
  }
   ,
});
  } catch (e: any) {

    res.status (200).json ({
      totals: {
=======
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country');
      supabase.from('jobs').select('id, status, category');
      supabase.from('quotes').select('id, status');
      supabase.from('projects').select('id, status');
      supabase.from('referrals').select('id, converted, source')]);
    const mockIfEmpty = (arr: any[], mock: any[]) => (arr && arr.length ? arr : mock),
    ]);

    const [usersR, jobsR, quotesR, projectsR, referralsR] = result;

const [usersR, jobsR, quotesR, projectsR, referralsR] = result;



    const totalUsers = usersData.length;
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;
    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;


    });
  } catch (e: any) {

    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;
    const geoCounts: Record<string, number> = {};
    usersData.forEach(u => { geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;
    const geoCounts: Record<string, number> = {};
    usersData.forEach(u => {
      geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1;
    });

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
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 }
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2

      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        totalUsers: 4,
        totalTalents: 2,
        totalClients: 2,
        jobsPosted: 1,
        jobsFilled: 2,
        quotesSent: 2,
        quotesAccepted: 1,}
        activeProjects: 2,}
      },
      topCategories: [
        { label: 'AI/ML',}
  value: 2,}
},
        { label: 'Design',}
  value: 1,}
},
      ],
      referralConversions: 2,
      geo: [
        { label: 'US',}
  value: 2,}
},
        { label: 'IN',}
  value: 1,}
},
        { label: 'GB',}
  value: 1,}
},
      ],
    });

<<<<<<< HEAD
  }}

