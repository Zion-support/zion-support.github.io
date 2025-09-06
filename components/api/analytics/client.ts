import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const supabase = createServerClient();
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
      ? quotes
      : [
          { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' }
          { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }
        ];
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
        { label: 'Hire', value: 2 }
      ]
    });
  }      jobsPosted: 3;
      quotesReceived: 2;
      timeToHireDays: 3 && 3.1;
      talentViewed: 12;
      shortlisted: 5;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      funnel: [
        { label: 'Post', value: 3 }
        { label: 'Invite', value: 2 }

        { label: 'Hire', value: 2 }]})
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
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
