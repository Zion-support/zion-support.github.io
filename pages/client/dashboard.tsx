import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ClientDashboard() {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);

  if (error) return <div className=&quot;text-red-600&quot;>Failed to load</div>;
  if (!data) return <div>Loading…</div>;

  const jobs = data.jobs as any[];

  async function closeJob(id: string) {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Closed' })});
    mutate();
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Your Jobs</h1>
        <Link href=&quot;/post-job&quot;><a className=&quot;px-3 py-2 rounded bg-black text-white text-sm&quot;>Post New Job</Link></Link>
      </div>
      <div className=&quot;grid gap-4&quot;>
        {jobs.length === 0 && <p className=&quot;text-sm text-gray-600&quot;>No jobs yet.</p>}
        {jobs.map((job) => (
          <div key={job.id} className=&quot;border rounded p-4 shadow-sm bg-white dark:bg-gray-900&quot;>
            <div className=&quot;flex items-start justify-between gap-4&quot;>
              <div>
                <h2 className=&quot;text-lg font-medium&quot;>{job.title}</h2>
                <p className=&quot;text-xs text-gray-500 mt-1&quot;>Category: {job.category} • Status: {job.status}</p>
                {job.requiredSkills?.length > 0 && (
                  <div className=&quot;mt-2 flex flex-wrap gap-2&quot;>
                    {job.requiredSkills.map((s: string) => (
                      <span key={s} className=&quot;px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800&quot;>{s}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className=&quot;flex gap-2&quot;>
                <Link href={`/client/jobs/${job.id}/applicants`}><a className=&quot;px-2 py-1 text-sm border rounded&quot;>View Applicants</Link></Link>
                <Link href={`/client/jobs/${job.id}/edit`}><a className=&quot;px-2 py-1 text-sm border rounded&quot;>Edit Job</Link></Link>
                <button className=&quot;px-2 py-1 text-sm border rounded&quot; onClick={() => closeJob(job.id)}>Close Job</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}