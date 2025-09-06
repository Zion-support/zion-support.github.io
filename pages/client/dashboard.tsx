<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default function ClientDashboard() {;
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  if (error) return <div className='text-red-600'>Failed to load</div>;  if (!data) return <div>Loading…</div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const jobs = data.jobs as any[];

import useSWR from 'swr'
import Link from 'next/link'
const fetcher = (url: string) => fetch(url).then((r) => r.json())
export default function ClientDashboard() {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher),
  if (error) return <div className="text-red-600">Failed to load</div>,
  if (!data) return <div>Loading…</div>,
  if (error) return <div className="text-red-600">Failed to load</div>,
  if (!data) return <div>Loading…</div>,
  const jobs = data.jobs as any[]
  async function closeJob(id: string) {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Closed' })}),
    mutate()
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  }
}
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Jobs</h1>
        <Link href="/post-job"><a className="px-3 py-2 rounded bg-black text-white text-sm">Post New Job</Link></Link>
      </div>
      <div className="grid gap-4">
        {jobs.length === 0 && <p className="text-sm text-gray-600">No jobs yet.</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {jobs.map((job) => (
          <div key={job.id} className="border rounded p-4 shadow-sm bg-white dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{job.title}</h2>
                <p className="text-xs text-gray-500 mt-1">Category: {job.category} • Status: {job.status}</p>
                {job.requiredSkills?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.requiredSkills.map((s: string) => (
                      <span
                        key={s}
                        className='px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800'
                      >
                        {s}
                      </span>                    ))}
                  </div>
                )}
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{s}</span>
import useSWR from 'swr';
import Link from 'next/link';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function ClientDashboard(req, res) {
  try {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);
  if (error) return <div className="text-red-600">Failed to load</div>,;
  if (!data) return <div>Loading…</div>,;
  const jobs = data.jobs as any[];
  async function closeJob(id: string) {;
    await fetch(`/api/jobs/${id}`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ status: 'Closed' })});
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);

      </div>;
    </div>;
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  )
}
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 2xl font - semibold'>Your Jobs</h1>;
        <Link href='/post - job'>;
          <a className='px - 3 py - 2 rounded bg - black text - white text - sm'>;
            Post New Job;
          </a>;
        </Link>;
      </div>;
      <div className='grid gap - 4'>;
        {jobs.length === 0 && (
          <p className='text - sm text - gray - 600'>No jobs yet.</p>)}
        {jobs.map (job => (
          <div;
            key={job.id}
            className='border rounded p - 4 shadow - sm bg - white dark:bg - gray - 900';
          >;
            <div className='flex items - start justify - between gap - 4'>;
              <div>;
                <h2 className='text - lg font - medium'>{job.title}</h2>;
                <p className='text - xs text - gray - 500 mt - 1'>;
                  Category: {job.category} • Status: {job.status}
                </p>;
                {job.required_skills?.length > 0 && (
                  <div className='mt - 2 flex flex - wrap gap - 2'>;
                    {job.required_skills.map ((string: string) => (
                      <span;
                        key={s}
                        className='px - 2 py - 0.5 text - xs rounded bg - gray - 100 dark:bg - gray - 800';
                      >;
                        {s}
                      </span>                    ))}
                  </div>)}
              </div>;
              <div className='flex gap - 2'>;
                <Link href={`/client / jobs/${job.id}/applicants`}>;
                  <a className='px - 2 py - 1 text - sm border rounded'>;
                    View Applicants;
                  </a>;
                </Link>;
                <Link href={`/client / jobs/${job.id}/edit`}>;
                  <a className='px - 2 py - 1 text - sm border rounded'>Edit Job</a>;
                </Link>;
                <button;
                  className='px - 2 py - 1 text - sm border rounded';
                  on_click={() => close_job (job.id)}
                >;
                  Close Job;
                </button>              </div>;
            </div>;
          </div>))}
      </div>;
    </div>);
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              </div>
            </div>
          </div>


}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import Link from 'next / link';
;
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export default /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
  const { data, error, mutate } = useSWR ('/api / jobs', fetcher);
;
  // Check condition
if (return <div className='text - red - 600'>Failed to load</div>) {
  $2
}  // Check condition
if (return <div > Loading…</div>) {
  $2
}
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function ClientDashboard() {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);
  if (error) return <div className='text-red-600'>Failed to load</div>;  if (!data) return <div>Loading…</div>;
  const jobs = data.jobs as any[];
;
  async /**
 * close_job - Function description
 */
function close_job() {
    await fetch (`/api / jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ status: 'Closed' }),
    });
    mutate();

  }
export default function ClientDashboard() {;
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);

  if (error) return <div className='text-red-600'>Failed to load</div>;  if (!data) return <div>Loading…</div>;

  const jobs = data.jobs as any[];

import useSWR from 'swr'
import Link from 'next/link'
const fetcher = (url: string) => fetch(url).then((r) => r.json())
export default function ClientDashboard() {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher),
  if (error) return <div className="text-red-600">Failed to load</div>,
  if (!data) return <div>Loading…</div>,
  if (error) return <div className="text-red-600">Failed to load</div>,
  if (!data) return <div>Loading…</div>,
  const jobs = data.jobs as any[]
  async function closeJob(id: string) {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Closed' })}),
    mutate()
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Jobs</h1>
        <Link href="/post-job"><a className="px-3 py-2 rounded bg-black text-white text-sm">Post New Job</Link></Link>
      </div>
      <div className="grid gap-4">
        {jobs.length === 0 && <p className="text-sm text-gray-600">No jobs yet.</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {jobs.map((job) => (
          <div key={job.id} className="border rounded p-4 shadow-sm bg-white dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{job.title}</h2>
                <p className="text-xs text-gray-500 mt-1">Category: {job.category} • Status: {job.status}</p>
                {job.requiredSkills?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.requiredSkills.map((s: string) => (
                      <span
                        key={s}
                        className='px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800'
                      >
                        {s}
                      </span>                    ))}
                  </div>
                )}
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{s}</span>
import useSWR from 'swr';
import Link from 'next/link';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function ClientDashboard(req, res) {
  try {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);
  if (error) return <div className="text-red-600">Failed to load</div>,;
  if (!data) return <div>Loading…</div>,;
  const jobs = data.jobs as any[];
  async function closeJob(id: string) {;
    await fetch(`/api/jobs/${id}`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ status: 'Closed' })});
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h1 className="text-2xl font-semibold">Your Jobs</h1>;
        <Link href="/post-job"><a className="px-3 py-2 rounded bg-black text-white text-sm">Post New Job</a></Link>;
      </div>;
      <div className="grid gap-4">;
        {jobs.length === 0 && <p className="text-sm text-gray-600">No jobs yet.</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {jobs.map((job) => (;
          <div key={job.id} className="border rounded p-4 shadow-sm bg-white dark:bg-gray-900">;
            <div className="flex items-start justify-between gap-4">;
              <div>;
                <h2 className="text-lg font-medium">{job.title}</h2>;
                <p className="text-xs text-gray-500 mt-1">Category: {job.category} • Status: {job.status}</p>;
                {job.requiredSkills?.length > 0 && (;
                  <div className="mt-2 flex flex-wrap gap-2">;
                    {job.requiredSkills.map((s: string) => (;
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{s}</span>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
              <div className="flex gap-2">
                <Link href={`/client/jobs/${job.id}/applicants`}><a className="px-2 py-1 text-sm border rounded">View Applicants</Link></Link>
                <Link href={`/client/jobs/${job.id}/edit`}><a className="px-2 py-1 text-sm border rounded">Edit Job</Link></Link>
                <button className="px-2 py-1 text-sm border rounded" onClick={() => closeJob(job.id)}>Close Job</button>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
