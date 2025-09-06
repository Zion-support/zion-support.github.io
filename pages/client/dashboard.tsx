import useSWR from 'swr';
import Link from 'next/link';
<<<<<<< HEAD

<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function ClientDashboard() {
=======
const fetcher = (url: string) => fetch(url).then(r => r && r.json()),;

export default function ClientDashboard() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);
  if (error) return <div className='text-red-600'>Failed to load</div>;  if (!data) return <div>Loading…</div>;
<<<<<<< HEAD
=======
const fetcher = (url: string) => fetch(url).then((r) => r.json()),
export default function ClientDashboard() {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);

  if (error) return <div className="text-red-600">Failed to load</div>;
  if (!data) return <div>Loading…</div>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const jobs = data.jobs as any[];
  async function closeJob(id: string) {
    await fetch(`/api/jobs/${id}`, {
<<<<<<< HEAD
      method: 'PATCH'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ status: 'Closed' })
=======

  const jobs = data && data.jobs as any[];

  async function closeJob(): any (id: string) {;
    await fetch(`/api/jobs/${id}`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ status: 'Closed' }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    mutate();

  }
  return (
    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-2xl font-semibold'>Your Jobs</h1>;
        <Link href='/post-job'>;
          <a className='px-3 py-2 rounded bg-black text-white text-sm'>;
            Post New Job;
          </a>;
        </Link>;
      </div>;
      <div className='grid gap-4'>;
        {jobs && jobs.length === 0 && (;
          <p className='text-sm text-gray-600'>No jobs yet.</p>;
        )}
        {jobs && jobs.map(job => (;
          <div
            key={job && job.id}
            className='border rounded p-4 shadow-sm bg-white dark:bg-gray-900'>;
            <div className='flex items-start justify-between gap-4'>;
              <div>;
                <h2 className='text-lg font-medium'>{job && job.title}</h2>;
                <p className='text-xs text-gray-500 mt-1'>;
                  Category: {job && job.category} • Status: {job && job.status}
                </p>;
                {job && job.requiredSkills?.length > 0 && (;
                  <div className='mt-2 flex flex-wrap gap-2'>;
                    {job && job.requiredSkills.map((s: string) => (;
                      <span
                        key={s}
                        className='px-2 py-0 && 0.5 text-xs rounded bg-gray-100 dark:bg-gray-800'>;
                        {s}
                      </span>                    ))}
                  </div>;
                )}
              </div>;
              <div className='flex gap-2'>;
                <Link href={`/client/jobs/${job && job.id}/applicants`}>;
                  <a className='px-2 py-1 text-sm border rounded'>;
                    View Applicants;
                  </a>;
                </Link>;
                <Link href={`/client/jobs/${job && job.id}/edit`}>;
                  <a className='px-2 py-1 text-sm border rounded'>Edit Job</a>;
                </Link>;
                <button
                  className='px-2 py-1 text-sm border rounded'
                  onClick={() => closeJob(job && job.id)}
                >;
                  Close Job;
                </button>              </div>;
            </div>;
          </div>;
=======
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Closed' })}),
    mutate()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Jobs</h1>
        <Link href="/post-job"><a className="px-3 py-2 rounded bg-black text-white text-sm">Post New Job</a></Link>
      </div>
      <div className="grid gap-4">
        {jobs.length === 0 && <p className="text-sm text-gray-600">No jobs yet.</p>}
        {jobs.map((job) => (
          <div key={job.id} className="border rounded p-4 shadow-sm bg-white dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{job.title}</h2>
                <p className="text-xs text-gray-500 mt-1">Category: {job.category} • Status: {job.status}</p>
                {job.requiredSkills?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.requiredSkills.map((s: string) => (
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{s}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Link href={`/client/jobs/${job.id}/applicants`}><a className="px-2 py-1 text-sm border rounded">View Applicants</a></Link>
                <Link href={`/client/jobs/${job.id}/edit`}><a className="px-2 py-1 text-sm border rounded">Edit Job</a></Link>
                <button className="px-2 py-1 text-sm border rounded" onClick={() => closeJob(job.id)}>Close Job</button>
              </div>
            </div>
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        ))}
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
);
=======
      </div>;
    </div>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
