<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse,
  from 'next';
import { createServerClient,
  from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest,,,
  res: NextApiResponse) {
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/chore/fix-lint-and-merge

import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/main
  try {
<<<<<<< HEAD
    const supabase = createServerClient($2);
    const clientId = $2;
    const [jobsR, quotesR] = await Promise.allSettled([
import { createServerClient  } from '../../../utils/supabase/server';
export default async function handler() {try {const supabase = null;
  try {const supabase = createServerClient()const clientId = (req.query.clientId as string) |null;
    const [jobsR, quotesR] = await Promise.allSettled([;
supabase;
        .from('jobs').select('id, client_id, status, posted_at, hired_at').eq('client_id', clientId)supabase;
        .from('quotes').select('id, job_id, status, created_at').eq('client_id', clientId)])const jobs =;
      jobsR.status === 'fulfilled' && jobsR.value.data;
        ? (jobsR.value.data as any[]): [];
    const quotes =;
      quotesR.status === 'fulfilled' && quotesR.value.data;
        ? (quotesR.value.data as any[]): [];
    const jobsData = jobs.length;
      ? jobs;
      : [;
          {id: 11;
            client_id: 'c1';
            status: 'posted';
            posted_at: '2025-01-01';
          }
          {"id": 13;
            }
            "client_id": 'c1';'
            "status": 'filled';'
            "posted_at": '2025-01-03';'
            "hired_at": '2025-01-06';'
          }
        ];
    const quotesData = quotes.length;
      ? quotes;
      : [;
          { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' }
          { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }
        ];const jobsPosted = jobsData.length;
    const quotesReceived = quotesData.length;

    const talentViewed = 12; // Placeholder
    const shortlisted = 5; // Placeholder
      supabase.from('jobs').select('id, client_id, status, posted_at, hired_at').eq($2);
      supabase.from('quotes').select('id, job_id, status, created_at').eq('client_id', clientId)]),

    const jobs = $2;
    const quotes = $2;
    const jobsData = jobs.length ? jobs : [
      { id: 11, client_id: 'c1', status: 'posted', posted_at: '2025-01-01' },
      { id: 12, client_id: 'c1', status: 'filled', posted_at: '2025-01-02', hired_at: '2025-01-05' },
      { id: 13, client_id: 'c1', status: 'filled', posted_at: '2025-01-03', hired_at: '2025-01-06' }],

    const quotesData = quotes.length ? quotes : [
      { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' },
      { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }],

    const jobsPosted = $2;
    const quotesReceived = $2;
    const filled = jobsData.filter($2);
    const timeToHireDays = filled.length
      ? filled.reduce((acc, j) => acc + ((new Date(j.hired_at).getTime() - new Date(j.posted_at).getTime()) / (1000 * 60 * 60 * 24)), 0) / filled.length
      : 0,

    const talentViewed = 12, // Placeholder
    const shortlisted = 5, // Placeholder

    const funnel = [
      { label: 'Post', value: jobsData.length },
      { label: 'Invite', value: Math.max(shortlisted, Math.floor(jobsData.length * 0.8)) },
      { label: 'Hire', value: filled.length }],

    res.status(200).json({
      jobsPosted,
      quotesReceived,
  try {
    const supabase = createServerClient();
<<<<<<< HEAD

const clientId = (req.query.clientId as string) |null;
   ;
  const [jobsR, quotesR] = await Promise.allSettled([
supabase;,,
  .from('jobs')
        .select('id, client_id, status, posted_at,,,
  hired_at')
        .eq('client_id',,,
  clientId)
      supabase;
=======
    const clientId = (req.query.clientId as string) |null
    const [jobsR, quotesR] = await Promise.allSettled([
supabase
        .from('jobs')
        .select('id, client_id, status, posted_at, hired_at')
        .eq('client_id', clientId)
      supabase
>>>>>>> origin/main
        .from('quotes')
        .select('id, job_id, status,,,
  created_at')
        .eq('client_id',,,
  clientId)
    ]);
    const jobs =
      jobsR.status === 'fulfilled' && jobsR.value.data
        ? (jobsR.value.data as any[])
        : [];
    const quotes =
      quotesR.status === 'fulfilled' && quotesR.value.data
        ? (quotesR.value.data as any[])
        : [];
    const jobsData = jobs.length
      ? jobs
      : [
          {
            id: 11
            client_id: 'c1'
            status: 'posted'
            posted_at: '2025-01-01'
          }
<<<<<<< HEAD
          {id: 13;
            client_id: 'c1';
            status: 'filled';
            posted_at: '2025-01-03';}
            hired_at: '2025-01-06';];

const quotesData = quotes.length;
      ? quotes;
      : [;
          { id: 21, job_id: 12, status: 'received',}
  created_at: '2025-01-02',}
}
          { id: 22, job_id: 13, status: 'received',}
  created_at: '2025-01-03',];
=======
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
    const quotesData = quotes.length
      ? quotes
      : [
          { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' }
          { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }
        ];
>>>>>>> origin/main

const jobsPosted = jobsData.length;

const quotesReceived = quotesData.length;

const filled = jobsData.filter(j => { return j.status === 'filled'); }'

const timeToHireDays = filled.length;
? filled.reduce((acc,,,
  j) =>
            acc +
            (new Date(j.hired_at).getTime() - new Date(j.posted_at).getTime()) /
              (1000 * 60 * 60 * 24)
          0
        ) / filled.length
   ;
const talentViewed = 12; // Placeholder;
const shortlisted = 5; // Placeholder;
const funnel = [;
      },
<<<<<<< HEAD
      { label: 'Hire',}
  value: filled && filled.length,];
=======
=======
    const supabase = null;

>>>>>>> origin/chore/fix-lint-and-merge
      { label: 'Hire', value: filled && filled.length },
    ];
>>>>>>> origin/main
      timeToHireDays,
      talent_viewed,
      shortlisted,
<<<<<<< HEAD
      funnel})
  } catch (e) {
      { label: 'Post', value: jobsData.length }
      {
        label: 'Invite'
        value: Math.max(shortlisted, Math.floor(jobsData.length * 0.8))
      }
      { label: 'Hire', value: filled.length }
    ];
    res.status(200).json({
      jobsPosted
      quotesReceived
      timeToHireDays
      talentViewed
      shortlisted
      funnel
    });
  } catch (e) {
    res.status(200).json({
      jobsPosted: 3
      quotesReceived: 2
      timeToHireDays: 3.1
      talentViewed: 12
      shortlisted: 5
      funnel: [
        { label: 'Post', value: 3 }
        { label: 'Invite', value: 2 }
'
        { label: 'Hire', value: 2 }]})
=======
      funnel,
    });
>>>>>>> origin/chore/fix-lint-and-merge
  } catch (e) {}
      funnel: ['
        { label: 'Post', value: 3 }'
        { label: 'Invite', value: 2 }
'
<<<<<<< HEAD
        { label: 'Hire', value: 2 }]})
  }
    res.status (200).json ({}
      jobs_posted: 3,
      quotes_received: 2,
      timeToHireDays: 3.1,
      talent_viewed: 12,
      shortlisted: 5,
      funnel: [;'
        { label: 'Post', value: 3 },'
        { label: 'Invite', value: 2 },'
        { label: 'Hire', value: 2 },
      ],
    });
  }      jobs_posted: 3;
      quotes_received: 2;
      timeToHireDays: 3.1;
      talent_viewed: 12;
      shortlisted: 5;
      funnel: [;'
        { label: 'Post', value: 3 }'
        { label: 'Invite', value: 2 }'
        { label: 'Hire', value: 2 }]});
  }
        { label: 'Hire', value: 2 }
      ]
   
});
  }
        { "label": 'Hire', "value": 2 }]})'
  }

        { label: 'Hire', value: 2 }]})
  }
      timeToHireDays,
      talentViewed,
      shortlisted,


origin/cursor/automate-test-improve-and-merge-code-2533
        { label: 'Post}
  value: 3}
}
'



        { label: Hire', value: 2 }]})
  }
        { label: 'Hire'}
  value: 2 }]})
  }}
=======
        { label: 'Hire', value: 2 }]})
  }
    res.status (200).json ({}
      jobs_posted: 3,
      quotes_received: 2,
      timeToHireDays: 3.1,
      talent_viewed: 12,
      shortlisted: 5,
      funnel: [;'
        { label: 'Post', value: 3 },'
        { label: 'Invite', value: 2 },'
        { label: 'Hire', value: 2 },
      ],
    });
  }      jobs_posted: 3;
      quotes_received: 2;
      timeToHireDays: 3.1;
      talent_viewed: 12;
      shortlisted: 5;
      funnel: [;'
        { label: 'Post', value: 3 }'
        { label: 'Invite', value: 2 }'
        { label: 'Hire', value: 2 }]});
  }
        { label: 'Hire', value: 2 }
      ]
    });
  }
        { label: 'Hire', value: 2 }]})
  }

origin/cursor/automate-test-improve-and-merge-code-2533
        { label: 'Post',}
  value: 3,}
}
<<<<<<< HEAD
        { label: 'Invite',}
  value: 2,}
}

        { label: 'Hire',}
  value: 2 ]
   ,
});
  }
        { label: 'Hire',}
  value: 2 }]})
  },
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
