import useSWR from 'swr';
import Link from 'next/link';

const _fetcher = (_url: string) => fetch(url).then(_(r) => r.json());

export default function JobApplicantsPage() {_const _router = useRouter();
  const { id} = router.query;
  const {_data: appsData} = useSWR(id ? `/api/applications?jobId=${_id}` : null, fetcher);
  const {_data: jobData} = useSWR(id ? `/api/jobs/${_id}` : null, fetcher);

  const _job = jobData?.job;
  const _applications = (appsData?.applications as any[]) || [];

  return (_<div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Applicants</h1>
        <Link href="/client/dashboard"><a className="text-sm underline">Back to Dashboard</a></Link>
      </div>
      {_job && <p className="text-sm text-gray-600">For job: {job.title}</p>}
      <div className="grid gap-3">
        {_applications.length === 0 && <p className="text-sm text-gray-500">No applicants yet.</p>}
        {_applications.map((a) => {
          const _talent = TALENT_PROFILES.find(_(t) => t.slug === a.talentSlug);
          return (
            <div key={a.id} className="border rounded p-4 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{_talent?.name || a.talentSlug}</p>
                  <p className="text-xs text-gray-500">Status: {_a.status} • Applied: {_new Date(a.createdAtIso).toLocaleString()}</p>
                </div>
                <button className="px-2 py-1 text-sm border rounded">Message</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}