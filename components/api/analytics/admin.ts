



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
  }}



  }









