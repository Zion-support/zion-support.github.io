import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

      supabase
        .from('jobs')
        .select('id, client_id, status, posted_at, hired_at')
        .eq('client_id', clientId)
      supabase
        .from('quotes')
        .select('id, job_id, status, created_at')
        .eq('client_id', clientId)
    ]);
    const jobs =
      jobsR && jobsR.status === 'fulfilled' && jobsR && jobsR.value.data
        ? (jobsR && jobsR.value.data as any[])
        : [];
    const quotes =
      quotesR && quotesR.status === 'fulfilled' && quotesR && quotesR.value.data
        ? (quotesR && quotesR.value.data as any[])
        : [];
    const jobsData = jobs && jobs.length
      ? jobs
      : [
          {
            id: 11
            client_id: 'c1'
            status: 'posted'
            posted_at: '2025-01-01'
          }
          {
            id: 12
            client_id: 'c1'
            status: 'filled'
            posted_at: '2025-01-02'
            hired_at: '2025-01-05'
          }
          {
            id: 13
            client_id: 'c1'
            status: 'filled'
            posted_at: '2025-01-03'
            hired_at: '2025-01-06'
          }
        ];
    const quotesData = quotes && quotes.length
      ? quotes
      : [
          { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' }
          { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }
        ];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient();
    const clientId = (req.query.clientId as string) || null;
    const [jobsR, quotesR] = await Promise.allSettled([
      supabase.from('jobs').select('id, client_id, status, posted_at, hired_at').eq('client_id', clientId);
      supabase.from('quotes').select('id, job_id, status, created_at').eq('client_id', clientId)]);
    const jobs = jobsR.status === 'fulfilled' && jobsR.value.data ? jobsR.value.data as any[] : [];
    const quotes = quotesR.status === 'fulfilled' && quotesR.value.data ? quotesR.value.data as any[] : [];
    const jobsData = jobs.length ? jobs : [
      { id: 11, client_id: 'c1', status: 'posted', posted_at: '2025-01-01' }
      { id: 12, client_id: 'c1', status: 'filled', posted_at: '2025-01-02', hired_at: '2025-01-05' }
      { id: 13, client_id: 'c1', status: 'filled', posted_at: '2025-01-03', hired_at: '2025-01-06' }];
    const quotesData = quotes.length ? quotes : [
      { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' }
      { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }];
    const jobsPosted = jobsData.length;
    const quotesReceived = quotesData.length;
    const filled = jobsData.filter(j => j.status === 'filled');
    const timeToHireDays = filled.length
    const jobs = jobsR && jobsR.status === 'fulfilled' && jobsR && jobsR.value.data ? jobsR && jobsR.value.data as any[] : [];
    const quotes = quotesR && quotesR.status === 'fulfilled' && quotesR && quotesR.value.data ? quotesR && quotesR.value.data as any[] : [];
    const jobsData = jobs && jobs.length ? jobs : [
      { id: 11, client_id: 'c1', status: 'posted', posted_at: '2025-01-01' };
      { id: 12, client_id: 'c1', status: 'filled', posted_at: '2025-01-02', hired_at: '2025-01-05' };
      { id: 13, client_id: 'c1', status: 'filled', posted_at: '2025-01-03', hired_at: '2025-01-06' }];
    const quotesData = quotes && quotes.length ? quotes : [
      { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' };
      { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }];
    const jobsPosted = jobsData && jobsData.length;
    const quotesReceived = quotesData && quotesData.length;
    const filled = jobsData && jobsData.filter(j => j && j.status === 'filled');
    const timeToHireDays = filled && filled.length
      ? filled && filled.reduce(
          (acc, j) =>
            acc +
            (new Date(j && j.hired_at).getTime() - new Date(j && j.posted_at).getTime()) /
              (1000 * 60 * 60 * 24),
          0
        ) / filled && filled.length
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const talentViewed = 12; // Placeholder
    const shortlisted = 5; // Placeholder
    const funnel = [
      },
      { label: 'Hire', value: filled && filled.length },
    ];
      timeToHireDays,
      talent_viewed,
      shortlisted,
      funnel,
    });
  } catch (e) {
      funnel: [
        { label: 'Post', value: 3 }
        { label: 'Invite', value: 2 }

        { label: 'Hire', value: 2 }]})
=======
  }
<<<<<<< HEAD

}


=======
    res.status (200).json ({
      jobs_posted: 3,
      quotes_received: 2,
      timeToHireDays: 3.1,
      talent_viewed: 12,
      shortlisted: 5,
      funnel: [;
        { label: 'Post', value: 3 },
        { label: 'Invite', value: 2 },
        { label: 'Hire', value: 2 },
      ],
    });
  }      jobs_posted: 3;
      quotes_received: 2;
      timeToHireDays: 3.1;
      talent_viewed: 12;
      shortlisted: 5;
      funnel: [;
        { label: 'Post', value: 3 }
        { label: 'Invite', value: 2 }
        { label: 'Hire', value: 2 }]});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
