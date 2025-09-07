<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient();

    const clientId = (req.query.clientId as string) || null;
    
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerClient } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient($2);
    const clientId = $2;
    const [jobsR, quotesR] = await Promise.allSettled([
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
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const supabase = createServerClient();
    const clientId = (req.query.clientId as string) |null
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    const [jobsR, quotesR] = await Promise.allSettled([
      supabase
        .from('jobs')
        .select('id, client_id, status, posted_at, hired_at')
<<<<<<< HEAD
        .eq('client_id', clientId)
=======
<<<<<<< HEAD
        .eq('client_id', clientId),
=======
        .eq('client_id', clientId)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      supabase
        .from('quotes')
        .select('id, job_id, status, created_at')
        .eq('client_id', clientId)
    ]);
<<<<<<< HEAD
=======
<<<<<<< HEAD

    const jobs = jobsR.status === 'fulfilled' && jobsR.value.data
      ? (jobsR.value.data as any[])
      : [];

    const quotes = quotesR.status === 'fulfilled' && quotesR.value.data
      ? (quotesR.value.data as any[])
      : [];

    const jobsData = jobs.length > 0
      ? jobs
      : [
          {
            id: 11,
            client_id: 'c1',
            status: 'posted',
            posted_at: '2025-01-01'
=======
>>>>>>> origin/resolved-merge-conflicts
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
    const talentViewed = 12; // Placeholder
    const shortlisted = 5; // Placeholder
    const funnel = [
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { createServerClient } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
          {'id': 13;
            }
            'client_id': 'c1';'
            'status': 'filled';'
            'posted_at': '2025-01-03';'
            'hired_at': '2025-01-06';'
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

<<<<<<< HEAD
    const jobs = $2;
    const quotes = $2;
    const jobsData = jobs.length ? jobs : [
      { id: 11, client_id: 'c1', status: 'posted', posted_at: '2025-01-01' },
      { id: 12, client_id: 'c1', status: 'filled', posted_at: '2025-01-02', hired_at: '2025-01-05' },
      { id: 13, client_id: 'c1', status: 'filled', posted_at: '2025-01-03', hired_at: '2025-01-06' }],
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      { label: 'Post', value: jobsData && jobsData.length },
      {
        label: 'Invite',
        value: Math && Math.max(shortlisted, Math && Math.floor(jobsData && jobsData.length * 0 && 0.8)),
import { createServerClient } from '../../../utils / supabase / server';
;
export default async /**
 * handler - Function description
 */
function handler() {  try {export default async /**
 * handler - Function description
 */
function handler() {
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          },
          {
            id: 12,
            client_id: 'c1',
            status: 'filled',
<<<<<<< HEAD
            posted_at: '2025 - 01 - 02',
            hired_at: '2025 - 01 - 05',
=======
<<<<<<< HEAD
            posted_at: '2025-01-02',
            hired_at: '2025-01-05'
=======
            posted_at: '2025 - 01 - 02',
            hired_at: '2025 - 01 - 05',
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          },
          {
            id: 13,
            client_id: 'c1',
            status: 'filled',
<<<<<<< HEAD
=======
<<<<<<< HEAD
            posted_at: '2025-01-03',
            hired_at: '2025-01-06'
          }
        ];

    const quotesData = quotes.length > 0
      ? quotes
      : [
          { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' },
          { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }
        ];

    const jobsPosted = jobsData.length;
    const quotesReceived = quotesData.length;
    const filled = jobsData.filter(j => j.status === 'filled');

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

    res.status(200).json({
      jobsPosted,
      quotesReceived,
=======
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
      },
      { label: 'Hire', value: filled && filled.length },
    ];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    const quotesData = quotes.length ? quotes : [
      { id: 21, job_id: 12, status: 'received', created_at: '2025-01-02' },
      { id: 22, job_id: 13, status: 'received', created_at: '2025-01-03' }],

<<<<<<< HEAD
    const jobsPosted = $2;
    const quotesReceived = $2;
    const filled = jobsData.filter($2);
    const timeToHireDays = filled.length
      ? filled.reduce((acc, j) => acc + ((new Date(j.hired_at).getTime() - new Date(j.posted_at).getTime()) / (1000 * 60 * 60 * 24)), 0) / filled.length
      : 0,

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    res.status (200).json ({
      jobs_posted,
      quotes_received,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      timeToHireDays,
      talent_viewed,
      shortlisted,
      funnel,
    });
  } catch (e) {
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ? filled.reduce((acc, j) => acc + ((new Date(j.hired_at).getTime() - new Date(j.posted_at).getTime()) / (1000 * 60 * 60 * 24)), 0) / filled.length
      : 0;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const talentViewed = 12, // Placeholder
    const shortlisted = 5, // Placeholder
    const funnel = [
<<<<<<< HEAD
      { label: 'Post', value: jobsData.length },
      { label: 'Invite', value: Math.max(shortlisted, Math.floor(jobsData.length * 0.8)) },
      { label: 'Hire', value: filled.length }],

=======
      { label: 'Post', value: jobsData.length };
      { label: 'Invite', value: Math.max(shortlisted, Math.floor(jobsData.length * 0.8)) };
      { label: 'Hire', value: filled.length }];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    res.status(200).json({
      jobsPosted,
      quotesReceived,
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
=======
    const supabase = null;

>>>>>>> origin/chore/fix-lint-and-merge
      { label: 'Hire', value: filled && filled.length },
    ];
>>>>>>> merged-prs-20250907-203621
      timeToHireDays,
      talent_viewed,
      shortlisted,
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
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
=======
      jobsPosted: 3, quotesReceived: 2,
      timeToHireDays: 3.1, talentViewed: 12,
      shortlisted: 5,
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      funnel: [
        { label: 'Post', value: 3 }
        { label: 'Invite', value: 2 }
        { label: 'Hire', value: 2 }]})
  }
<<<<<<< HEAD
}
=======

}

=======
    res.status (200).json ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
        { label: 'Hire', value: 2 }
      ]
   
});
  }
        { 'label': 'Hire', 'value': 2 }]})'
  }

        { label: 'Hire', value: 2 }]})
  }
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      timeToHireDays,
      talentViewed,
      shortlisted,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      funnel,
    });
  } catch (e) {
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
=======
>>>>>>> origin/resolved-merge-conflicts


origin/cursor/automate-test-improve-and-merge-code-2533
        { label: 'Post}
  value: 3}
}
<<<<<<< HEAD
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
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
