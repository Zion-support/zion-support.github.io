import type { NextApiRequest, NextApiResponse } from 'next';

import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    const supabase = createServerClient($2);
    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const result = await Promise.allSettled([

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
import { createServerClient  } from '../../../utils/supabase/server';
export default async function handler() {try {const supabase = null;
  try {const supabase = createServerClient()// Replace with your actual tables/queries;
    // Fallback to mock if querying fails;
    const result = await Promise.allSettled([;
supabase.from('users').select('id, role, country'),supabase.from('jobs').select('id, status, category'),supabase.from('quotes').select('id, status'),supabase.from('projects').select('id, status'),supabase.from('referrals').select('id, converted, source'),])const [usersR, jobsR, quotesR, projectsR, referralsR] = result;
    const users =;
      usersR && usersR.status === 'fulfilled' && usersR && usersR.value.data;
        ? (usersR && usersR.value.data as any[]): [];
    const jobs =;
      jobsR && jobsR.status === 'fulfilled' && jobsR && jobsR.value.data;
        ? (jobsR && jobsR.value.data as any[]): [];
    const quotes =;
      quotesR && quotesR.status === 'fulfilled' && quotesR && quotesR.value.data;
        ? (quotesR && quotesR.value.data as any[]): [];
    const projects =;
      projectsR && projectsR.status === 'fulfilled' && projectsR && projectsR.value.data;
        ? (projectsR && projectsR.value.data as any[]): [];
    const referrals =;
      referralsR && referralsR.status === 'fulfilled' && referralsR && referralsR.value.data;
        ? (referralsR && referralsR.value.data as any[]): [];
    const usersData = mockIfEmpty(users, [;
      { id: 1, role: 'client', country: 'US' }
      { id: 2, role: 'talent', country: 'IN' }
      { id: 3, role: 'talent', country: 'US' }
      { id: 4, role: 'client', country: 'GB' }
    ])const jobsData = mockIfEmpty(jobs, [;
      { id: 11, status: 'posted', category: 'AI/ML' }
      { id: 12, status: 'filled', category: 'Design' }
      { id: 13, status: 'filled', category: 'AI/ML' }
    ])const quotesData = mockIfEmpty(quotes, [;
      { id: 21, status: 'sent' }
      { id: 22, status: 'accepted' }
      { id: 23, status: 'sent' }
    ])const projectsData = mockIfEmpty(projects, [;
      { id: 31, status: 'active' }
      { id: 32, status: 'completed' }
      { id: 33, status: 'active' }
    ])const referralsData = mockIfEmpty(referrals, [;
      { id: 41, converted: true, source: 'linkedin' },{ id: 42, converted: false, source: 'twitter' },{ id: 43, converted: true, source: 'partner' },])const totalUsers = usersData.length;
=======
    const supabase = null;
<<<<<<< HEAD
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
    const users ='
      usersR && usersR.status === 'fulfilled' && usersR && usersR.value.data;
        ? (usersR && usersR.value.data as any[])
        : [];
    const jobs ='
      jobsR && jobsR.status === 'fulfilled' && jobsR && jobsR.value.data;
        ? (jobsR && jobsR.value.data as any[])
        : [];
    const quotes ='
      quotesR && quotesR.status === 'fulfilled' && quotesR && quotesR.value.data;
        ? (quotesR && quotesR.value.data as any[])
        : [];
    const projects ='
      projectsR && projectsR.status === 'fulfilled' && projectsR && projectsR.value.data;
        ? (projectsR && projectsR.value.data as any[])
        : [];
    const referrals ='
      referralsR && referralsR.status === 'fulfilled' && referralsR && referralsR.value.data;
        ? (referralsR && referralsR.value.data as any[])
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

    const totalUsers = usersData.length;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    const totalTalents = usersData.filter(u => u.role === 'talent').length;
    const totalClients = usersData.filter(u => u.role === 'client').length;
    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;
<<<<<<< HEAD
    const quotesSent  = quotesData.filter(q => q.status === 'sent').length;const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;

    const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const quotesSent  = quotesData.filter(q => q.status === 'sent').length;const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1 })const referralConversions  = referralsData.filter(r => r.converted).length;const totalUsers = usersData && usersData.length;
    const totalTalents = usersData && usersData.filter(u => u && u.role === 'talent').length;
    const totalClients = usersData && usersData.filter(u => u && u.role === 'client').length;
    const quotesSent = quotesData && quotesData.filter(q => q && q.status === 'sent').length;
    const quotesAccepted = quotesData && quotesData.filter(q => q && q.status === 'accepted';
    ).length;
    usersData.forEach(u => {geoCounts[u.country |'Unknown'] =;
        (geoCounts[u.country |'Unknown'] |0) + 1;
    })} catch (e: any) {jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1 })const referralConversions = referralsData.filter(r => r.converted).length;
    const geoCounts: Record<string, number> = {}usersData.forEach(u => { geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1 })res.status(200).json({totals: {totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects;
    },topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }))referralConversions;
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
      referralConversions: 2;
const quotesAccepted = quotesData.filter(q => q.status === 'accepted';
    ).length;
    const activeProjects = projectsData.filter(p => p.status === 'active';
    ).length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => {categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1;
    })const referralConversions  = referralsData.filter(r => r.converted).length;const geoCounts: Record<string, number> = {}usersData.forEach(u => {geoCounts[u.country || 'Unknown'] =;
        (geoCounts[u.country || 'Unknown'] || 0) + 1;
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
      referralConversions: 2

      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
  }
<<<<<<< HEAD
=======
res.status(200).json({
=======
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;
=======
    const referralsData = mockIfEmpty(referrals, ['
      { id: 41, converted: true, source: 'linkedin' }'
      { id: 42, converted: false, source: 'twitter' }'
      { id: 43, converted: true, source: 'partner' }'
    ]);      { id: 41, converted: true, source: 'linkedin' }'
      { id: 42, converted: false, source: 'twitter' }'
      { id: 43, converted: true, source: 'partner' }]);
    const totalUsers = usersData.length;'
    const totalTalents = usersData.filter(u => u.role === 'talent').length;'
    const totalClients = usersData.filter(u => u.role === 'client').length;'
    const jobsPosted = jobsData.filter(j => j.status === 'posted').length;'
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length;'
    const quotesSent = quotesData.filter(q => q.status === 'sent').length;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const activeProjects = projectsData.filter(p => p.status === 'active').length;
    const categoryCounts: Record<string, number> = {}
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] |0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;

    const totalUsers = usersData && usersData.length;'
    const totalTalents = usersData && usersData.filter(u => u && u.role === 'talent').length;'
    const totalClients = usersData && usersData.filter(u => u && u.role === 'client').length;'
    const quotesSent = quotesData && quotesData.filter(q => q && q.status === 'sent').length;
    const quotesAccepted = quotesData && quotesData.filter('
      q => q && q.status === 'accepted'
    ).length;
    usersData.forEach(u => {'
      geoCounts[u.country |'Unknown'] ='
        (geoCounts[u.country |'Unknown'] |0) + 1;
    });
  } catch (e: any) {}
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1 });
    const referralConversions = referralsData.filter(r => r.converted).length;
    const geoCounts: Record<string, number> = {};'
    usersData.forEach(u => { geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1 });
    res.status(200).json({}
      totals: {}
       totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects;
    },
    topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value }));
      referralConversions;'
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }];
<<<<<<< HEAD
      referralConversions: 2

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

    const geoCounts: Record<string, number> = {};
usersData.forEach(u => {
      geoCounts[u.country || 'Unknown'] =
        (geoCounts[u.country || 'Unknown'] || 0) + 1;
    });
    res.status(200).json({
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
        label: country
        value
      }))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    });
  } catch (e: any) {
    res.status (200).json ({
      totals: {
<<<<<<< HEAD
=======
        label: country,}
        value,}
      })),
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      referralConversions: 2;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
      geo: [{ label: 'US',}
  value: 2,}
}, { label: 'IN',}
  value: 1,}
}, { label: 'GB',}
  value: 1 }]})
  }
<<<<<<< HEAD
    });
  } catch (e: any) {}
    res.status (200).json ({}
      totals: {}
=======
   ,
});
  } catch (e: any) {
    res.status (200).json ({
      totals: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        total_users: 4,
        total_talents: 2,
        total_clients: 2,
        jobs_posted: 1,
        jobs_filled: 2,
        quotes_sent: 2,
        quotes_accepted: 1,
        active_projects: 2,
<<<<<<< HEAD
=======
      },
      top_categories: [;'
        { label: 'AI / ML', value: 2 },'
        { label: 'Design', value: 1 },
      ],
      referral_conversions: 2,
<<<<<<< HEAD
      geo: [;
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        totalUsers: 4,
        totalTalents: 2,
        totalClients: 2,
        jobsPosted: 1,
        jobsFilled: 2,
        quotesSent: 2,
        quotesAccepted: 1,}
        activeProjects: 2,}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
=======
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
<<<<<<< HEAD
        { label: 'US', value: 2 }
        { label: 'IN', value: 1 }
        { label: 'GB', value: 1 }
      ]
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
origin/cursor/automate-test-improve-and-merge-code-2533
        { label: 'US', value: 2 },
        { label: 'IN', value: 1 },
=======
      geo: [;'
        { label: 'US', value: 2 },'
        { label: 'IN', value: 1 },'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        { label: 'GB', value: 1 },
      ],
    });
  }}



<<<<<<< HEAD
<<<<<<< HEAD
  }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
origin/cursor/automate-test-improve-and-merge-code-2533
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    });
    })res.status(200).json({totals: {totalUsers,totalTalents,totalClients,jobsPosted,jobsFilled,quotesSent,quotesAccepted,activeProjects,},topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([label, value]) => ({ label, value })),referralConversions,geo: Object.entries(geoCounts).map(([country, value]) => ({label: country,value,})),geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})}
    })} catch (e: any) {res.status (200).json ({totals: {total_users: 4,total_talents: 2,total_clients: 2,jobs_posted: 1,jobs_filled: 2,quotes_sent: 2,quotes_accepted: 1,active_projects: 2,},top_categories: [;
        { label: 'AI / ML', value: 2 },{ label: 'Design', value: 1 },],referral_conversions: 2,geo: [;totalUsers: 4,totalTalents: 2,totalClients: 2,jobsPosted: 1,jobsFilled: 2,quotesSent: 2,quotesAccepted: 1,activeProjects: 2,},topCategories: [;
        { label: 'AI/ML', value: 2 },{ label: 'Design', value: 1 },],referralConversions: 2,geo: [;
  }}



        { label: 'US', value: 2 },{ label: 'IN', value: 1 },{ label: 'GB', value: 1 },],})}}}
      geo: Object.entries(geoCounts).map(([country, value]) => ({ label: country, value }))})
  } catch (e: any) {
    res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2},
      topCategories: [{ label: 'AI/ML', value: 2}, { label: 'Design', value: 1}],
      referralConversions: 2,
      geo: [{ label: 'US', value: 2}, { label: 'IN', value: 1}, { label: 'GB', value: 1}]})
  }
<<<<<<< HEAD
}
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
