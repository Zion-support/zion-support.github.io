import useSWR from 'swr';
import Link from 'next/link';

const _fetcher = (_url: string) => fetch(url).then(_(r) => r.json());

export default function ClientDashboard() {_const { data, _error, _mutate} = useSWR('/api/jobs', fetcher);

  if (error) return <div className="text-red-600">Failed to load</div>;
  if (!data) return <div>Loading…</div>;

  const _jobs = data.jobs as any[];

  async function closeJob(_id: string) {_await fetch(`/api/jobs/${id}`, {_method: 'PATCH', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_status: 'Closed'})});
    mutate();
  }

  return (_<div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Jobs</h1>
        <Link href="/post-job"><a className="px-3 py-2 rounded bg-black text-white text-sm">Post New Job</a></Link>
      </div>
      <div className="grid gap-4">
        {_jobs.length === 0 && <p className="text-sm text-gray-600">No jobs yet.</p>}
        {_jobs.map((job) => (_<div key={job.id} className="border rounded p-4 shadow-sm bg-white dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{_job.title}</h2>
                <p className="text-xs text-gray-500 mt-1">Category: {_job.category} • Status: {_job.status}</p>
                {_job.requiredSkills?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.requiredSkills.map((s: string) => (
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{_s}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Link href={_`/client/jobs/${job.id}/applicants`}><a className="px-2 py-1 text-sm border rounded">View Applicants</a></Link>
                <Link href={_`/client/jobs/${job.id}/edit`}><a className="px-2 py-1 text-sm border rounded">Edit Job</a></Link>
                <button className="px-2 py-1 text-sm border rounded" onClick={_() => closeJob(job.id)}>Close Job</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}