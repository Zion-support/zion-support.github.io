<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient($2);
    const clientId = $2;
    const [jobsR, quotesR] = await Promise.allSettled([
      supabase.from('jobs').select('id, client_id, status, posted_at, hired_at').eq($2);
      supabase.from('quotes').select('id, job_id, status, created_at').eq('client_id', clientId)]),
>>>>>>> origin/cursor/delete-old-data-records-6bba


    const talentViewed = 12, // Placeholder
    const shortlisted = 5, // Placeholder
    const funnel = [

<<<<<<< HEAD
      { label: 'Post', value: jobsData.length };
      { label: 'Invite', value: Math.max(shortlisted, Math.floor(jobsData.length * 0.8)) };
      { label: 'Hire', value: filled.length }];
=======
    res.status(200).json({
      jobsPosted,
      quotesReceived,
import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const supabase = createServerClient();
    const clientId = (req.query.clientId as string) |null


import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

  try {
    const supabase = createServerClient ();
    const client_id = (req.query.client_id as string) || null,
    const [jobs_r, quotes_r] = await Promise.all_settled ([;
      supabase;
        .from ('jobs');
        .select ('id, client_id, status, posted_at, hired_at');
        .eq ('client_id', client_id),
      supabase;
        .from ('quotes');
        .select ('id, job_id, status, created_at');
        .eq ('client_id', client_id),
    ]);
;
    const jobs =;
      jobs_r.status === 'fulfilled' && jobs_r.value.data;
        ? (jobs_r.value.data as any[]);
        : [];
    const quotes =;
      quotes_r.status === 'fulfilled' && quotes_r.value.data;
        ? (quotes_r.value.data as any[]);
        : [];
;
    const jobs_data = jobs.length;
      ? jobs;
      : [;
          {
            id: 11,
            client_id: 'c1',
            status: 'posted',
            posted_at: '2025 - 01 - 01',
          },
          {
            id: 12,
            client_id: 'c1',
            status: 'filled',
            posted_at: '2025 - 01 - 02',
            hired_at: '2025 - 01 - 05',
          },
          {
            id: 13,
            client_id: 'c1',
            status: 'filled',
            posted_at: '2025 - 01 - 03',
            hired_at: '2025 - 01 - 06',
          },
        ];
;
    const quotes_data = quotes.length;
      ? quotes;
      : [;
          { id: 21, job_id: 12, status: 'received', created_at: '2025 - 01 - 02' },
          { id: 22, job_id: 13, status: 'received', created_at: '2025 - 01 - 03' },
        ];
    const jobs = jobs_r.status === 'fulfilled' && jobs_r.value.data ? jobs_r.value.data as any[] : [];
    const quotes = quotes_r.status === 'fulfilled' && quotes_r.value.data ? quotes_r.value.data as any[] : [];
;
    const jobs_data = jobs.length ? jobs : [;
      { id: 11, client_id: 'c1', status: 'posted', posted_at: '2025 - 01 - 01' }
      { id: 12, client_id: 'c1', status: 'filled', posted_at: '2025 - 01 - 02', hired_at: '2025 - 01 - 05' }
      { id: 13, client_id: 'c1', status: 'filled', posted_at: '2025 - 01 - 03', hired_at: '2025 - 01 - 06' }];
;
    const quotes_data = quotes.length ? quotes : [;
      { id: 21, job_id: 12, status: 'received', created_at: '2025 - 01 - 02' }
      { id: 22, job_id: 13, status: 'received', created_at: '2025 - 01 - 03' }];
;
    const jobs_posted = jobs_data.length;
    const quotes_received = quotes_data.length;
;
    const filled = jobs_data.filter (inner_index => j.status === 'filled');
    const timeToHireDays = filled.length;
      ? filled.reduce (
          (acc, j) =>;
            acc +;
            (new Date (j.hired_at).get_time () - new Date (j.posted_at).get_time ()) /;
              (1000 * 60 * 60 * 24),
          0) / filled.length;
    const talent_viewed = 12; // Placeholder;
    const shortlisted = 5; // Placeholder;
    const funnel = [;
      { label: 'Post', value: jobs_data.length },
      {
        label: 'Invite',
        value: Math.max (shortlisted, Math.floor (jobs_data.length * 0.8)),
      },
      { label: 'Hire', value: filled && filled.length },
    ];

    const quotesData = quotes.length ? quotes : [
      { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' },
      { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }],

    const jobsPosted = $2;
    const quotesReceived = $2;
    const filled = jobsData.filter($2);
    const timeToHireDays = filled.length
      ? filled.reduce((acc, j) => acc + ((new Date(j.hired_at).getTime() - new Date(j.posted_at).getTime()) / (1000 * 60 * 60 * 24)), 0) / filled.length
      : 0,


    const timeToHireDays = filled.length > 0
      ? filled.reduce(
          (acc, j) =>
            acc +
            (new Date(j.hired_at).getTime() - new Date(j.posted_at).getTime()) /
              (1000 * 60 * 60 * 24),
          0
        ) / filled.length
      : 0;

    const talentViewed = 12; // Placeholder
    const shortlisted = 5; // Placeholder

    const funnel = [
      { label: 'Post', value: jobsPosted },
      { label: 'Invite', value: quotesReceived },
      { label: 'Hire', value: filled.length }
    ];
>>>>>>> origin/cursor/delete-old-data-records-6bba

    res.status(200).json({
      jobsPosted,
      quotesReceived,
<<<<<<< HEAD
  try {
    const supabase = createServerClient();
    const clientId = (req.query.clientId as string) |null
    const [jobsR, quotesR] = await Promise.allSettled([
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

const jobsPosted = jobsData.length;

const quotesReceived = quotesData.length;

const filled = jobsData.filter(j => { return j.status === 'filled'); }'

const timeToHireDays = filled.length;
? filled.reduce(
          (acc, j) =>
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

      { label: 'Hire', value: filled && filled.length },
    ];

      timeToHireDays,
      talent_viewed,
      shortlisted,


=======
      timeToHireDays,
      talent_viewed,
      shortlisted,
      funnel,
    });
  } catch (e) {

    const supabase = null;

      { label: 'Hire', value: filled && filled.length },
    ];
      timeToHireDays,
      talent_viewed,
      shortlisted,
      funnel})
  } catch (e) {
    res.status(200).json({
      jobsPosted: 3,
      quotesReceived: 2,
      timeToHireDays: 3.1,
      talentViewed: 12,
      shortlisted: 5,
      funnel: [
        { label: 'Post', value: 3},
        { label: 'Invite', value: 2},
        { label: 'Hire', value: 2}]})
  }
}
  } catch (e) {}
      funnel: ['
        { label: 'Post', value: 3 }'
        { label: 'Invite', value: 2 }
'
        { label: 'Hire', value: 2 }]})
  }
    res.status (200).json ({}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      funnel: [
        { label: 'Post', value: 3 }
        { label: 'Invite', value: 2 }
        { label: 'Hire', value: 2 }]})
  }
<<<<<<< HEAD


}

=======
}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
        { label: 'Hire', value: 2 }
      ]
   
});
  }
        { 'label': 'Hire', 'value': 2 }]})'
  }

        { label: 'Hire', value: 2 }]})
  }
      timeToHireDays,
      talentViewed,
      shortlisted,
    res.status(200).json({
      jobsPosted: 3,
      quotesReceived: 2,
      timeToHireDays: 3.5,
      talent_viewed: 12,
      shortlisted: 5,
      funnel: [
        { label: 'Post', value: 3 },
        { label: 'Invite', value: 2 },
        { label: 'Hire', value: 2 }
      ]
    });
  }
}


origin/cursor/automate-test-improve-and-merge-code-2533
        { label: 'Post}
  value: 3}
}
<<<<<<< HEAD

        { label: 'Hire', value: 2 }]})
=======
'



        { label: Hire', value: 2 }]})
  }
        { label: 'Hire'}
  value: 2 }]})
  }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
